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
  brand: 'Front Page Commerce',
  legalEntity: 'FLIPFIX LLC',
  legalName: 'FLIPFIX LLC d/b/a Front Page Commerce', // footer + legal pages
  formerName: 'FlipFix Digital', // shown as "Formerly …" in footer + schema
  wordmark: { lead: 'Front Page', accent: 'Commerce' },
  byline: 'by Shane N.',
  founder: 'Shane Nguyen',
  tagline: 'Conversion-built Shopify storefronts for consumer brands.',

  domain: 'madefrontpage.com',
  url: 'https://www.madefrontpage.com',

  // ---- Contact --------------------------------------------------------
  email: 'shanehnguyen@gmail.com',
  phone: '(408) 908-8131',          // optional, leave blank to hide
  location: { city: 'Austin', region: 'TX', label: 'Austin, Texas' },
  social: {
    instagram: 'https://www.instagram.com/madefrontpage',
    facebook: 'https://www.facebook.com/madefrontpage',
    linkedin: 'https://www.linkedin.com/in/shanenguyen1253/',
  },

  // ---- The single CTA (identical on every button, per the structure spec)
  cta: { label: 'SEE YOUR HOMEPAGE FIRST', href: '/apply' },

  // ---- Scarcity — evergreen copy ("I only take N builds a month"), so
  // nothing goes stale. slotsOpen is the TRUE capacity cap; only change it
  // if actual capacity changes.
  scarcity: {
    slotsOpen: 3,
  },

  // ---- Booking / form plumbing ---------------------------------------
  // Calendar shown to QUALIFIED applicants after they submit /apply.
  bookingUrl: 'https://calendly.com/shanehnguyen/30-min-strategy-session',
  callLengthMinutes: 30,

  // Web3Forms access key — PUBLIC by design (ships in the client form POST;
  // Web3Forms blocks server-side submits on the free plan). Abuse is limited
  // by domain + spam settings in the Web3Forms dashboard.
  web3formsKey: '874d9b71-c185-4a8c-96a0-aba446ac3bf7',

  // ---- Analytics — wired in Analytics.astro, all PUBLIC client ids -----
  analytics: {
    // MUST match the ad campaign's selected pixel AND api/pulse.js's
    // META_PIXEL_ID default, or the campaign goes blind to the site's events.
    metaPixelId: '1460315575868963',
    ga4Id: '',                        // optional — blank disables GA4
    clarityId: 'xslhs1jscu',          // Microsoft Clarity id
  },
} as const;

// ---- Pricing (authoritative numbers from 00-MASTER-OFFER.md) ----------
export const pricing = {
  build: 4500,          // Full Store Build (the default product)
  buildLabel: '$4,500',
  depositSplit: '$0 until you approve the design, then 50% to start the build, 50% on launch',
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
