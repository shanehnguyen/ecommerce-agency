/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   Straight from the catalog (00-MASTER-OFFER.md §4.3 and §4.4): one page
   for a single campaign, or the full store — sold as, respectively, a
   fixed-price single-page build and the last website you'll need.
   Used on both the homepage pricing section AND the /apply "which option"
   question, so the two never drift apart. Change it once, here.

   The homepage renders the value STACK (stack + bonuses + totalValue +
   price) when present; /apply keeps rendering the shorter `features`
   checklist — same data file, two densities.
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
  /** Short checklist used on /apply's compact offer cards. */
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
  /** When true, renders as wrapped chips instead of a checklist, with
   * features[0] as a lead-in caption. Neither card uses this currently. */
  featuresAsChips?: boolean;
  featured?: boolean;
};

export const priceCards: PriceCard[] = [
  {
    eyebrow: 'Option 1 · Scale everything',
    name: 'The 14-Day Conversion Build',
    description: 'A complete Shopify store or website, built to convert higher.',
    price: '$4,500', qualifier: 'one-time', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    features: [
      'Option 2 but for every page',
      'Every page optimized for conversion + unlimited revisions',
      'Higher conversion rates (or we work for free)',
      'Done-for-you & delivered in 14 days',
    ],
    stack: [
      'Every page built: home, product, cart, checkout, upsells',
      'Customer research + copy written to sell',
      'Unlimited revisions until you love it',
    ],
    bonuses: [
      'Cart tracking + email capture',
      'Top 3 competitor store breakdown',
      'Tuned to load in under 2 seconds',
    ],
    anchor: 'Agencies charge $15,000+ and still do less.',
  },
  {
    eyebrow: 'Option 2 · Prove it fast',
    name: 'Landing Page',
    description: 'One page, built around a single offer or campaign, for testing fast or running paid traffic.',
    price: '$2,000', qualifier: 'one-time',
    cta: 'Build my landing page', event: 'Pricing:Landing',
    features: ['Customer research and ad audit', 'Format selection: advertorial, listicle, quiz, comparison, or product page', 'Copywriting', 'Design and development'],
    stack: [
      'We research your customers and your ads first',
      'Every word written to make them buy',
      'Designed, built, and live — fast',
    ],
  },
];
