import { Redis } from '@upstash/redis';

/* =====================================================================
   /api/vsl — VSL watch-through retention.

   The homepage VSL beacons the furthest second it has actually watched
   (see index.astro's player script — playback pauses, and a beacon fires,
   the moment the tab is hidden or the player scrolls out of view, so a
   backgrounded/ignored autoplay never inflates the numbers). Each session
   only ever reports its watermark, so a later beacon just tops up the
   histogram by the delta since its last report instead of double-counting.

   Storage: one Redis hash per UTC day (`vsl:hist:YYYYMMDD`), field = second
   (plus a `starts` field), value = number of sessions that reached at least
   that second that day. /api/pulse's GET handler sums the last 7 days of
   these into the retention curve shown on the dashboard. No per-visitor
   data survives past the short-lived dedupe key below — this is an
   anonymous funnel shape, not visitor-level tracking.
   ===================================================================== */

const SESSION_TTL_S = 60 * 60 * 6; // a single viewing session never spans this long
const DAY_TTL_S = 60 * 60 * 24 * 8; // keep daily histograms 8 days (dashboard reads 7)
const WRITE_RATE_MAX = 60;
const WRITE_RATE_WINDOW_S = 60;
const MAX_SECOND = 3600; // sanity cap — refuse to fan out an absurd range in one beacon

let redisClient = null;
function getRedis() {
  if (redisClient) return redisClient;
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  redisClient = new Redis({ url, token });
  return redisClient;
}

function getClientIp(req) {
  const xff = req.headers['x-forwarded-for'];
  if (xff && typeof xff === 'string') {
    const first = xff.split(',')[0];
    if (first) return first.trim();
  }
  const real = req.headers['x-real-ip'];
  if (real && typeof real === 'string') return real.trim();
  return req.socket?.remoteAddress || 'unknown';
}

const pad = (n) => String(n).padStart(2, '0');
const dayKey = (d) => `vsl:hist:${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}`;
const validId = (id) => typeof id === 'string' && /^v_[a-z0-9]{4,40}$/i.test(id);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  const b = req.body || {};
  if (!validId(b.id)) return res.status(400).json({ ok: false });
  const second = Math.max(0, Math.min(MAX_SECOND, Math.floor(Number(b.second)) || 0));
  const duration = Math.max(0, Math.min(MAX_SECOND, Math.floor(Number(b.duration)) || 0));

  const redis = getRedis();
  if (!redis) return res.status(200).json({ ok: true }); // nothing to store; degrade

  // The video's own length, so /pulse can draw the x-axis out to the real
  // end even before any session has watched all the way through.
  if (duration > 0) { try { await redis.set('vsl:duration', duration); } catch { /* best-effort */ } }

  // Flood guard — a script can't hammer Redis.
  const ip = getClientIp(req);
  try {
    const rk = `vsl:wr:${ip}`;
    const n = await redis.incr(rk);
    if (n === 1) await redis.expire(rk, WRITE_RATE_WINDOW_S);
    if (n > WRITE_RATE_MAX) return res.status(200).json({ ok: true });
  } catch { /* limiter is best-effort */ }

  const sessKey = `vsl:sess:${b.id}`;
  let prevExists = false;
  let prevMax = 0;
  try {
    const prev = await redis.get(sessKey);
    if (prev !== null && prev !== undefined) { prevExists = true; prevMax = Number(prev) || 0; }
  } catch { /* treat as a new session */ }

  if (prevExists && second <= prevMax) return res.status(200).json({ ok: true }); // nothing new

  const today = dayKey(new Date());
  try {
    const pipeline = redis.pipeline();
    if (!prevExists) pipeline.hincrby(today, 'starts', 1);
    const from = prevExists ? prevMax + 1 : 0;
    for (let s = from; s <= second; s++) pipeline.hincrby(today, String(s), 1);
    pipeline.expire(today, DAY_TTL_S);
    await pipeline.exec();
    await redis.set(sessKey, second, { ex: SESSION_TTL_S });
  } catch (err) {
    console.warn('vsl store failed:', err.message);
  }

  return res.status(200).json({ ok: true });
}
