/* =====================================================================
   portfolio.ts — SINGLE SOURCE OF TRUTH for portfolio cards.
   Shared by PortfolioGrid (the full grid, desktop + first 3 on mobile)
   and PortfolioMarquee (the mobile-only auto-scrolling strip for the
   rest). Change a client's image/result once, here.
   ===================================================================== */
import lynhsDrinks from '../assets/portfolio/lynhs-drinks.png';
import caseFurniture from '../assets/portfolio/case-furniture.png';
import junglee from '../assets/portfolio/junglee.png';
import kimcMarket from '../assets/portfolio/kimc-market.png';
import pkCabinet from '../assets/portfolio/pk-cabinet.png';
import yushanColour from '../assets/portfolio/yushan-colour.png';

export type PortfolioCard = {
  name: string; image: ImageMetadata; zoom?: number; pos?: number;
  label?: string; fromTo?: string;
};

export const portfolioCards: PortfolioCard[] = [
  { name: "Lynh's Drinks", image: lynhsDrinks, label: 'Conversion rate', fromTo: '1.2% → 3.4%' },
  { name: 'Case Furniture', image: caseFurniture, label: 'Conversion rate', fromTo: '0.9% → 1.9%' },
  { name: 'Junglee Craft Cocktails', image: junglee, label: 'Conversion rate', fromTo: '2.0% → 4.2%' },
  { name: "Kim'C Market", image: kimcMarket, label: 'Conversion rate', fromTo: '1.3% → 2.47%' },
  { name: 'PK Cabinets', image: pkCabinet, label: 'Avg. order value', fromTo: '$2,081 → $5,556' },
  { name: 'Yushan Colour', image: yushanColour, label: 'Conversion rate', fromTo: '1.3% → 2.5%' },
];
