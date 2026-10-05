/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   One build (the Conversion Build) and one ongoing plan (the Growth
   Plan). Change it once, here.

   The Conversion Build leads with the PAGES it covers, rendered as chips,
   so scope reads at a glance. The Growth Plan does the same with its five
   services, then a short checklist of how the plan works.

   Search sits last on the Growth Plan on purpose: it's offered, but not
   pushed, because SEO/AEO/GEO can't show results inside a normal
   cancel-anytime window.

   The Growth Plan price is a placeholder ($X,XXX/mo): it's quoted on
   the call.

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
    description: "For growing brands with traffic. Every page you need to convert higher.",
    price: '$4,500', pricePrefix: 'starting at', qualifier: '', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    pagesLabel: 'Pages included',
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
    scopeNote: 'Need a page that isn’t on this list? It gets built too.',
    features: [
      "Live in 14 days or you don't pay",
      'Every page you need to convert traffic from any source',
      'Every word written for you',
      'Unlimited revisions for 14 days',
    ],
    stack: [
      "Live in 14 days or you don't pay",
      'Every word on every page written for you',
      'Custom sections built for your products and the traffic you run',
      'Unlimited revisions for 14 days',
    ],
    riskFree: 'See it before you buy it.',
  },
  {
    eyebrow: 'Phase 2',
    name: 'The Growth Plan',
    description: "For brands that want everything handled. Choose any service you need.",
    price: '$X,XXX', qualifier: '/mo',
    cta: 'Keep it selling', event: 'Pricing:Retainer',
    pagesLabel: 'Pick your services',
    pages: [
      'Site upkeep',
      'Sales and launch pages',
      'Email and SMS',
      'SEO and AI search',
      'Monthly sales reports',
    ],
    scopeNote: 'Need a service that isn’t on this list? Just ask.',
    features: [
      'All done for you',
      'Month-to-month. Cancel anytime',
      'Weekly and monthly reports',
    ],
    stack: [
      'All done for you',
      'Month-to-month. Cancel anytime',
      'Weekly and monthly reports',
    ],
  },
];
