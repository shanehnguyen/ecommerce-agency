/* =====================================================================
   faqs.ts — homepage FAQ. Four broad questions, each one rolling up
   several of the real objections from 00-MASTER-OFFER.md so the answer
   is comprehensive instead of split across a long list. Answers are
   arrays of short, one-beat-per-line paragraphs (FAQ.astro renders each
   as its own <p>; the FAQPage schema joins them). Voice: direct,
   numbers-first, no fluff.
   ===================================================================== */

export type Faq = { q: string; a: string | string[] };

export const homeFaqs: Faq[] = [
  {
    q: 'How fast is this, and what do you need from me?',
    a: [
      'The scope is fixed and the decisions are already made, so the discovery workshops and approval chains that stretch out an agency timeline just don’t exist here.',
      'The 14 days start the moment you hand me your brand assets (logo, product photography, existing copy) plus access to your Shopify and analytics, not when you pay, so you control the start line.',
      'You’re not on daily calls. One kickoff, one consolidated round of feedback, one launch walkthrough.',
    ],
  },
  {
    q: 'What if it doesn’t convert better, or something breaks after launch?',
    a: [
      'On day one we screenshot your current analytics together and both sign off on the baseline number.',
      'If your conversion rate hasn’t beaten that baseline, I keep working free for 60 days until it does. I won’t promise you a specific percentage, because anyone who does is either guessing or lying, and you’d be right not to trust them.',
      'You also get a 60-day iteration warranty and a six-month code warranty, plus a measurement report on day 44 comparing your old numbers to your new ones by device and traffic source.',
    ],
  },
  {
    q: 'What’s actually included, and what if I need copy written or I’m on another platform?',
    a: [
      'The base build uses your existing product copy and always includes a conversion strategy document (offer architecture, bundle structure, the objection map for your product page) delivered before design starts.',
      'Full conversion copywriting for the site is a +$1,200 add-on if you want it written for you.',
      'If you’re not on Shopify yet, migrating from Wix, WooCommerce, or Squarespace is a +$1,500 add-on with a full 301 redirect map, so you don’t lose the rankings you already have.',
    ],
  },
  {
    q: 'Why is this cheaper than an agency, and who is it actually for?',
    a: [
      'Because it’s me, not a team with account managers and a discovery phase billed to you. Agencies in this space take 8 to 16 weeks and charge $15,000 to $75,000; I deliver in 14 days at a published price.',
      'It’s built for real stores doing $20k+ a month, not dropshippers on a generic catalogue or anyone who needs four people to approve a decision.',
      'I also don’t take the outcome guarantee on a store with fewer than 500 orders a quarter, because I can’t measure it honestly. If that’s you, I’ll tell you on the call and point you to someone who fits.',
    ],
  },
];
