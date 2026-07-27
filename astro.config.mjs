// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Static-first build (KitchenWebsites-Build-Spec §3 performance budget).
// The /api/*.js Vercel functions deploy alongside the static output untouched.
export default defineConfig({
  site: 'https://www.flipfixdigital.com',
  output: 'static',
  // Old kitchen-site paths → the new one-pager / apply flow, so existing
  // links and ads never 404.
  redirects: {
    '/book': '/apply',
    '/done-for-you': '/',
    '/websites': '/',
    '/scorecard': '/',
    '/about': '/',
    '/calculator': '/',
    '/seo': '/',
    '/get-found': '/',
  },
  adapter: vercel({
    webAnalytics: { enabled: false }, // we wire Meta Pixel + GA4 ourselves
  }),
  build: {
    inlineStylesheets: 'auto',
  },
  trailingSlash: 'never',
});
