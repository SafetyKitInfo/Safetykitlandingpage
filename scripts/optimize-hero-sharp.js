const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

async function run() {
  const src = path.join(__dirname, '..', 'public', 'hero.png');

  if (!fs.existsSync(src)) {
    console.error('Source hero.png not found at', src);
    process.exit(0);
  }

  // generate responsive sizes
  const sizes = [800, 1200, 1600];
  const outFiles = [];

  try {
    const meta = await sharp(src).metadata();
    const originalWidth = meta.width || 1600;

    for (const w of sizes) {
      const width = Math.min(w, originalWidth);
      const outJpg = path.join(__dirname, '..', 'public', `hero-${width}.jpg`);
      const outWebp = path.join(__dirname, '..', 'public', `hero-${width}.webp`);

      await sharp(src).resize(width).jpeg({ quality: 82 }).toFile(outJpg);
      await sharp(src).resize(width).webp({ quality: 80 }).toFile(outWebp);

      outFiles.push(outJpg, outWebp);
    }

    // also write non-sized primary fallbacks (largest)
    const largest = Math.min(Math.max(...sizes), originalWidth);
    const primaryJpg = path.join(__dirname, '..', 'public', 'hero.jpg');
    const primaryWebp = path.join(__dirname, '..', 'public', 'hero.webp');
    await sharp(src).resize(largest).jpeg({ quality: 82 }).toFile(primaryJpg);
    await sharp(src).resize(largest).webp({ quality: 80 }).toFile(primaryWebp);
    outFiles.push(primaryJpg, primaryWebp);

    console.log('Optimized images written:', outFiles.join(', '));
  } catch (err) {
    console.error('Optimization failed:', err);
    process.exit(2);
  }
}

run();
