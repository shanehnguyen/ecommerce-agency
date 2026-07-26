/* =====================================================================
   pricing.ts — SINGLE SOURCE OF TRUTH for the two offers.
   Straight from the catalog (00-MASTER-OFFER.md §4.3 and §4.4): one page
   for a single campaign, or the full store — sold as, respectively, a
   fixed-price single-page build and the last website you'll need.
   Used on both the homepage pricing section AND the /apply "which option"
   question, so the two never drift apart. Change it once, here.
   ===================================================================== */

export type PriceCard = {
  name: string;
  description: string;
  price: string;
  qualifier: string;
  cta: string;
  event: string;
  features: string[];
  featured?: boolean;
};

export const priceCards: PriceCard[] = [
  {
    name: 'Landing Page',
    description: 'One page, built around a single offer or campaign, for testing fast or running paid traffic.',
    price: '$2,000', qualifier: 'flat',
    cta: 'Build my landing page', event: 'Pricing:Landing',
    features: ['Fixed price, no hourly billing, no surprises', 'One high-converting page built around a single offer', 'Written and designed to convert cold traffic', 'Live in 7 days on your existing theme'],
  },
  {
    name: 'Full Store Build',
    description: 'Your entire storefront rebuilt end to end, the last site you need as you scale.',
    price: '$4,500', qualifier: 'starting', featured: true,
    cta: 'Build my website', event: 'Pricing:Full',
    features: ['Built to be the only site you need, no ceiling as you scale', 'Unlimited revisions and integrations, no extra invoices', 'Mobile-first design, tuned to hit a 60+ PageSpeed score', 'Live in 14 days'],
  },
];
