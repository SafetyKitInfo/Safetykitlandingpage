const path = require('path');

async function optimize() {
  const input = path.join(__dirname, '..', 'public', 'hero.png');
  const output = path.join(__dirname, '..', 'public', 'hero.jpg');

  try {
    const JimpModule = await import('jimp');
    const JimpClass = JimpModule.Jimp || (JimpModule.default && JimpModule.default.Jimp);
    if (!JimpClass || typeof JimpClass.read !== 'function') throw new Error('Jimp read function not found');
    const image = await JimpClass.read(input);
    if (image.bitmap.width > 1600) {
      const newHeight = Math.round((1600 / image.bitmap.width) * image.bitmap.height);
      image.resize(1600, newHeight);
    }
    if (typeof image.quality === 'function') {
      await image.quality(85).writeAsync(output);
    } else {
      await image.writeAsync(output);
    }
    console.log('Wrote optimized image to', output);
  } catch (err) {
    console.error('Image optimization failed:', err);
    process.exitCode = 2;
  }
}

optimize();
