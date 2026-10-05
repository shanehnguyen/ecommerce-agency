/* =====================================================================
   faqs.ts — homepage FAQ. Five questions, the ones a store owner asks
   before booking: what is it, is 14 days real, what if it doesn't work,
   how much of my time, why you. Plain words, short sentences.
   Every fact matches the deal: homepage design first (free), pay only
   on approval, live in 14 days. Say "live in 14 days" plainly; don't
   qualify when the clock starts.
   ===================================================================== */

/* An answer is a string, or a list of blocks. A block is a paragraph string
   or a bullet list; a bullet can carry its own sub-list. Inline markup:
   **bold** and [link text](/path). */
export type FaqBullet = string | { text: string; list: string[] };
export type FaqBlock = string | { list: FaqBullet[] };
export type Faq = { q: string; a: string | FaqBlock[] };

export const homeFaqs: Faq[] = [
  {
    q: 'What do I actually get?',
    a: [
      'A new Shopify store, built to get more of your visitors to buy.',
      'I design your homepage first, for free. If you like it, I build the rest of your store around it. I write every word.',
      'It’s for brands that already get visitors and want more sales from them.',
      'When it’s done, the store is 100% yours.',
    ],
  },
  {
    q: 'Does it actually take 14 days to go live?',
    a: [
      'Yes. Your store goes live in 14 days.',
      'If it’s late, you don’t pay.',
    ],
  },
  {
    q: 'What if the website doesn’t work?',
    a: [
      'I can’t promise you’ll make a million dollars. Your sales also depend on your product, your prices and your ads.',
      'What I can show you is proof. I’ve helped other brands get more of their visitors to buy. [See the results](/#portfolio).',
      'I also cut your risk every way I can. You see your homepage design first, for free, before you pay anything.',
      'And this isn’t for every brand. If I don’t think it will work for you, I’ll tell you on our call. Taking on a brand I can’t help is bad for both of us.',
    ],
  },
  {
    q: 'What do you need from me?',
    a: [
      'Just access to your Shopify store. Adding me takes about a minute.',
      'I handle the design, the words and the build.',
      'You can ask for as many changes as you want while I build, and for 14 days after launch. Tell me what to change, like a headline or a photo, and I change it.',
      'You don’t have to ask for anything. If you’re happy, you’re done.',
    ],
  },
  {
    q: 'How are you different from every other agency?',
    a: [
      'Most agencies build stores that look nice. I build stores that sell. That’s the only thing I care about.',
      'Here’s what I do to get there:',
      { list: [
        '**I study your business first.** Who buys from you, what makes them unsure, what your competitors do and what your ads promise.',
        '**I write every word to sell.** Your pages answer your buyers’ questions before they leave.',
        '**I match your pages to your ads.** People who click an ad land on a page that says the same thing, so more of them buy.',
      ] },
      'And you see how I work before you pay. I design your homepage first, for free.',
    ],
  },
];

/* Full FAQ — Shane's final answers. Shown on /faq and under the video on
   /after-booking. Edit here and both pages update. */
export const callFaqs: Faq[] = [
  {
    q: 'What do I get for free, and what am I paying for?',
    a: [
      '**Free:** I design your new homepage and write every word on it. I send you a private link so you can look at it.',
      '**Paid:** if you like it, I build the rest of your store around it. If you don’t, you owe me nothing.',
    ],
  },
  {
    q: 'How much is it?',
    a: [
      { list: [
        '**Conversion Build:** from $4,500. I rebuild the pages your store needs to sell.',
        '**Growth Plan:** a monthly fee, set on our call. I keep your store running and growing after launch.',
      ] },
      'Not sure which you need? I’ll tell you on our call.',
      'You pay for your Shopify plan and apps yourself, at their normal price. I don’t add anything on top.',
    ],
  },
  {
    q: 'When do I pay, and can I split it up?',
    a: [
      'Yes. You pay in two halves:',
      { list: [
        '**First half:** when you say yes to your homepage design and sign. You have 3 days to pay.',
        '**Second half:** when I deliver your finished store.',
      ] },
      'Any credit card works. The price, the pages and the dates are all in a short agreement you sign online.',
    ],
  },
  {
    q: 'How long does it take, and can I make changes?',
    a: [
      { list: [
        '**Homepage design:** about 4 days after our call.',
        '**Full store:** live in 14 days.',
        '**Changes:** as many as you want while I build, and for 14 days after I deliver.',
      ] },
      'From you, I just need access to your Shopify store. It takes about a minute.',
    ],
  },
  {
    q: 'What happens to my current store?',
    a: [
      'It stays live and keeps selling while I work.',
      'I build your new store as a separate copy inside your Shopify account. Your products, checkout, shipping and web address don’t change.',
      'When it’s ready, you pick the launch day, and we switch it over together on a call.',
    ],
  },
  {
    q: 'I don’t have much traffic or sales yet. Will this work?',
    a: [
      'A website turns visitors into buyers. If nobody visits, nobody can buy.',
      'So you need a plan to bring people in, like ads, social media or a launch. If you have one, I’ll get your store ready to sell from day one.',
      'Stores that already get steady visitors see the biggest results.',
    ],
  },
  {
    q: 'What results can I expect?',
    a: [
      'More of your visitors buying. That’s the whole goal.',
      'For example, Lynh’s Drinks went from 1.2% to 3.4% of visitors buying.',
      'Your results also depend on your product, your prices and how many people visit. I’ll be honest with you about all three on our call.',
    ],
  },
  {
    q: 'Do you run ads or do SEO?',
    a: [
      '**Ads:** No. You, or whoever runs your ads, keeps running them. I make sure the page your ad links to says the same thing as the ad, so more clicks turn into sales.',
      '**SEO (showing up on Google):** Every store I build is set up so Google can read it. Ongoing SEO is part of the Growth Plan. It takes months to work, so if you want sales fast, ads are better.',
    ],
  },
  {
    q: 'What’s included, and what don’t you do?',
    a: [
      '**Every build includes:**',
      { list: [
        'The design of every page',
        'Every word on every page',
        'Cleanup of your product photos',
        'An email signup form, connected to your email app',
        'Fast pages that Google can read',
        '14 days of changes after I deliver',
        'A store you can easily edit yourself',
      ] },
      '**I don’t:**',
      { list: [
        'Run your ads',
        'Manage your social media',
        'Do photo shoots',
        'Design logos',
      ] },
    ],
  },
  {
    q: 'What happens after launch?',
    a: [
      'You get 14 days of changes. After that, you have two choices:',
      { list: [
        '**Run it yourself.** The store is yours, and it’s easy to edit.',
        { text: '**Keep me on the Growth Plan.** Pick any of these:', list: [
          '**Site upkeep:** fixes, updates and new products.',
          '**Conversion rate optimization:** monthly tests that get more of your visitors to buy.',
          '**Email and SMS:** emails and texts that bring customers back to buy.',
          '**SEO and AI search:** showing up on Google and in AI answers like ChatGPT. This one takes months to work.',
        ] },
      ] },
      'It’s one monthly fee, set on our call. Month-to-month. Cancel anytime.',
    ],
  },
  {
    q: 'I’ve been burned by a developer before. Why is this different?',
    a: [
      { list: [
        'You see your homepage before you pay anything.',
        'The price, the pages and the deadline are in writing before I start.',
        'Want something extra? I tell you the price first, and you decide.',
        'Half your money waits until your store is done.',
        'You talk to me directly, from start to finish.',
      ] },
    ],
  },
  {
    q: 'Why you over something cheaper?',
    a: [
      'A cheap template and my work both run on Shopify. The difference is what’s on the page.',
      'I study your customers and your competitors. Then I write and design every page to answer the questions that stop people from buying.',
      'I only take 3 builds a month, so yours gets my full attention. And you see my work before you pay.',
    ],
  },
];

/* The same questions, sorted into short labelled sections for /faq and
   /after-booking. Picked by the start of each question, so a typo here fails
   the build instead of silently dropping a question. */
export type FaqGroup = { title: string; items: Faq[] };
const byQ = (start: string): Faq => {
  const f = callFaqs.find((x) => x.q.startsWith(start));
  if (!f) throw new Error(`FAQ not found: ${start}`);
  return f;
};
export const callFaqGroups: FaqGroup[] = [
  { title: 'Pricing', items: [byQ('What do I get'), byQ('How much is it'), byQ('When do I pay')] },
  { title: 'Timeline', items: [byQ('How long does it take'), byQ('What happens to my current store')] },
  { title: 'What’s Included', items: [byQ('What’s included'), byQ('Do you run ads'), byQ('What happens after launch')] },
  { title: 'Results', items: [byQ('I don’t have much traffic'), byQ('What results can I expect')] },
  { title: 'Why Me', items: [byQ('I’ve been burned'), byQ('Why you over')] },
];
if (callFaqGroups.reduce((n, g) => n + g.items.length, 0) !== callFaqs.length) {
  throw new Error('callFaqGroups is missing a question from callFaqs');
}
