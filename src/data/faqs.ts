/* =====================================================================
   faqs.ts — homepage FAQ. Seven questions, written the way a store owner
   would actually ask them, answered in plain words: short sentences, no
   jargon, one idea per line. Answers are arrays of short paragraphs
   (FAQ.astro renders each as its own <p>; the FAQPage schema joins them).
   Every fact matches the deal timeline: free design after the call, pay
   only on approval, live by day 14, free work until it outconverts.
   ===================================================================== */

export type Faq = { q: string; a: string | string[] };

export const homeFaqs: Faq[] = [
  {
    q: 'What do I get for free?',
    a: [
      'The call, and your new homepage design.',
      'You see the design first. If you like it, we build the rest. If you don’t, you walk away and pay nothing.',
    ],
  },
  {
    q: 'When do I actually pay?',
    a: [
      'Only after you see your homepage design and say yes.',
      'Then it’s 50% to start the build, and 50% when your site is live.',
    ],
  },
  {
    q: 'What if it’s not done in 14 days?',
    a: [
      'Then you don’t pay. Simple as that.',
      'Day 0 is our first call. Day 14 is your new site, live. The free design happens inside those 14 days, not before them.',
    ],
  },
  {
    q: 'What if my new site doesn’t sell more?',
    a: [
      'We keep working on it for free until it beats your old numbers.',
      'On day one, we screenshot your current stats together. That’s the number we have to beat. No end date, no excuses.',
    ],
  },
  {
    q: 'What do you need from me?',
    a: [
      'Three things: your logo, your product photos, and access to your store.',
      'One call, and we take it from there. No long forms, no weeks of back-and-forth.',
    ],
  },
  {
    q: 'Do you only work with Shopify?',
    a: [
      'Shopify is what we do best and build fastest.',
      'On something else? Just ask. We’ll tell you straight whether we can help — and whether switching is worth it for you.',
    ],
  },
  {
    q: 'Who owns the site when it’s done?',
    a: [
      'You do. The code, the design, everything. No lock-in, no contract.',
      'Want us to keep improving it after launch? We can, for a small monthly fee. Totally optional.',
    ],
  },
];
