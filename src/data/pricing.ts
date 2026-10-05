/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   One build (the Conversion Build) and one ongoing plan (the Monthly
   Retainer). Change it once, here.

   The Conversion Build leads with the PAGES it covers, rendered as chips,
   so scope reads at a glance. The retainer leads with service GROUPS
   (store, email + SMS, search) the same way: an inventory you can count,
   not a pile of benefits.

   Search sits last on the retainer with an honest "takes months" note on
   purpose: it's offered, but steered away from, because SEO/AEO/GEO can't
   show results inside a normal cancel-anytime window.

   The retainer price is deliberately blurred ("starting at" + a hidden
   number): it's quoted on the call, and a blurred figure says "there is
   a real number" without anchoring one.

   Keep each stack to FIVE lines or fewer. Past that a checklist stops
   reading as a spec and starts reading as padding.

   PriceCardContent renders `pages` / `groups` + `stack` when present and
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
  /** Several labelled chip groups instead of one `pages` group. Used by
   * the retainer to sort its services by area. `note` renders under that
   * group's chips. */
  groups?: { label: string; items: string[]; note?: string }[];
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
  /** Blurs the number in the price row. The real price is quoted on the
   * call; screen readers get `blurredLabel` instead of the placeholder. */
  priceBlurred?: boolean;
  blurredLabel?: string;
};

export const priceCards: PriceCard[] = [
  {
    eyebrow: 'Option 1 · Complete store',
    name: 'The Conversion Build',
    description: "For growing brands with traffic. Every page a customer can land on, rebuilt to sell.",
    price: '$4,500', pricePrefix: 'starting at', qualifier: '', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    pagesLabel: 'Every page you need to convert higher',
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
    eyebrow: 'Option 2 · Ongoing',
    name: 'The Monthly Retainer',
    description: "For brands that want it handled after launch. Your store, your emails and your texts, run for you every month.",
    price: '$X,XXX', pricePrefix: 'starting at', qualifier: '/mo',
    priceBlurred: true, blurredLabel: 'Price quoted on our call',
    cta: 'Keep it selling', event: 'Pricing:Retainer',
    groups: [
      {
        label: 'Your store',
        items: ['Maintenance + fixes', 'CRO', 'New pages'],
      },
      {
        label: 'Email + SMS',
        items: ['Email flows', 'Email campaigns', 'Popups + signup offers', 'SMS flows + campaigns'],
      },
      {
        label: 'Search',
        items: ['SEO + blog posts', 'AI search (AEO + GEO)'],
        note: 'Search takes months to pay off. Best once the rest is working.',
      },
    ],
    stackLabel: 'Every month',
    features: [
      'Your store kept running, tested and improved',
      'Emails and popups designed to match your store',
      'Every word written for you',
      'Your numbers reported every month',
      "Cancel anytime with 30 days' notice",
    ],
    stack: [
      'Your store kept running, tested and improved',
      'Emails and popups designed to match your store',
      'Every word written for you',
      'Your numbers reported every month',
      "Cancel anytime with 30 days' notice",
    ],
    riskFree: 'Pick what you need. Skip the rest.',
  },
];
