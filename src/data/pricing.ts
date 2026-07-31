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
  /** Full Store Build's list renders as wrapped chips instead of a checklist
   * (it's a list of pages, not steps) — features[0] stays a lead-in caption. */
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
    features: ['Strategy session', 'Copywriting', 'Design', 'Development', 'A/B test launch & monitoring for conversion'],
  },
  {
    eyebrow: 'Option 2 · Scale everything',
    name: 'Full Store Build',
    description: "Everything from the landing page — but for your ENTIRE website. The last site you'll ever need.",
    price: '$4,500', qualifier: 'starting', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    features: ['We optimize EVERYTHING', 'Home page', 'Product page', 'Collection page', 'Cart', 'Checkout', 'Upsell flows', 'Landing pages'],
    featuresAsChips: true,
  },
];
