// Renders the share card SVG to the PNG that og:image points at.
// Usage: node scripts/render-og.mjs
import sharp from 'sharp';

const src = new URL('../public/assets/images/og-cover.svg', import.meta.url);
const out = new URL('../public/assets/images/og-cover.png', import.meta.url);

await sharp(src.pathname.replace(/^\/([A-Za-z]:)/, '$1'), { density: 72 })
  .png()
  .toFile(out.pathname.replace(/^\/([A-Za-z]:)/, '$1'));

console.log('wrote public/assets/images/og-cover.png');
