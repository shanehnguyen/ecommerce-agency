// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Static-first build (KitchenWebsites-Build-Spec §3 performance budget).
// The /api/*.js Vercel functions deploy alongside the static output untouched.
export default defineConfig({
  site: 'https://www.madefrontpage.com',
  output: 'static',
  // Old kitchen-site paths → the new one-pager / apply flow, so existing
  // links and ads never 404.
  redirects: {
    '/book': '/apply',
    '/done-for-you': '/',
    '/websites': '/',
    '/scorecard': '/',
    '/calculator': '/',
    '/seo': '/',
    '/get-found': '/',
    // case studies removed Oct 2026; send old links to the portfolio
    '/case-studies': '/#portfolio',
    '/case-studies/lynhs-drinks': '/#portfolio',
    '/case-studies/pk-cabinets': '/#portfolio',
  },
  adapter: vercel({
    webAnalytics: { enabled: false }, // we wire Meta Pixel + GA4 ourselves
  }),
  build: {
    // inline every stylesheet: the two small CSS files were render-blocking
    // requests on the landing page (~160ms each on a phone)
    inlineStylesheets: 'always',
  },
  trailingSlash: 'never',
});
