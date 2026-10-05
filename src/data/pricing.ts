/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   One build (the Conversion Build) and one ongoing plan (the Growth
   Plan). Change it once, here.

   The Conversion Build leads with the PAGES it covers, rendered as chips,
   so scope reads at a glance. The Growth Plan lists its services as
   pickable tiles (name + one line on what it does), then a short
   checklist of how the plan works.

   Search sits last on the Growth Plan on purpose: it's offered, but not
   pushed, because SEO/AEO/GEO can't show results inside a normal
   cancel-anytime window.

   The Growth Plan price reads "Custom": it's a monthly fee quoted on
   the call (a "$X,XXX" placeholder looked unfinished).

   Keep each stack to FIVE lines or fewer. Past that a checklist stops
   reading as a spec and starts reading as padding.

   PriceCardContent renders `pages` + `stack` when present and
   falls back to `features`. Both cards carry a stack, so `features` is
   currently the unused fallback — kept accurate so it's safe if a stack
   is ever cut.
   ===================================================================== */

export type PriceCard = {
  eyebrow: string;
  name: string;
  description: string;
  price: string;
  /** Small label BEFORE the number ("starting at"). The Conversion Build
   * is no longer a flat fee — scope above the standard store is quoted. */
  pricePrefix?: string;
  qualifier: string;
  cta: string;
  event: string;
  /** Fallback checklist — only rendered if `stack` is absent. */
  features: string[];
  /** Pages covered, rendered as chips under `pagesLabel`. This is the
   * scope boundary, not a benefit list — keep it literal and complete. */
  pages?: string[];
  pagesLabel?: string;
  /** Services as name + one-line description tiles, in place of `pages`
   * chips. Rendered under `pagesLabel`, with `scopeNote` below. */
  services?: { name: string; desc: string }[];
  /** Plain-language note under the page chips. */
  scopeNote?: string;

  /** Caption above the stack, so the list reads as "and on top of those
   * pages, here's what's done to them". */
  stackLabel?: string;
  /** Homepage "what you get" list — plain-language deliverables, no
   * per-item dollar tags (self-assigned line prices read as invented;
   * the market anchor below carries the value math instead). */
  stack?: string[];
  /** Homepage bonuses: named extras, BONUS-tagged. */
  bonuses?: string[];
  /** Optional line above the price. Currently unused on both cards: a
   * comparison-to-agencies anchor and an upgrade nudge both read as
   * arguing with the buyer at the exact moment they're reading the
   * number. If one ever returns it must be provable, never a made-up
   * total. */
  anchor?: string;
  /** Risk-reversal line under the price: the see-it-before-you-buy promise.
   * Mechanics live in the FAQ ("What's the free homepage design?"). */
  riskFree?: string;
  /** When true, renders as wrapped chips instead of a checklist, with
   * features[0] as a lead-in caption. Neither card uses this currently. */
  featuresAsChips?: boolean;
  featured?: boolean;
};

export const priceCards: PriceCard[] = [
  {
    eyebrow: 'Phase 1',
    name: 'The Conversion Build',
    description: "For growing brands that need a complete Shopify store. Every page you need to convert higher.",
    price: '$4,500', pricePrefix: 'from', qualifier: '', featured: true,
    cta: 'See your homepage first', event: 'Pricing:Full',
    pagesLabel: 'Pick the pages you need',
    pages: [
      'Homepage',
      'Collection pages',
      'Product pages',
      'Ad landing pages',
      'B2B pages',
      'Cart + upsells',
      'About + brand story',
      'FAQ, contact, policies',
    ],
    scopeNote: 'Don’t see a page you need? I’ll build that too.',
    features: [
      "Live in 14 days or you don't pay",
      'Every word written for you',
      'Unlimited changes for 14 days',
    ],
    stack: [
      "Live in 14 days or you don't pay",
      'Every word written for you',
      'Unlimited changes for 14 days',
    ],
    riskFree: 'See it before you buy it.',
  },
  {
    eyebrow: 'Phase 2',
    name: 'The Growth Plan',
    description: "For growing brands that need everything Shopify-related handled. Choose whichever services you need.",
    price: 'Custom', qualifier: '/mo',
    cta: 'Get the Growth Plan', event: 'Pricing:Retainer',
    pagesLabel: 'Pick your services',
    services: [
      { name: 'Site upkeep', desc: 'Fixes, updates and new products, handled for you.' },
      { name: 'Conversion rate optimization', desc: 'Monthly tests that turn more of your visitors into buyers.' },
      { name: 'Email and SMS', desc: 'Flows and campaigns that bring customers back to buy.' },
      { name: 'SEO and AI search', desc: 'Get found on Google and in AI answers like ChatGPT.' },
    ],
    scopeNote: 'Need a service that isn’t on this list? Just ask.',
    // no checklist: the service tiles carry this card on their own
    features: [],
    stack: [],
    riskFree: 'Monthly, set on our call. Cancel anytime.',
  },
];
