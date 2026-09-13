// Builds every browser/home-screen icon from the FP mark.
// Usage: node scripts/make-favicons.mjs [path/to/fp-logo.png]
// The source has a white background; white is keyed out to transparency so
// the tab icon sits on whatever the browser's tab color is.
import sharp from 'sharp';
import { writeFileSync, mkdirSync } from 'node:fs';

const SRC = process.argv[2] ?? 'public/assets/images/fp-logo-source.png';
const INK = [26, 24, 20]; // --ink
const MASTER = 512;

// 1. Luminance -> alpha (dark = opaque ink, white = transparent), keeping the
//    antialiased edges soft.
const { data, info } = await sharp(SRC).trim({ threshold: 20 }).ensureAlpha().raw()
  .toBuffer({ resolveWithObject: true });
const out = Buffer.alloc(data.length);
for (let i = 0; i < data.length; i += 4) {
  const lum = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
  const a = Math.max(0, Math.min(255, ((235 - lum) / (235 - 60)) * 255));
  out[i] = INK[0]; out[i + 1] = INK[1]; out[i + 2] = INK[2];
  out[i + 3] = Math.round(a * (data[i + 3] / 255));
}
const keyed = sharp(out, { raw: { width: info.width, height: info.height, channels: 4 } });

// 2. Square master on a transparent canvas.
const clear = { r: 0, g: 0, b: 0, alpha: 0 };
const master = await keyed.png().toBuffer()
  .then((b) => sharp(b).resize(MASTER, MASTER, { fit: 'contain', background: clear, kernel: 'lanczos3' }).png().toBuffer());
mkdirSync('public/assets/images', { recursive: true });
writeFileSync('public/assets/images/fp-logo.png', master);

const size = (px, { pad = 0, bg = clear } = {}) => {
  const inner = Math.round(px * (1 - pad * 2));
  return sharp(master).resize(inner, inner, { kernel: 'lanczos3' })
    .extend({ top: Math.floor((px - inner) / 2), bottom: Math.ceil((px - inner) / 2), left: Math.floor((px - inner) / 2), right: Math.ceil((px - inner) / 2), background: clear })
    .flatten(bg === clear ? false : { background: bg })
    .png().toBuffer();
};

// 3. Tab icons — transparent.
const ico = [16, 32, 48];
const icoPngs = await Promise.all(ico.map((px) => size(px)));
writeFileSync('public/favicon-16x16.png', icoPngs[0]);
writeFileSync('public/favicon-32x32.png', icoPngs[1]);
writeFileSync('public/android-chrome-192x192.png', await size(192));
writeFileSync('public/android-chrome-512x512.png', await size(512));

// favicon.ico: PNG-in-ICO container (16/32/48).
const header = Buffer.alloc(6 + 16 * ico.length);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(ico.length, 4);
let offset = header.length;
ico.forEach((px, i) => {
  const e = 6 + 16 * i;
  header.writeUInt8(px, e); header.writeUInt8(px, e + 1);
  header.writeUInt16LE(1, e + 4); header.writeUInt16LE(32, e + 6);
  header.writeUInt32LE(icoPngs[i].length, e + 8); header.writeUInt32LE(offset, e + 12);
  offset += icoPngs[i].length;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...icoPngs]));

// favicon.svg: the mark embedded, flipped to light ink on dark browser themes
// so it never disappears on a dark tab strip.
const svg64 = (await size(128)).toString('base64');
writeFileSync('public/assets/images/favicon.svg', `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <style>@media (prefers-color-scheme: dark) { image { filter: invert(1); } }</style>
  <image width="128" height="128" href="data:image/png;base64,${svg64}"/>
</svg>
`);

// 4. Home-screen icons — iOS and Android masks paint transparency black, which
//    would hide a dark mark, so these two get a cream plate.
const cream = { r: 244, g: 241, b: 234, alpha: 1 };
writeFileSync('public/apple-touch-icon.png', await size(180, { pad: 0.14, bg: cream }));
writeFileSync('public/android-chrome-maskable-512x512.png', await size(512, { pad: 0.2, bg: cream }));

console.log('icons written');
