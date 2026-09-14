/* =====================================================================
   faq-full.ts — the long-form FAQ on /faq (64 questions in sections).
   Written for a third grader: short sentences, plain words, every
   acronym spelled out. Facts must match Shane's short FAQ (faqs.ts,
   callFaqs), the price cards (pricing.ts) and the client agreement.
   Answer format is the same as faqs.ts: paragraphs and bullet lists,
   with **bold** and [link](/path).
   ===================================================================== */
import type { FaqGroup } from './faqs';

export const fullFaqGroups: FaqGroup[] = [
  {
    title: 'The Free Homepage',
    items: [
      {
        q: 'What do I get for free?',
        a: [
          'I design and write your new homepage before you pay anything.',
          'I send you a private link, so you can look at it on your phone or computer.',
        ],
      },
      {
        q: 'Is it my homepage or a landing page?',
        a: [
          'Your homepage. That’s the main page of your store, the one most people see first.',
          'A landing page is different. It’s a page made for one ad or one offer. Landing pages come with the Conversion Build.',
        ],
      },
      {
        q: 'Do I pay anything before I see it?',
        a: ['No. You pay nothing until you’ve seen your homepage and decided to move forward.'],
      },
      {
        q: 'Do you need access to my store to make it?',
        a: [
          'No. I design your homepage without touching your store.',
          'You only add me to your store after you sign, when the build starts.',
        ],
      },
      {
        q: 'Why do you need so much information about my business?',
        a: [
          'Because your homepage has to fit your customers, not just any store.',
          'I look at who buys from you, what makes them unsure, what your competitors do and what your ads promise. Then your homepage answers those questions before people leave.',
        ],
      },
      {
        q: 'What happens if I don’t like it?',
        a: ['You owe me nothing. No payment, no hard feelings.'],
      },
    ],
  },
  {
    title: 'Pricing',
    items: [
      {
        q: 'How much does it cost?',
        a: [
          { list: [
            '**Essentials Build:** $2,000',
            '**Conversion Build:** starts at $4,500',
          ] },
          'Either way, you see your homepage design before you pay anything.',
        ],
      },
      {
        q: 'What comes with the Essentials Build?',
        a: [
          'The pages that decide if someone buys:',
          { list: [
            'Your homepage',
            'One collection page (where shoppers browse your products)',
            'One product page',
            'Your About, FAQ, contact and policy pages, set up clean and simple',
          ] },
          'I write every word on those pages. It’s built on the Shopify theme you already have.',
        ],
      },
      {
        q: 'What comes with the Conversion Build?',
        a: [
          'Every page your store needs to turn visitors into buyers:',
          { list: [
            'Your homepage',
            'Collection pages',
            'Product pages',
            'Pages for sales and launches',
            'Landing pages for your ads and emails',
            'Your cart, with add-on offers',
            'About and brand story',
            'FAQ, contact and policy pages',
          ] },
          'Need a page that isn’t on this list? It gets built too. I write every word and build custom sections for your products.',
        ],
      },
      {
        q: 'Which build is right for me?',
        a: [
          { list: [
            '**Essentials:** you’re just launching, or your store hasn’t been getting sales.',
            '**Conversion:** people already visit your store every day, and you want more of them to buy.',
          ] },
          'Not sure? I’ll tell you on our call.',
        ],
      },
      {
        q: 'Why does the Conversion Build “start at” $4,500? What makes it cost more?',
        a: [
          'Because every store needs a different amount of work.',
          'The price goes up with things like how many pages you need, how many products you have, and extras like more than one language or moving from another platform.',
          'You get the exact price in writing before you pay anything.',
        ],
      },
      {
        q: 'What do I pay for on top of your fee (Shopify, apps, domain)?',
        a: [
          'You pay these yourself, straight to each company, at their normal price:',
          { list: [
            'Your Shopify plan',
            'Any apps you use',
            'Your web address (domain)',
          ] },
          'I don’t add anything on top.',
        ],
      },
    ],
  },
  {
    title: 'Payment and Contract',
    items: [
      {
        q: 'When do I pay, and can I split it up?',
        a: [
          'You pay in two halves, and nothing until you’ve seen your homepage.',
          { list: [
            '**First half:** when you sign. You have 3 days to pay it.',
            '**Second half:** when I deliver your finished store.',
          ] },
        ],
      },
      {
        q: 'Can I pay by credit card, and do I get an invoice?',
        a: ['Yes to both. Any credit card works, and you get an invoice for each payment.'],
      },
      {
        q: 'Is there a contract, and what’s in it?',
        a: [
          'Yes. It’s a short agreement you sign online. It spells out:',
          { list: [
            'The price',
            'The pages I’m building',
            'The dates',
            'When you pay',
          ] },
          'The build doesn’t start until we both sign it.',
        ],
      },
    ],
  },
  {
    title: 'The Process',
    items: [
      {
        q: 'How long does the whole thing take?',
        a: [
          { list: [
            '**Your homepage design:** about 4 days after our call.',
            '**Your full store:** 14 days after you sign and add me to your store.',
          ] },
        ],
      },
      {
        q: 'What happens after I sign?',
        a: [
          { list: [
            '**Step 1:** You pay the first half. You have 3 days.',
            '**Step 2:** You add me to your store and send your logo and photos.',
            '**Step 3:** I build your new store as a separate copy, so your current store keeps selling.',
            '**Step 4:** You look it over and ask for changes. As many as you want.',
            '**Step 5:** I deliver it, and you pay the second half.',
            '**Step 6:** You pick the launch day, and we switch it over together on a call.',
          ] },
        ],
      },
      {
        q: 'What do you need from me, and how much of my time will it take?',
        a: [
          'About an hour in total:',
          { list: [
            'One call',
            'Adding me to your store (it’s free and takes a minute)',
            'Sending me your logo and product photos',
          ] },
        ],
      },
      {
        q: 'How do I give you access to my store?',
        a: [
          'I send you a request from my Shopify Partner account. You approve it in your Shopify settings, under Users.',
          'It’s free, and you can remove me anytime.',
        ],
      },
      {
        q: 'What if I’m busy or traveling during the build?',
        a: [
          'That’s fine. Your part takes about an hour, and most of it happens at the start.',
          'If I’m waiting on something from you, like a photo or an answer, the 14 days pause until I get it.',
        ],
      },
      {
        q: 'How many changes can I ask for?',
        a: ['Unlimited, while I build and for 14 days after I deliver.'],
      },
      {
        q: 'Who writes the words on my site, and can I change them?',
        a: [
          'I write every word. You can ask me to change anything while I build and for 14 days after I deliver.',
          'After that, you can change the words yourself anytime.',
        ],
      },
    ],
  },
  {
    title: 'Your Current Store',
    items: [
      {
        q: 'What happens to my current store while you build?',
        a: [
          'It stays live and keeps selling.',
          'I build your new store as a separate copy inside your Shopify account. Your shoppers won’t see anything change until launch day.',
        ],
      },
      {
        q: 'Can you fix my current site instead of rebuilding it?',
        a: [
          'Often, that’s what I do. I keep what’s already working and rebuild the pages that stop people from buying.',
          'On our call, I’ll tell you which pages need the work.',
        ],
      },
      {
        q: 'Will my web address, links, checkout or shipping settings change?',
        a: ['No. Your web address, links, checkout, shipping and products stay exactly as they are.'],
      },
      {
        q: 'How is my store built?',
        a: [
          'On Shopify, with a Shopify theme. That’s the same setup most Shopify stores use.',
          'I add custom sections made for your products. There’s no strange code, so any Shopify expert can work on it later.',
        ],
      },
      {
        q: 'Can I edit the store myself afterward?',
        a: ['Yes. I make it easy to edit, just like a normal template. You can change your text, images, prices and products yourself.'],
      },
      {
        q: 'Who owns the store when it’s done?',
        a: ['You do, 100%. Your store, your design, your words.'],
      },
      {
        q: 'Do you only work with Shopify?',
        a: ['Yes. Shopify is the only platform I build on.'],
      },
      {
        q: 'I’m on WooCommerce or another platform. Can you move me to Shopify?',
        a: [
          'Yes. Moving takes extra work, like bringing over your products and making sure your old links still work, so it costs extra.',
          'I’ll tell you the price on our call, before you decide.',
        ],
      },
    ],
  },
  {
    title: 'What’s Included',
    items: [
      {
        q: 'What’s included in every build?',
        a: [
          { list: [
            'The design of every page',
            'Every word on every page',
            'Cleanup of the product photos you already have',
            'An email signup form, connected to your email app',
            'Fast-loading pages',
            'SEO (search engine optimization) basics, so Google can read your store',
            '14 days of unlimited changes after delivery',
            'A store that’s easy to edit, just like a normal template',
          ] },
        ],
      },
      {
        q: 'What costs extra?',
        a: [
          'Anything that isn’t in your agreement, like:',
          { list: [
            'Pages that aren’t part of your build',
            'More than one language',
            'Moving from another platform to Shopify',
            'Monthly plans after launch',
          ] },
          'If you want something extra, I tell you the price first, and you decide.',
        ],
      },
      {
        q: 'What don’t you do?',
        a: [
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
        q: 'Do you edit my product photos? Do I need a photo shoot?',
        a: [
          'I clean up the product photos you already have, so they look sharp and match your store.',
          'You usually don’t need a photo shoot. Clear photos of your product are enough to start.',
        ],
      },
      {
        q: 'Do you write my product descriptions?',
        a: [
          'Yes, for the product pages I build.',
          'If you have a lot of products, we agree on our call how many descriptions are included.',
        ],
      },
      {
        q: 'Does the store connect to my email app, like Klaviyo?',
        a: [
          'Yes. Every build comes with an email signup form connected to your email app.',
          'I don’t write your email campaigns or automated emails.',
        ],
      },
      {
        q: 'What is a landing page for my ads, and do I get one?',
        a: [
          'It’s a page made for one ad. It says the same thing your ad says, so people who click know they’re in the right place and are more likely to buy.',
          'Landing pages come with the Conversion Build. They aren’t part of the Essentials Build.',
        ],
      },
      {
        q: 'Can I show my Amazon or Walmart reviews?',
        a: [
          'Often, yes. Some review apps can bring in reviews from other places. It depends on the app and the marketplace’s rules.',
          'I’ll check what works for your store and tell you on our call.',
        ],
      },
      {
        q: 'Can you build my store in more than one language?',
        a: [
          'Yes. Shopify can show your store in more than one language.',
          'Each language adds work, so tell me on our call and I’ll include it in your price.',
        ],
      },
      {
        q: 'Can you add wholesale ordering?',
        a: [
          'Yes, for simple wholesale, like special prices for approved buyers. Shopify has tools for this.',
          'I don’t build custom software that connects your store to other business systems.',
        ],
      },
    ],
  },
  {
    title: 'Traffic, Ads and SEO',
    items: [
      {
        q: 'I’m just launching my brand. Can you help?',
        a: [
          'Yes. The Essentials Build is made for brands that are just launching.',
          'You’ll need a logo, product photos and a plan to bring people to your store, like ads, social media or a launch.',
        ],
      },
      {
        q: 'I have no traffic or sales yet. Can you help?',
        a: [
          'A website turns visitors into buyers. If nobody visits, there’s nobody to buy.',
          'So if you have no plan to bring people in, this is the wrong product for you right now.',
          'If you do have a plan, like ads, social media or a launch, this gets your store ready to sell from day one.',
        ],
      },
      {
        q: 'Should I spend money on ads or on my website first?',
        a: [
          'If people already visit your store but don’t buy, fix your website first. More ads won’t fix a store that doesn’t sell.',
          'If nobody visits yet, you need both: a store that’s ready to sell, and a way to bring people in.',
        ],
      },
      {
        q: 'Do you run ads?',
        a: [
          'No. You, or whoever runs your ads now, keeps running them.',
          'What I do is make sure the page your ads send people to matches the ad, so more of those clicks turn into sales.',
        ],
      },
      {
        q: 'How much should I spend on ads?',
        a: [
          'It depends on your product, your prices and your goals. I don’t run ads, so I won’t guess a number for you.',
          'What I do know: every dollar you spend goes further when your store turns more visitors into buyers.',
        ],
      },
      {
        q: 'Do you do SEO?',
        a: [
          'SEO stands for search engine optimization. It means showing up on Google.',
          'Every store I build is set up so Google can read it: fast pages, a clean layout, and a title and description on every page. That same setup helps AI tools like ChatGPT understand your store too. That’s called GEO, short for generative engine optimization.',
          'Ongoing SEO comes with the Full Partnership plan: blog posts, new pages, and getting other websites to link to yours.',
        ],
      },
      {
        q: 'How long does SEO take to work?',
        a: [
          'Months, not weeks. It usually takes a few months before Google sends you steady visitors.',
          'If you need sales fast, ads are usually the better choice.',
        ],
      },
      {
        q: 'I don’t have many reviews. Will people still buy?',
        a: ['Yes. You don’t need lots of reviews to start. Your story and your product page do the selling until real reviews come in.'],
      },
    ],
  },
  {
    title: 'After Launch',
    items: [
      {
        q: 'What happens after launch?',
        a: [
          'First, you get 14 days of unlimited changes.',
          'After that, you can run the store yourself, or keep me on a monthly plan.',
        ],
      },
      {
        q: 'What are the monthly plans, and what do they cost?',
        a: [
          'There are three: Maintenance, Conversion Partner and Full Partnership.',
          'Each one is a flat monthly fee. I set the price on our call, based on how much work your store needs.',
        ],
      },
      {
        q: 'What’s the difference between Maintenance, Conversion Partner and Full Partnership?',
        a: [
          'Each plan includes everything in the one before it:',
          { list: [
            '**Maintenance:** I keep your store running. Updates, fixes when anything breaks, text and image changes, product changes, and new pages when you need them.',
            '**Conversion Partner:** everything in Maintenance, plus CRO (conversion rate optimization). Every month I find what’s stopping people from buying, fix it, and show you the numbers.',
            '**Full Partnership:** everything in Conversion Partner, plus monthly SEO (search engine optimization): blog posts, new pages, and links from other websites.',
          ] },
        ],
      },
      {
        q: 'Do I have to sign up for a monthly plan?',
        a: ['No. The store is yours, and you can run it yourself.'],
      },
      {
        q: 'Is there a commitment, and how do I cancel?',
        a: ['There’s no long commitment. You can cancel anytime with 30 days’ notice.'],
      },
      {
        q: 'Can I pay for one new page or product later without a monthly plan?',
        a: ['Yes. Tell me what you need. I’ll tell you the price first, and you decide.'],
      },
      {
        q: 'Do you do revenue share, equity or partnerships?',
        a: ['No. I charge a flat price for the build and a flat fee for monthly plans. You keep 100% of what your store earns.'],
      },
    ],
  },
  {
    title: 'Results',
    items: [
      {
        q: 'What results can I expect, and how soon?',
        a: [
          'Your results depend on your product, your prices and how many people visit. I’ll be honest with you about all three before we start.',
          'Once your new store is live, we compare your numbers after enough people have visited to make it fair.',
          'For example, Lynh’s Drinks went from 1.2% to 3.4% of visitors buying, 30 days after launch. [Read the case study](/case-studies/lynhs-drinks).',
        ],
      },
      {
        q: 'How will I know it worked?',
        a: [
          'Before I change anything, I write down your numbers: how many of your visitors buy, how much each order is worth, and everything else that matters.',
          'After launch, you see the same numbers side by side, so you know exactly what changed.',
        ],
      },
      {
        q: 'What’s a good conversion rate for my store?',
        a: [
          'Your conversion rate is how many visitors out of every 100 buy something.',
          'The average Shopify store is around 1.4%. The top 20% of stores are above 3.2%.',
          'It also depends on what you sell. Food and drinks often run higher, and jewelry often runs lower. So compare your store to stores like yours.',
        ],
      },
      {
        q: 'Why does my store’s design matter if I already have traffic?',
        a: [
          'Because visitors only turn into money when they buy.',
          'If 100 people visit and 1 buys, getting 2 to buy doubles your sales, without spending a dollar more on ads.',
        ],
      },
    ],
  },
  {
    title: 'Working With Me',
    items: [
      {
        q: 'Who will I work with?',
        a: ['Me, Shane Nguyen. You talk to me directly, on real calls, from our first call to launch day. I lead every build and check every page myself.'],
      },
      {
        q: 'Why do you only take 3 builds a month?',
        a: ['So every store gets my full attention. I study your customers, write every word and check every page myself. I can’t do that for 20 stores at once.'],
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
        q: 'Someone quoted me less. Why pay more?',
        a: [
          'Anyone can make a website. A $100 template site and mine both run on Shopify. The difference is what’s on the page.',
          'I study your customers and your competitors. Then I write and design every section to answer the questions that stop people from buying.',
          'And you see my work before you pay, so it’s easy to compare.',
        ],
      },
      {
        q: 'Am I the right fit?',
        a: [
          'You’re a good fit if:',
          { list: [
            'You sell a real product on Shopify, or want to move to Shopify',
            'You make the decisions for your store',
            'You have a logo and product photos',
            'You have a plan to bring people to your store',
            'You have a budget set aside for the build',
          ] },
          'You’re probably not a fit if you still need a logo, or you need custom software built into your store.',
          'Not sure? Book a call, and I’ll tell you straight.',
        ],
      },
    ],
  },
];
