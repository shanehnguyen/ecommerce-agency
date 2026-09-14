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

/* An answer is a string, or a list of blocks. A block is a paragraph string
   or a bullet list; a bullet can carry its own sub-list. Inline markup:
   **bold** and [link text](/path). */
export type FaqBullet = string | { text: string; list: string[] };
export type FaqBlock = string | { list: FaqBullet[] };
export type Faq = { q: string; a: string | FaqBlock[] };

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

/* Full FAQ — Shane's final answers. Shown on /faq and under the video on
   /after-booking. Edit here and both pages update. */
export const callFaqs: Faq[] = [
  {
    q: 'What do I get for free, and what am I paying for?',
    a: [
      'Before you pay anything, I design and write your new homepage. I send you a private link so you can look at it on your phone or computer.',
      'If you love it, you pay me to build the rest of your store around it: your product pages, collection pages, cart, and everything connected to your real products. If you don’t love it, you owe me nothing.',
    ],
  },
  {
    q: 'How much is it, and which build is right for me?',
    a: [
      'The **Essentials Build is $2,000.** I rebuild your homepage, your collection page (where shoppers browse your products) and your product page, and I write every word. Pick this if you’re just launching, or your store hasn’t been getting sales.',
      'The **Conversion Build starts at $4,500.** I build every page your store needs to turn visitors into buyers, including pages made just for your ads and emails. Pick this if people already visit your store every day and you want more of them to buy.',
      'Not sure which one? I’ll tell you on our call.',
      'You pay for your Shopify plan and any apps directly, at their normal price. I add nothing on top.',
    ],
  },
  {
    q: 'When do I pay, and can I split it up?',
    a: [
      'You pay in two halves, and nothing until you’ve seen your homepage.',
      { list: [
        '**First half:** when you sign. You have 3 days to pay it.',
        '**Second half:** when I deliver your finished store. Your 14 days of unlimited changes start then.',
      ] },
      'Any credit card works. Everything is in a short agreement you sign online: the price, the pages and the dates.',
    ],
  },
  {
    q: 'How long does it take, and can I make changes?',
    a: [
      { list: [
        '**Your homepage design:** about 4 days.',
        '**Your full store:** 14 days after you sign and give me access to your store.',
        '**Changes:** unlimited while I build, and for 14 days after I deliver.',
      ] },
      'Your part takes about an hour in total: one call, adding me to your store (it’s free and takes a minute), and sending me your logo and photos.',
    ],
  },
  {
    q: 'What happens to my current store?',
    a: [
      'It stays live and keeps selling while I work. I build your new design as a separate copy inside your Shopify account, so your products, checkout, shipping, web address and links stay exactly as they are. I keep what’s already working and rebuild the pages that do the selling.',
      'When you’re happy with it, you pick the day it goes live, and we switch it over together on a call.',
      'The store is 100% yours, and I make it easy for you to change your own text, images, prices and products, just like you would with a normal template.',
    ],
  },
  {
    q: 'I don’t have much traffic or sales yet. Will this work?',
    a: [
      'A website turns visitors into buyers. If nobody visits, there’s nobody to buy. So if you want fast sales and have no plan to bring people to your store, this is the wrong product for you.',
      'If you do have a plan to bring people in, like ads, social media or a launch, this gets your store ready to sell from day one. That’s the right time to work with me.',
      'You can start at any number of visitors. Stores with steady visitors see the biggest results.',
      'You also don’t need lots of reviews to start. Your story and your product page do the selling until real reviews come in.',
    ],
  },
  {
    q: 'What results can I expect?',
    a: [
      'Before I change anything, I write down your numbers: how many of your visitors buy, how much each order is worth, and everything else that matters. After launch, you see the same numbers side by side, so you know exactly what changed. You can see what that looked like for other brands in my [case studies](/case-studies).',
      'Your results also depend on your product, your prices and how many people visit. I’ll be honest with you about all three before we start.',
    ],
  },
  {
    q: 'Do you run ads or do SEO?',
    a: [
      '**Ads:** You, or whoever runs your ads now, keeps running them. What I do is look at your ads and make sure the page they send people to matches who’s clicking and what they already know about your product.',
      '**SEO (showing up on Google):** Every store I build is set up so Google can read it: fast pages, a clean layout, and a title and description on every page.',
      'Ongoing SEO comes with the Full Partnership plan: blog posts, new pages, and getting other websites to link to yours. SEO takes months to bring in visitors, so if you want sales fast, ads are usually the better choice.',
    ],
  },
  {
    q: 'What’s included, what costs extra, and what don’t you do?',
    a: [
      '**Included in every build:**',
      { list: [
        'The design of every page',
        'Every word on every page',
        'Cleanup of the product photos you already have',
        'An email signup form, connected to your email app',
        'Fast-loading pages',
        'SEO basics, so Google can read your store',
        '14 days of unlimited changes after delivery',
        'A store that’s easy to edit, just like a normal template',
      ] },
      '**Available at added cost (monthly plans, see the next question):**',
      { list: [
        'Maintenance',
        'Conversion Partner',
        'Full Partnership with SEO (blog posts, new pages, and links from other websites)',
      ] },
      '**What I don’t do:**',
      { list: [
        'Run your ads',
        'Manage your social media',
        'Write your email campaigns or automated emails (like Klaviyo flows)',
        'Photo shoots',
        'Logo or brand design',
      ] },
      'I focus on the part that closes the sale: your store.',
    ],
  },
  {
    q: 'What happens after launch?',
    a: [
      'First, you get 14 days of unlimited changes. After that, you have two choices.',
      { list: [
        '**Run it yourself.** The store is yours, and I make it easy for you to edit, just like you would a normal template.',
        { text: '**Keep me on monthly.** There are three plans, and each one includes everything in the one before it:', list: [
          '**Maintenance:** I keep your store running. Updates, fixes when anything breaks, text and image changes, product changes, and new pages when you need them.',
          '**Conversion Partner:** everything in Maintenance, plus every month I find what’s stopping people from buying, fix it, and show you the numbers.',
          '**Full Partnership:** everything in Conversion Partner, plus monthly SEO: blog posts, new pages, and links from other websites. I handle your whole store so you can focus on your product.',
        ] },
      ] },
      'Each plan is one flat monthly fee, priced on our call based on what your store needs. You can cancel anytime with 30 days’ notice. You keep 100% of what your store earns.',
    ],
  },
  {
    q: 'I’ve been burned by a developer before. Why is this different?',
    a: [
      'I hear this a lot. Here’s what’s different:',
      { list: [
        'You see your homepage before you pay anything.',
        'The price, the pages and the deadline are in writing before we start.',
        'If you want something extra, I tell you the price first, and you decide.',
        'Half your money waits until your store is delivered.',
        'You talk to me directly, on real calls, from start to finish.',
      ] },
    ],
  },
  {
    q: 'Why you over something cheaper?',
    a: [
      'Anyone can make a website. A $100 template site and mine both run on Shopify. The difference is what’s on the page.',
      'I study your customers and your competitors. Then I write and design every section to answer the questions that stop people from buying. I lead every build and check every page myself. I take 3 builds a month, so each one gets that attention.',
      'And you see my work before you pay, so it’s easy to compare.',
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
