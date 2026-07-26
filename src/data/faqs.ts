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
    q: 'Why can you guarantee 14 days?',
    a: [
      'We’ve run this exact rebuild enough times that it’s a proven system now, not something being figured out on your dime.',
      'A full team works your build in parallel, not one person doing it step by step, which is how we compress what usually takes months into two weeks.',
      'Fast doesn’t mean rushed. Every build goes through the same quality checks it would if we had twelve weeks — we just don’t waste any of them.',
    ],
  },
  {
    q: 'What if it doesn’t convert better?',
    a: [
      'If your conversion rate hasn’t beaten your original numbers, I keep working for free until it does. I won’t promise you a specific percentage, because anyone who does is either guessing or lying, and you’d be right not to trust them.',
      'And if you ever feel unsatisfied, I’ll give you a full refund as long as it’s within 60 days.',
      'You also get a 60-day iteration warranty and a six-month code warranty, plus a measurement report on day 44 comparing your old numbers to your new ones by device and traffic source.',
    ],
  },
  {
    q: 'What’s actually included in this?',
    a: [
      'Your full site: homepage, product pages, collection pages, cart, and checkout, all built from scratch and designed mobile first.',
      'It’s built around what actually converts in your niche, not a generic template, using the layout and copy patterns from the best-converting brands like yours.',
      'And it comes with the same guarantee as everything else here: I keep working for free until it beats your old numbers, with a full refund if you’re not happy within 60 days.',
    ],
  },
  {
    q: 'Why can’t I just hire a freelancer who’s cheaper?',
    a: [
      'You can, but you’re paying for their time, not a result — if the build doesn’t convert, that’s your problem, not theirs, and you’ve lost the time and ad spend either way.',
      'I charge more because I stake my own time on the outcome: a fixed price, a guarantee that I keep working free until it beats your numbers, and a full refund within 60 days if you’re not happy.',
      'It’s built for real stores, not dropshippers on a generic catalogue or anyone who needs four people to approve a decision.',
    ],
  },
];
