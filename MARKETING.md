# FlipFix Digital — Ads & Funnel (source of truth)

Last updated: 2026-08-08. Ads are live at $100/day on Meta.

Companion docs: **CALL-SYSTEM.md** (the 3-call structure: discovery → design reveal/close → kickoff) · **FREE-DESIGN-ONBOARDING.md** (Day 0–5 pipeline that produces the free design).

---

## 1. The Offer (one sentence)

> **I design your new homepage free — if you love it, I build your whole store, live in 14 days, or you don't pay.**

### The full sequence (matches TheDeal.astro on the homepage)

| When | What happens | Money |
|---|---|---|
| Day 0 | Short form, then a quick call | Free |
| Day 0–5 | I design your new homepage | Free |
| Day 5 | You approve it — build starts | 50% ($2,250) |
| Day 5–14 | Full build, then launch | Guaranteed (or you don't pay) |
| Day 14+ | Unlimited revisions + we don't stop until it converts higher | Included |

The 14 days is **end-to-end** — the free design days are inside the window, not on top of it. Balance (50%) due at launch.

### Products

| Product | Price | What it is |
|---|---|---|
| The 14-Day Conversion Build (featured) | $4,500 one-time | Whole Shopify store, built to convert higher |
| The 7-Day Campaign Page | $2,000 one-time | One page for one offer, plugs into their existing store/checkout. Made for ads. Formats: advertorial, listicle, quiz, comparison, product page |

### Guarantees (all real, all on the site)

1. Free homepage design first — pay $0 until you approve it
2. Live in 14 days or you don't pay (day 0 = first call)
3. Beats the old conversion rate or I keep working free (baseline = analytics screenshot on day one)

### Operating rules

- Free design only AFTER the call, only if the store is a fit (running paid traffic, real revenue, decision-maker)
- One free concept per store; give a ~7-day decision window on the call
- Capacity: **3 builds a month** — this is the scarcity claim in Ad 5 and the site's sticky bar ("I only take 3 builds a month" — evergreen copy, nothing to update monthly)
- Client-side approval delays pause the 14-day clock — say it on the call, put it in the agreement

---

## 2. The Funnel

```
Meta ad (talking-head video)
  → flipfixdigital.com  (hero → problem/portfolio → pricing → deal timeline → FAQ → closing)
    → /apply  (3 steps: pick offer → revenue band → contact)
      → Calendly (30-min call)
        → free homepage design → approval → 50% → build → launch
```

- Single CTA sitewide: **GET YOUR FREE HOMEPAGE** → /apply
- Ad headline matches the site button word-for-word (message match)
- The standard phrase everywhere is **"convert higher"** (hero, cards, timeline)
- Only client ever named publicly: **Lynh's Drinks (1.2% → 3.4%)**. Everyone else anonymous. No client dashboards shown on screen — numbers spoken/captioned, store imagery only.
- Voice: "I" for promises and admissions, "we" for process.

### Tracking

| Layer | What it does |
|---|---|
| Meta Pixel | `Lead` fires on /apply submit, `Schedule` on Calendly booking |
| /pulse (token-gated) | Full funnel per visitor: landed → offer → revenue → details → calendar → booked, with UTM/fbclid per ad |
| VSL retention (/pulse) | Counts ONLY unmuted viewers, one per browser ever, watermark = furthest second with sound on. Reset to zero on 2026-08-08 |
| Clarity | Session recordings |

**Deploy at least weekly** — the closing section's "live by [date]" is computed at build time and drifts if the site isn't redeployed.

---

## 3. The Ads

Strategy: audience is **problem-aware** (they blame their ads, not their website — proven by Meta favoring the reframe hook). Live set = 3 problem-aware/bridge ads + the naked offer. Same close on every ad: free homepage, $0 until approved.

**Rotation:** current winner + Ads 1, 3, 5 **live** (~$25/day each). Ads 2, 4 **benched** for fatigue refresh.

**Judgment rules:** judge at ~$100–150 spend per ad. Kill under 0.7% CTR. Real winner = whichever ad's traffic **starts the apply form** (check /pulse per-source), not highest CTR. Scale winners +10–20% at a time, never doubled overnight. Refresh creative when frequency passes ~3–4 or control CTR decays two weeks straight.

**Benchmarks for this niche (store-owner targeting):** CPM $40–90 normal (don't panic under $100; judge on 7-day windows only). CPC good under $3. CTR good at 1%+, strong at 1.5%+. The metric that decides: **cost per booked call — target under $200** (a call is worth ~$1,100 at a 25% close on $4,500).

---

### AD 1 — The reframe (LIVE)

**Script:**
- [FACE] If you're scaling a consumer brand, your website decides whether your traffic turns into sales.
- [FACE] Not your ads. Not your product. Your website.
- [FACE] You can double your ad spend — a page that converts one percent still converts one percent.
- [STORE IMAGES — Lynh's] We rebuild Shopify stores to convert higher. We took Lynh's Drinks from one point two to three point four percent. Same traffic. Almost triple the sales.
- [FACE] Here's the deal. I'll design your new homepage free. You don't pay a dollar until you see it and love it.
- [FACE] Tap below. Takes two minutes.

**Primary text:**
> Your ads bring the people. Your website decides if they buy.
>
> We rebuilt Lynh's Drinks' store: 1.2% → 3.4% conversion. Same traffic. Almost triple the sales.
>
> Here's the deal:
> ✓ I design your new homepage — free
> ✓ You pay $0 until you approve it
> ✓ Whole store live in 14 days, or you don't pay
>
> Tap Learn More. Two minutes.

**Headline:** Get Your Free Homepage — Pay $0 Until You Approve It
**Description:** Live in 14 days, or you don't pay.

---

### AD 2 — The math (BENCH)

**Script:**
- [FACE] Every day you run ads to a weak website, you're paying full price for half the sales.
- [CAPTION: $2 ÷ 1% = $200/sale] Do the math. Two dollars a click at one percent conversion — that's two hundred dollars per sale.
- [CAPTION: $2 ÷ 2% = $100/sale] Same site at two percent — a hundred dollars per sale. Half your ad costs. Nothing else changed.
- [STORE IMAGES] That's what we do. We rebuild Shopify stores to convert higher — and if it doesn't beat your current numbers, we keep working for free.
- [FACE] First step costs nothing. I'll design your new homepage free. You pay zero until you approve it.
- [FACE] Tap below.

**Primary text:**
> Same ad spend. Double the sales. Nothing changed except the website.
>
> $2 clicks at 1% conversion = $200 per sale.
> Same store at 2% = $100 per sale.
>
> Your website is the multiplier on every ad dollar you spend. We build Shopify stores that convert higher — guaranteed, or we keep working free.
>
> First step costs nothing: your new homepage, designed free. Tap Learn More.

**Headline:** Your New Homepage, Designed Free
**Description:** Pay $0 until you approve it.

---

### AD 3 — The proof (LIVE)

**Script:**
- [FACE] Lynh's Drinks was converting at one point two percent. Twenty-eight days later — three point four. Same products. Same traffic. Same ad spend.
- [FACE] We changed one thing. The website.
- [STORE IMAGES — Lynh's scrolling] Mobile-first product page. Reviews right where the doubt happens. Apple Pay checkout. Loads in under two seconds.
- [FACE] Nearly triple the sales, without one more dollar on ads.
- [FACE] Want to see yours? I'll design your new homepage free. You pay nothing until you approve it. Live in fourteen days.
- [FACE] Tap below.

**Primary text:**
> 1.2% → 3.4% in 28 days. Same products, same traffic, same ad spend.
>
> We changed one thing for Lynh's Drinks: the website.
>
> Mobile-first pages. Reviews where the doubt happens. Checkout in two taps. Loads in under 2 seconds.
>
> Want to see what yours would look like? I'll design your new homepage free — you pay nothing until you approve it.
>
> Tap Learn More.

**Headline:** See Your New Store Free. Live in 14 Days.
**Description:** Pay $0 until you approve the design.

---

### AD 4 — The villain (BENCH)

**Script:**
- [FACE] Your store runs a template. The same template as about a hundred thousand other stores.
- [FACE] Templates are built to look fine for everyone. That's exactly why they don't sell hard for anyone.
- [FACE] And here's the trap — a template caps your conversion rate, so the bigger your ad spend gets, the more that cap costs you.
- [STORE IMAGES] We build custom Shopify stores designed to do one thing: convert your traffic into sales.
- [FACE] I'll design your new homepage free, so you can see the difference before you spend a dollar.
- [FACE] Tap below. Two minutes.

**Primary text:**
> Your store runs the same template as 100,000 other stores.
>
> Templates look fine for everyone. That's why they don't sell hard for anyone — and why your conversion rate is capped no matter how much you spend on ads.
>
> We build custom Shopify stores with one job: turn your traffic into sales.
>
> See the difference before you spend a dollar — your new homepage, designed free. Tap Learn More.

**Headline:** Get Your Free Homepage — Pay $0 Until You Approve It
**Description:** Custom build. Live in 14 days.

---

### AD 5 — The naked offer (LIVE)

**Script:**
- [FACE] Store owners — here's a deal that's hard to say no to.
- [FACE] I'll design your store's new homepage. Free. You pay zero dollars until you've seen it and said yes.
- [FACE] If you love it, we build the whole store — live in fourteen days, or you don't pay.
- [STORE IMAGES] And if it doesn't convert higher than the site you have now? We keep working for free until it does.
- [FACE] You risk nothing. We risk everything. That's how confident we are.
- [FACE] Tap below, fill out the short form, pick a time.

**Primary text:**
> I'll design your store's new homepage. Free. You pay $0 until you've seen it and said yes.
>
> Love it? Whole store, live in 14 days — or you don't pay.
> And we keep working free until it converts higher than your old site.
>
> You risk nothing. We risk everything.
>
> 3 stores a month. That's all I take. Tap Learn More.

**Headline:** Free Homepage Design. Zero Risk.
**Description:** Live in 14 days, or you don't pay.

---

### Spare hook bank (swap first lines when refreshing)

- "Your ads aren't expensive. Your website's just wasting them."
- "Nobody's clicking off your store because of your product."
- "The most expensive thing on your store is the theme you got for free."
- "You don't need more traffic. I can prove it in one number."
- "Every store I've rebuilt doubled its conversion rate. Here's the catch."

---

## 4. VSL (on the homepage, autoplay muted)

Current recording: 4-step pitch (research → awareness matching → copywriting → creative strategy) + conversion guarantee + 14 days + "book a short call."

**Known gap, not a blocker:** it doesn't mention the free homepage offer. Fix whenever next filming — re-record open (name Lynh's Drinks instead of "countless brands") and close (add: free homepage design, $0 until approved, 14 days start to finish). Check whether the retention chart shows anyone reaching the ending before prioritizing.

---

## 5. Copy rules (apply to everything)

- Short declarative sentences. Claim first. No confessional preambles.
- No jargon: say "convert higher," "sell more," never "optimize/leverage/transform/unlock."
- Promise below the proof: best case is Lynh (2.8x), hero promises 1.5–2x, guarantee only requires "higher."
- Every number said out loud must be real. Only Lynh's Drinks is named.
- One CTA phrase everywhere: GET YOUR FREE HOMEPAGE.
