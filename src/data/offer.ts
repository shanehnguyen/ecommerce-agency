/* =====================================================================
   offer.ts — the ecommerce offer content, lifted from 00-MASTER-OFFER.md.
   Kept out of the page markup so the numbers live in one place and read as
   a contract, not marketing. Home page + apply page read from here.
   ===================================================================== */

// ---- What I build (the itemized scope — a list reads as a contract) ----
export const buildIncludes: string[] = [
  'Homepage',
  'Collection page template',
  'Product page template, designed mobile first',
  'Cart drawer',
  'Four supporting pages',
  'Conversion strategy document before design starts',
  'Speed pass to mobile PageSpeed 60+, LCP under 2.5 seconds',
  'Reviews configured and imported',
  'Analytics installed and verified',
  'Accelerated checkout enabled and positioned',
  'Full QA including a live test purchase',
  'Handover walkthrough plus documentation',
];

export const buildExcludes: string[] = [
  'Platform migration',
  'Copywriting',
  'Photography',
  'Additional page templates',
  'Custom app development',
  'Ongoing testing',
];

// ---- The 14 days (without this, "14 days" sounds like a lie) -----------
export const timeline: { day: string; label: string }[] = [
  { day: 'Day 1', label: 'Kickoff. We screenshot your current analytics together.' },
  { day: 'Day 2', label: 'Conversion strategy document. You approve it.' },
  { day: 'Day 3–4', label: 'Mobile product page design, then homepage.' },
  { day: 'Day 5', label: 'Your feedback, one consolidated round.' },
  { day: 'Day 6–10', label: 'Build.' },
  { day: 'Day 11', label: 'Apps, reviews, email flow wiring.' },
  { day: 'Day 12', label: 'Speed pass.' },
  { day: 'Day 13', label: 'QA on real devices. Live test purchase.' },
  { day: 'Day 14', label: 'Launch.' },
  { day: 'Day 44', label: 'Measurement report. Your old numbers against your new ones.' },
];

// ---- Pricing (three tiers, middle emphasised) --------------------------
export type Tier = {
  name: string;
  price: string;
  duration: string;
  blurb: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    name: 'Conversion Sprint',
    price: '$2,500',
    duration: '7 days',
    blurb: 'Homepage + product page on your existing theme.',
  },
  {
    name: 'Full Store Build',
    price: '$4,500',
    duration: '14 days',
    blurb: 'Full store, rebuilt mobile first and measured against your old numbers.',
    featured: true,
  },
  {
    name: 'Build + Growth',
    price: '$8,500',
    duration: '21 days',
    blurb: 'Everything, plus landing pages, bundles, Klaviyo, and 60 days of testing.',
  },
];

export const addOns = 'Add-ons priced individually. Migration +$1,500. Copywriting +$1,200.';

// ---- The three guarantees (three separate promises, never merged) ------
export type Guarantee = { title: string; body: string };

export const guarantees: Guarantee[] = [
  {
    title: 'Live in 14 days or you don’t pay',
    body: 'The clock starts when you send assets. Miss the date and your balance is waived.',
  },
  {
    title: 'It beats your old numbers',
    body: 'I keep iterating free for 60 days until your conversion rate beats the baseline we screenshot on day one.',
  },
  {
    title: 'Six-month code warranty',
    body: 'Any defect in code I wrote, fixed at no charge for six months after launch.',
  },
];

// ---- Who this is for, and who it isn’t ---------------------------------
export const forYou: string[] = [
  '$40k+ a month on Shopify',
  'Running paid traffic',
  '500+ orders last quarter',
  'You’re the decision maker',
  'You have brand assets ready',
  'Under 100 SKUs',
];

export const notForYou: string[] = [
  'Under $20k a month',
  'You have no traffic yet',
  'You’re dropshipping',
  'Four people need to approve',
  'You need a logo first',
  'You need custom ERP work',
];
