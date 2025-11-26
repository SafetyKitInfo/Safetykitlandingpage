const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

async function run() {
  const src = path.join(__dirname, '..', 'public', 'hero.png');
  const outJpg = path.join(__dirname, '..', 'public', 'hero.jpg');
  const outWebp = path.join(__dirname, '..', 'public', 'hero.webp');

  if (!fs.existsSync(src)) {
    console.error('Source hero.png not found at', src);
    process.exit(0);
  }

  try {
    const image = sharp(src);
    const meta = await image.metadata();
    const width = meta.width && meta.width > 1600 ? 1600 : meta.width || 1600;

    await image.resize(width).jpeg({ quality: 82 }).toFile(outJpg);
    await image.resize(width).webp({ quality: 80 }).toFile(outWebp);

    console.log('Optimized images written:', outJpg, outWebp);
  } catch (err) {
    console.error('Optimization failed:', err);
    process.exit(2);
  }
}

run();
