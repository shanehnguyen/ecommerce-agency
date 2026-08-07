/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   Straight from the catalog (00-MASTER-OFFER.md §4.3 and §4.4): one page
   for a single campaign, or the full store — sold as, respectively, a
   fixed-price single-page build and the last website you'll need.
   Used on both the homepage pricing section AND the /apply "which option"
   question, so the two never drift apart. Change it once, here.
   ===================================================================== */

export type PriceCard = {
  eyebrow: string;
  name: string;
  description: string;
  price: string;
  qualifier: string;
  cta: string;
  event: string;
  features: string[];
  /** When true, renders as wrapped chips instead of a checklist, with
   * features[0] as a lead-in caption. Neither card uses this currently. */
  featuresAsChips?: boolean;
  featured?: boolean;
};

export const priceCards: PriceCard[] = [
  {
    eyebrow: 'Option 1 · Prove it fast',
    name: 'Landing Page',
    description: 'One page, built around a single offer or campaign, for testing fast or running paid traffic.',
    price: '$2,000', qualifier: 'one-time',
    cta: 'Build my landing page', event: 'Pricing:Landing',
    features: ['Customer research and ad audit', 'Format selection: advertorial, listicle, quiz, comparison, or product page', 'Copywriting', 'Design and development'],
  },
  {
    eyebrow: 'Option 2 · Scale everything',
    name: 'Full Store Build',
    description: "A complete Shopify store or website built to convert higher. The last site you'll ever need.",
    price: '$4,500', qualifier: 'one-time', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    features: [
      'Option 1 but for every page',
      'Every page optimized for conversion + unlimited revisions',
      'Higher conversion rates (or we work for free)',
      'Done-for-you & delivered in 14 days',
    ],
  },
];
