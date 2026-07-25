/* =====================================================================
   site.config.ts — SINGLE SOURCE OF TRUTH
   Brand strings, contact, scarcity, pricing, calculator defaults, the one
   CTA phrase, and analytics ids all live here so nothing drifts. Every page
   reads from this file — change a value once and it updates everywhere.

   ⚠️  BEFORE LAUNCH, confirm the values marked  TODO  below.
   ===================================================================== */

export const site = {
  // ---- Brand ----------------------------------------------------------
  // The wordmark renders as two words: the second is brass (the design's
  // one accent). Byline under the wordmark credits the solo operator —
  // "people buy the person" at this price.
  brand: 'FlipFix Digital',
  wordmark: { lead: 'FlipFix', accent: 'Digital' },
  byline: 'by Shane N.',
  founder: 'Shane Nguyen',
  tagline: 'Conversion-built Shopify storefronts for consumer brands.',

  // TODO confirm production domain before launch (used for canonical + OG urls)
  domain: 'shanenguyen.co',
  url: 'https://shanenguyen.co',

  // ---- Contact --------------------------------------------------------
  email: 'shanehnguyen@flipfixdigital.com',
  phone: '(408) 908-8131',          // optional, leave blank to hide

  // ---- The single CTA (identical on every button, per the structure spec)
  cta: { label: 'GET YOUR BUILD IN 14 DAYS', href: '/apply' },

  // ---- Scarcity (LOAD-BEARING — must be true; update monthly) ----------
  scarcity: {
    slotsOpen: 2,
    month: 'August',                 // TODO update monthly
    nextAvailable: 'August 4',       // TODO named next-available start date
  },

  // ---- Booking / form plumbing ---------------------------------------
  // Calendar shown to QUALIFIED applicants after they submit /apply.
  bookingUrl: 'https://calendly.com/kitchenwebsites/30-min-strategy-session', // TODO your Calendly link
  callLengthMinutes: 30,

  // Web3Forms access key — PUBLIC by design (ships in the client form POST;
  // Web3Forms blocks server-side submits on the free plan). Abuse is limited
  // by domain + spam settings in the Web3Forms dashboard.
  web3formsKey: '874d9b71-c185-4a8c-96a0-aba446ac3bf7',

  // ---- Analytics — wired in Analytics.astro, all PUBLIC client ids -----
  analytics: {
    metaPixelId: '1460315575868963', // TODO your Meta Pixel id (or blank to disable)
    ga4Id: '',                        // optional — blank disables GA4
    clarityId: 'xmofy84bqy',          // TODO your Microsoft Clarity id (or blank to disable)
  },
} as const;

// ---- Pricing (authoritative numbers from 00-MASTER-OFFER.md) ----------
export const pricing = {
  build: 4500,          // Full Store Build (the default product)
  buildLabel: '$4,500',
  depositSplit: '50% to start, 50% on launch',
} as const;

// ---- ROI calculator defaults (from the offer doc's worked example) ----
// Defaults are pre-filled so the calculator shows value on page load. The
// 1.22 uplift multiplier (1.8% → 2.2%) is defensible; do not inflate it.
export const calculator = {
  sessions: 46000,
  conversionRate: 1.8,     // %
  averageOrderValue: 65,   // $
  upliftMultiplier: 1.22,  // 1.8% → ~2.2%
  buildCost: pricing.build,
} as const;
