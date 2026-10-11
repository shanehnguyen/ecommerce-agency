/* =====================================================================
   faqs-homepage-offer.ts — FAQ for /free-homepage (the free homepage
   design offer). Restored from the homepage as of Oct 8 2026. The
   homepage's own FAQ (free product page offer) lives in faqs.ts.
   ===================================================================== */
import type { Faq } from './faqs';

export const homepageOfferFaqs: Faq[] = [
  {
    q: 'What do I actually get?',
    a: [
      'A new Shopify store, built to get more of your visitors to buy.',
      'I’ll build your homepage first, so you can see the difference before you decide to work with me.',
      'It’s for brands looking to get more sales out of their visitors.',
      'When it’s done, the store is 100% yours.',
    ],
  },
  {
    q: 'Does it actually take 14 days to go live?',
    a: [
      'Yes. Your store goes live in 14 days.',
      'You also get 14 days of unlimited revisions.',
    ],
  },
  {
    q: 'What if the website doesn’t work?',
    a: [
      'I’m not going to promise a million dollars. Your sales depend on your product, pricing and visitors.',
      'What I can show you is proof: what has worked for other brands, applied to you.',
      'I also cut your risk every way I can. You get to see your homepage design first, before you decide.',
      'And this isn’t for every brand. If I don’t think it will work for you, I’ll tell you. Taking on a brand I can’t help is bad for both of us.',
    ],
  },
  {
    q: 'How are you different from every other agency?',
    a: [
      'Most agencies focus on making the store look as pretty as possible. I don’t do that. I build stores that sell. That’s the only metric I care about.',
      'Here’s what it takes to get there:',
      { list: [
        '**Studying your business first.** Who buys from you, what makes them unsure, what your competitors do and what your ads promise.',
        '**Writing every word to sell.** Your pages answer your buyers’ questions before they leave.',
        '**Matching the traffic to the pages.** People who click an ad land on a page that says the same thing, so more of them buy.',
      ] },
      'Other agencies will tell you how amazing their stores look. I’ll tell you how much my stores sell.',
    ],
  },
];
