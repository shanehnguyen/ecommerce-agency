/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   Two depths of the same job: the three pages that decide whether people
   buy (Essentials), or the whole store (Conversion Build). Used on
   both the homepage pricing section AND /apply, so the two never
   drift apart. Change it once, here.

   SCOPE IS THE STORY, and scope is the ONLY difference now: both builds
   ship in 14 days, so neither name carries a day count — the timeline is
   a guarantee line inside the card instead. Each card leads its "what you
   get" with the PAGES it covers, rendered as chips, so the two compare at
   a glance: eight chips vs four. That contrast does the work, which means
   the words never have to. Say what each build IS; nothing here describes
   Essentials by what it lacks. Do not add scope to Essentials without
   cutting it from the Conversion Build's lead.

   Keep each stack to FIVE lines or fewer. Past that a checklist stops
   reading as a spec and starts reading as padding.

   Bonuses are deliberately NOT on Essentials any more: a "free bonuses"
   block on the cheaper card makes it out-argue the $4,500 one. Extras
   belong to the build that's supposed to win.

   PriceCardContent renders `pages` + `stack` when present and falls back
   to `features`. Both cards carry a stack, so `features` is currently the
   unused fallback — kept accurate so it's safe if a stack is ever cut.
   The price rows carry no anchor line and no bonus stack. Both were cut
   on purpose: next to the number, a comparison or a nudge reads as
   justification, and a price that justifies itself sounds negotiable.
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
  /** Plain-language limit under the page chips. Essentials only: it's the
   * line that stops a starter budget from reading like a full store. */
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
    eyebrow: 'Option 1 · Complete store',
    name: 'The Conversion Build',
    description: "For growing brands with traffic. Every page a customer can land on, rebuilt to sell.",
    price: '$4,500', pricePrefix: 'starting at', qualifier: '', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    pagesLabel: 'Every page you need — all of it built',
    pages: [
      'Homepage',
      'Collection pages',
      'Product pages',
      'Campaign pages',
      'Ad landing pages',
      'Cart + upsells',
      'About + brand story',
      'FAQ, contact, policies',
    ],
    scopeNote: 'Need a page that isn’t on this list? It gets built too.',
    stackLabel: 'On every one of those pages',
    features: [
      "Live in 14 days or you don't pay",
      'Every page you need to convert traffic from any source',
      'Every word written for you',
      'Unlimited revisions for 14 days after launch',
    ],
    stack: [
      "Live in 14 days or you don't pay",
      'Every word on every page written for you',
      'Custom sections built for your products and the traffic you run',
      'Unlimited revisions for 14 days after launch',
    ],
    riskFree: 'See it before you buy it.',
  },
  {
    eyebrow: 'Option 2 · Starter scope',
    name: 'The Essentials Build',
    description: "For brands just launching. The pages that decide whether someone buys, built to sell from day one.",
    price: '$2,000', qualifier: 'one-time',
    // event name kept as-is on purpose: renaming it splits the funnel
    // history in two. The offer changed; the tracking key shouldn't.
    cta: 'Start with the essentials', event: 'Pricing:Landing',
    pagesLabel: 'The pages you get',
    pages: [
      'Homepage',
      'One collection page',
      'One product page',
      'About, FAQ, contact, policies',
    ],
    scopeNote: 'Built on your existing theme.',
    stackLabel: 'What happens to them',
    features: [
      "Live in 14 days or you don't pay",
      'Homepage, collection, and product page rebuilt',
      'Every word on those pages written to sell',
      'Unlimited revisions for 14 days after launch',
    ],
    stack: [
      "Live in 14 days or you don't pay",
      'The three selling pages rewritten and rebuilt word for word',
      'About, FAQ, contact and policies set up clean and simple',
      'Unlimited revisions for 14 days after launch',
    ],
    riskFree: 'See it before you buy it.',
  },
];
