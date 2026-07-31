/* =====================================================================
   faqs.ts — homepage FAQ. Six broad questions, each one rolling up
   several of the real objections from 00-MASTER-OFFER.md so the answer
   is comprehensive instead of split across a long list. Answers are
   arrays of short, one-beat-per-line paragraphs (FAQ.astro renders each
   as its own <p>; the FAQPage schema joins them). Voice: direct,
   numbers-first, no fluff.
   ===================================================================== */

export type Faq = { q: string; a: string | string[] };

export const homeFaqs: Faq[] = [
  {
    q: 'How does the guarantee work?',
    a: [
      'Live in 14 days or you don’t pay. That’s the delivery guarantee.',
      'Once it’s live, I keep testing and iterating for 60 days until your new site is clearly beating your old numbers.',
      'Still not happy after that? Full refund, no argument.',
    ],
  },
  {
    q: 'How exactly do you improve my conversion rate?',
    a: [
      'We start by tearing apart the best-converting stores in your category, not guessing from a moodboard.',
      'Then we rebuild your offer, copy, social proof, and checkout around what actually works on your buyer.',
      'After launch we keep testing against your real numbers until the new site is clearly winning.',
    ],
  },
  {
    q: 'What do you need from me to complete my website?',
    a: [
      'Your logo, product photos, and access to your current site and analytics. That’s it.',
      'No 40-question intake form, no weeks of back-and-forth. One kickoff call, then I take it from there.',
    ],
  },
  {
    q: 'How fast can you launch?',
    a: [
      'A single landing page: 7 days.',
      'A full store build: 14 days, or you don’t pay.',
      'Fast doesn’t mean rushed — every build passes the same checks it would on a 12-week timeline. We just don’t waste any of them.',
    ],
  },
  {
    q: 'What platforms do you work with?',
    a: 'Whatever you’re already on. Shopify’s our specialty and where we build fastest, so if you’re not on it yet, I’ll tell you honestly whether switching is worth it for you.',
  },
  {
    q: 'What happens after it converts better?',
    a: [
      'The website is 100% yours to keep: code, assets, everything. No lock-in, no forced contract.',
      'If you want me to keep improving it, adding features, or just keeping it maintained, that’s available for a small monthly fee. Never required.',
    ],
  },
];
