/* =====================================================================
   faq-full.ts — the long-form FAQ on /faq, in sections.
   Written for a 5th grader: short sentences, plain words, first person
   ("I"), every acronym explained. Facts must match the homepage FAQ and
   callFaqs (faqs.ts), the price cards (pricing.ts) and the client
   agreement: the store is live in 14 days; all I need from the client
   is store access; the Growth Plan is
   month-to-month, cancel anytime. Same format as faqs.ts: paragraphs and
   bullet lists, with **bold** and [link](/path).
   ===================================================================== */
import type { FaqGroup } from './faqs';

export const fullFaqGroups: FaqGroup[] = [
  {
    title: 'The Free Product Page',
    items: [
      {
        q: 'What do I get for free?',
        a: [
          'I design a new product page for your best-selling product and write every word on it, before you pay anything.',
          'I send you a private link so you can look at it on your phone or computer.',
        ],
      },
      {
        q: 'Which product page do you design?',
        a: [
          'The page for your best-selling product. That’s where most of your sales happen, so it’s the best place to see the difference.',
        ],
      },
      {
        q: 'Do I pay anything before I see it?',
        a: ['No. You pay nothing until you’ve seen your new product page and said yes.'],
      },
      {
        q: 'Do you need access to my store to make it?',
        a: [
          'No. I design your product page without touching your store.',
          'You add me to your store later, when the build starts.',
        ],
      },
      {
        q: 'Why do you ask so much about my business?',
        a: [
          'So your product page fits your customers, not just any store.',
          'I look at who buys from you, what makes them unsure, what your competitors do and what your ads promise. Then your product page answers those questions before people leave.',
        ],
      },
      {
        q: 'What if I don’t like it?',
        a: ['You owe me nothing. No hard feelings.'],
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
            '**Conversion Rebuild:** from $4,500',
            '**Growth Plan:** a monthly fee, set on our call',
          ] },
          'You see your new product page before you pay anything.',
        ],
      },
      {
        q: 'What comes with the Conversion Rebuild?',
        a: [
          'I find where your store loses buyers, then rebuild those pages. Most rebuilds include:',
          { list: [
            'Product pages',
            'Collection pages (where shoppers browse your products)',
            'Your cart, with add-on offers',
            'Your homepage',
          ] },
          'Plus any page your traffic depends on, like ad landing pages or B2B pages. I write every word on every page.',
        ],
      },
      {
        q: 'What comes with the Growth Plan?',
        a: [
          'You pick what you need:',
          { list: [
            '**Site upkeep:** fixes, updates and new products.',
            '**Conversion rate optimization:** monthly tests that get more of your visitors to buy.',
            '**Email and SMS:** emails and texts that bring customers back to buy.',
            '**SEO and AI search:** showing up on Google and in AI answers like ChatGPT. This one takes months to work.',
          ] },
          'I design every email and popup to match your store, and I write every word. You get weekly and monthly reports.',
        ],
      },
      {
        q: 'Which one is right for me?',
        a: [
          { list: [
            '**Conversion Rebuild:** your store needs to be rebuilt so more visitors buy.',
            '**Growth Plan:** your store is built, and you want me to keep it running and growing.',
          ] },
          'Not sure? I’ll tell you on our call.',
        ],
      },
      {
        q: 'Why is the Conversion Rebuild “from” $4,500? What makes it cost more?',
        a: [
          'Every store needs a different amount of work.',
          'The price depends on which pages you need, how many products you have, and extras like more than one language.',
          'You get the exact price in writing before you pay anything.',
        ],
      },
      {
        q: 'What do I pay for on top of your fee?',
        a: [
          'You pay these yourself, at their normal price:',
          { list: [
            'Your Shopify plan',
            'Any apps you use',
            'Your web address',
          ] },
          'I don’t add anything on top.',
        ],
      },
    ],
  },
  {
    title: 'Payment and Agreement',
    items: [
      {
        q: 'When do I pay, and can I split it up?',
        a: [
          'Yes. You pay in two halves:',
          { list: [
            '**First half:** when you say yes to your new product page and sign. You have 3 days to pay.',
            '**Second half:** when I deliver your finished store.',
          ] },
        ],
      },
      {
        q: 'Can I pay by credit card, and do I get an invoice?',
        a: ['Yes to both. Any credit card works, and you get an invoice for each payment.'],
      },
      {
        q: 'Is there an agreement, and what’s in it?',
        a: [
          'Yes. It’s short, and you sign it online. It lists:',
          { list: [
            'The price',
            'The pages I’m building',
            'The dates',
            'When you pay',
          ] },
          'I don’t start building until we both sign it.',
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
            '**Your product page design:** about 4 days after our call.',
            '**Your full store:** live in 14 days.',
          ] },
        ],
      },
      {
        q: 'What happens after I say yes?',
        a: [
          { list: [
            '**Step 1:** You sign and pay the first half.',
            '**Step 2:** You add me to your store.',
            '**Step 3:** I build your new store as a separate copy, so your current store keeps selling.',
            '**Step 4:** You look it over and ask for changes. As many as you want.',
            '**Step 5:** I deliver it, and you pay the second half.',
            '**Step 6:** You pick the launch day, and we switch it over together on a call.',
          ] },
        ],
      },
      {
        q: 'What do you need from me?',
        a: ['Just access to your Shopify store. It’s free and takes about a minute.'],
      },
      {
        q: 'How do I give you access to my store?',
        a: [
          'I send you a request from my Shopify Partner account. You approve it in your Shopify settings, under Users.',
          'You can remove me anytime.',
        ],
      },
      {
        q: 'What if I’m busy or traveling during the build?',
        a: [
          'That’s fine. I don’t need much from you.',
          'If I’m waiting on an answer from you, the 14 days pause until I get it.',
        ],
      },
      {
        q: 'How many changes can I ask for?',
        a: ['As many as you want, while I build and for 14 days after I deliver.'],
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
          'I build your new store as a separate copy inside your Shopify account. Shoppers won’t see any change until launch day.',
        ],
      },
      {
        q: 'Can you fix my current site instead of starting over?',
        a: [
          'Often, yes. I keep what already works and rebuild the pages that stop people from buying.',
          'On our call, I’ll tell you which pages need work.',
        ],
      },
      {
        q: 'Will my web address, links, checkout or shipping change?',
        a: ['No. They all stay exactly the same.'],
      },
      {
        q: 'How is my store built?',
        a: [
          'On Shopify, with a normal Shopify theme, like most Shopify stores.',
          'I add sections made for your products. There’s no strange code, so any Shopify expert can work on it later.',
        ],
      },
      {
        q: 'Can I edit the store myself afterward?',
        a: ['Yes. You can change your text, images, prices and products yourself, like any normal Shopify store.'],
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
        q: 'I’m not on Shopify yet. Can you move me over?',
        a: [
          'Yes. Moving takes extra work, like bringing over your products and keeping your old links working, so it costs extra.',
          'I’ll tell you the price on our call, before you decide.',
        ],
      },
    ],
  },
  {
    title: 'What’s Included',
    items: [
      {
        q: 'What comes with every build?',
        a: [
          { list: [
            'The design of every page',
            'Every word on every page',
            'Cleanup of your product photos',
            'An email signup form, connected to your email app',
            'Fast pages that Google can read',
            '14 days of changes after I deliver',
            'A store you can easily edit yourself',
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
            'Moving to Shopify from another platform',
            'The Growth Plan after launch',
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
            'Do photo shoots',
            'Design logos',
          ] },
        ],
      },
      {
        q: 'Do you edit my product photos? Do I need a photo shoot?',
        a: [
          'I clean up the product photos you already have, so they look sharp.',
          'You usually don’t need a photo shoot. Clear photos of your product are enough.',
        ],
      },
      {
        q: 'Do you write my product descriptions?',
        a: [
          'Yes, for the product pages I build.',
          'If you have a lot of products, we agree on our call how many I write.',
        ],
      },
      {
        q: 'Does the store connect to my email app, like Klaviyo?',
        a: [
          'Yes. Every build comes with an email signup form connected to your email app.',
          'Want me to write and design your emails too? That’s part of the Growth Plan.',
        ],
      },
      {
        q: 'What is a page for my ads, and do I get one?',
        a: [
          'It’s a page made for one ad. It says the same thing your ad says, so people who click know they’re in the right place. That makes them more likely to buy.',
          'Ad pages come with the Conversion Rebuild.',
        ],
      },
      {
        q: 'Can I show my Amazon or Walmart reviews?',
        a: [
          'Often, yes. Some review apps can bring in reviews from other sites. It depends on the app and the site’s rules.',
          'I’ll check what works for your store and tell you on our call.',
        ],
      },
      {
        q: 'Can you build my store in more than one language?',
        a: [
          'Yes. Each language adds work, so tell me on our call and I’ll include it in your price.',
        ],
      },
      {
        q: 'Can you add wholesale ordering?',
        a: [
          'Yes, for simple wholesale, like special prices for approved buyers.',
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
        a: ['Yes. You’ll need a logo, product photos and a plan to bring people to your store, like ads, social media or a launch.'],
      },
      {
        q: 'I have no visitors or sales yet. Can you help?',
        a: [
          'A website turns visitors into buyers. If nobody visits, nobody can buy.',
          'So you need a plan to bring people in, like ads, social media or a launch. If you have one, I’ll get your store ready to sell from day one.',
        ],
      },
      {
        q: 'Should I spend money on ads or on my website first?',
        a: [
          'If people visit your store but don’t buy, fix your website first. More ads won’t fix a store that doesn’t sell.',
          'If nobody visits yet, you need both: a store that’s ready to sell, and a way to bring people in.',
        ],
      },
      {
        q: 'Do you run ads?',
        a: [
          'No. You, or whoever runs your ads, keeps running them.',
          'I make sure the page your ad links to says the same thing as the ad, so more clicks turn into sales.',
        ],
      },
      {
        q: 'How much should I spend on ads?',
        a: [
          'It depends on your product, your prices and your goals. I don’t run ads, so I won’t guess a number.',
          'What I do know: every ad dollar goes further when more of your visitors buy.',
        ],
      },
      {
        q: 'Do you do SEO?',
        a: [
          'SEO means showing up on Google.',
          'Every store I build is set up so Google, and AI tools like ChatGPT, can read it.',
          'Ongoing SEO is part of the Growth Plan: blog posts, plus work to show up in AI answers.',
        ],
      },
      {
        q: 'How long does SEO take to work?',
        a: [
          'Months, not weeks.',
          'If you need sales fast, ads are usually the better choice.',
        ],
      },
      {
        q: 'I don’t have many reviews. Will people still buy?',
        a: ['Yes. Your story and your product page do the selling until real reviews come in.'],
      },
    ],
  },
  {
    title: 'After Launch',
    items: [
      {
        q: 'What happens after launch?',
        a: [
          'You get 14 days of changes.',
          'After that, you can run the store yourself, or keep me on the Growth Plan.',
        ],
      },
      {
        q: 'What’s the Growth Plan, and what does it cost?',
        a: [
          'It’s me running your store after launch. Pick any of these:',
          { list: [
            '**Site upkeep:** fixes, updates and new products.',
            '**Conversion rate optimization:** monthly tests that get more of your visitors to buy.',
            '**Email and SMS:** emails and texts that bring customers back to buy.',
            '**SEO and AI search:** showing up on Google and in AI answers like ChatGPT. This one takes months to work.',
          ] },
          'It’s one monthly fee. I set the price on our call, based on what you pick.',
        ],
      },
      {
        q: 'Do I have to sign up for the Growth Plan?',
        a: ['No. The store is yours, and you can run it yourself.'],
      },
      {
        q: 'Is there a commitment, and how do I cancel?',
        a: ['No long commitment. It’s month-to-month, and you can cancel anytime.'],
      },
      {
        q: 'Can I pay for one new page later without the Growth Plan?',
        a: ['Yes. Tell me what you need. I’ll tell you the price first, and you decide.'],
      },
      {
        q: 'Do you take a cut of my sales?',
        a: ['No. I charge a set price for the build and a set monthly fee for the Growth Plan. You keep 100% of what your store earns.'],
      },
    ],
  },
  {
    title: 'Results',
    items: [
      {
        q: 'What results can I expect, and how soon?',
        a: [
          'More of your visitors buying. That’s the whole goal.',
          'For example, Lynh’s Drinks went from 1.2% to 3.4% of visitors buying, 30 days after launch.',
          'Your results also depend on your product, your prices and how many people visit. I’ll be honest with you about all three on our call.',
        ],
      },
      {
        q: 'How will I know it worked?',
        a: [
          'Check your Shopify numbers. If more of your visitors buy after launch, it worked.',
          'I’ll go over the numbers with you.',
        ],
      },
      {
        q: 'What’s a good conversion rate?',
        a: [
          'Your conversion rate is how many visitors out of every 100 buy something.',
          'The average Shopify store is around 1.4%. The top 20% of stores are above 3.2%.',
          'It also depends on what you sell, so compare your store to stores like yours.',
        ],
      },
      {
        q: 'Why does my store’s design matter if I already get visitors?',
        a: [
          'Because visitors only make you money when they buy.',
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
        a: ['Me, Shane Nguyen. You talk to me directly, from our first call to launch day. I check every page myself.'],
      },
      {
        q: 'Why do you only take 3 builds a month?',
        a: ['So every store gets my full attention. I can’t study your customers and write every word for 20 stores at once.'],
      },
      {
        q: 'I’ve been burned by a developer before. Why is this different?',
        a: [
          { list: [
            'You see your new product page before you pay anything.',
            'The price, the pages and the deadline are in writing before I start.',
            'Want something extra? I tell you the price first, and you decide.',
            'Half your money waits until your store is done.',
            'You talk to me directly, from start to finish.',
          ] },
        ],
      },
      {
        q: 'Someone quoted me less. Why pay more?',
        a: [
          'A cheap template and my work both run on Shopify. The difference is what’s on the page.',
          'I study your customers and your competitors. Then I write and design every page to answer the questions that stop people from buying.',
          'And you see my work before you pay, so it’s easy to compare.',
        ],
      },
      {
        q: 'Am I a good fit?',
        a: [
          'You’re a good fit if:',
          { list: [
            'You sell a real product on Shopify, or want to move to Shopify',
            'You make the decisions for your store',
            'You have a logo and product photos',
            'You have a plan to bring people to your store',
            'You have money set aside for the build',
          ] },
          'Not sure? Book a call, and I’ll tell you straight.',
        ],
      },
    ],
  },
];
