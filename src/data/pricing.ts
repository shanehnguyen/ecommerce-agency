/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   Two depths of the same job: the three pages that decide whether people
   buy (Essentials), or the whole store with the conversion guarantee
   attached (Conversion Build). Used on both the homepage pricing section
   AND /apply, so the two never drift apart. Change it once, here.

   Each card LEADS with the promise it's liable for, not with scope — the
   guarantee is the first `stack` line on both. The two guarantees differ
   because what's measurable differs: a store with no traffic yet has no
   baseline to beat, so Essentials promises a date instead of a number.

   Bonuses live on Essentials ONLY. Stacking extras onto the $4,500 makes
   it read like it needs justifying; at that price they're assumed.

   PriceCardContent renders `stack` when present and falls back to
   `features`. Both cards carry a stack, so `features` is currently the
   unused fallback — kept accurate so it's safe if a stack is ever cut.
   Value anchors are deliberately BELOW market (agencies charge $10k-25k
   for this scope) so the math stays believable, never inflated.
   ===================================================================== */

export type PriceCard = {
  eyebrow: string;
  name: string;
  description: string;
  price: string;
  qualifier: string;
  cta: string;
  event: string;
  /** Fallback checklist — only rendered if `stack` is absent. */
  features: string[];
  /** Homepage "what you get" list — plain-language deliverables, no
   * per-item dollar tags (self-assigned line prices read as invented;
   * the market anchor below carries the value math instead). */
  stack?: string[];
  /** Homepage bonuses: named extras, BONUS-tagged. */
  bonuses?: string[];
  /** One provable market anchor shown above the price, e.g. what agencies
   * charge for the same scope (verifiable, unlike a made-up total). */
  anchor?: string;
  /** Risk-reversal line under the price: the see-it-before-you-pay promise.
   * Mechanics live in the FAQ ("What's the free homepage design?"). */
  riskFree?: string;
  /** When true, renders as wrapped chips instead of a checklist, with
   * features[0] as a lead-in caption. Neither card uses this currently. */
  featuresAsChips?: boolean;
  featured?: boolean;
};

export const priceCards: PriceCard[] = [
  {
    eyebrow: 'Option 1 · Scale everything',
    name: 'The 14-Day Conversion Build',
    description: "Perfect if you're an established brand looking to get more out of the traffic you already have.",
    price: '$4,500', qualifier: 'one-time', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    features: [
      'Beats your old conversion rate, or I keep working free',
      'Every page you need to convert traffic from any source',
      'Every word written for you',
      'Unlimited changes until you love it',
    ],
    stack: [
      'Beats your old conversion rate, or I keep working free',
      'Every page you need to convert traffic from any source',
      'Every word written for you',
      'Unlimited changes until you love it',
      'Live in 14 days',
    ],
    anchor: 'Agencies charge $15,000+ for less.',
    riskFree: 'Pay $0 until you approve it.',
  },
  {
    eyebrow: 'Option 2 · Start here',
    name: 'The 10-Day Essentials Build',
    description: "Perfect if you're just launching your brand or you just haven't been seeing results.",
    price: '$2,000', qualifier: 'one-time',
    // event name kept as-is on purpose: renaming it splits the funnel
    // history in two. The offer changed; the tracking key shouldn't.
    cta: 'Build my store', event: 'Pricing:Landing',
    features: [
      "Live in 10 days or you don't pay",
      'Homepage, collection, and product page rebuilt',
      'We study your customers and traffic',
      'Every word written to sell',
    ],
    stack: [
      "Live in 10 days or you don't pay",
      'Homepage, collection, and product page rebuilt',
      'We study your customers and traffic',
      'Every word written to sell',
    ],
    bonuses: [
      'Loads in under two seconds',
      'Email capture built in',
    ],
    riskFree: 'Pay $0 until you approve it.',
  },
];
