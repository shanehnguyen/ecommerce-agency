/* =====================================================================
   pricing-homepage-offer.ts — the two cards for /free-homepage, the ad
   landing page that runs the earlier offer: a free homepage design first.
   Restored from the homepage as of Oct 8 2026. The homepage's own cards
   (free product page offer) live in pricing.ts.
   ===================================================================== */
import type { PriceCard } from './pricing';

export const homepageOfferCards: PriceCard[] = [
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
    riskFree: 'Based on the services you pick. Cancel anytime.',
  },
];
