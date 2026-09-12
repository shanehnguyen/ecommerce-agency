/* =====================================================================
   faqs.ts — homepage FAQ. Seven questions, written the way a store owner
   would actually ask them, answered in plain words: short sentences, no
   jargon, one idea per line. Answers are arrays of short paragraphs
   (FAQ.astro renders each as its own <p>; the FAQPage schema joins them).
   Every fact matches the deal timeline in TheDeal.astro: design first
   after the call (days 0-4, free), pay only on approval (day 4), then the
   14-day build clock runs to launch. The 14 days are counted from
   APPROVAL, never from the first call — if that ever changes, this file,
   TheDeal.astro and the hero headline all move together.
   ===================================================================== */

export type Faq = { q: string; a: string | string[] };

export const homeFaqs: Faq[] = [
  {
    q: 'Do I see it before I buy it?',
    a: [
      'Yes. The call and your new homepage design come first.',
      'You see the design, then you decide. If you like it, we build the rest. If you don’t, you walk away and owe nothing.',
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
      'The 14 days start the day you approve your homepage design. Fourteen days later your site is live.',
      'The design comes before that clock, and it costs you nothing. You are never paying for days you are waiting to see something.',
    ],
  },
  {
    q: 'How do I know if it actually worked?',
    a: [
      'We screenshot your current numbers together on day one. That is your baseline.',
      'Six weeks after launch we sit down and compare the two. Most people who build you a website never come back to tell you whether it worked.',
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
