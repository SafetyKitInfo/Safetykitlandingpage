const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const ports = [3000, 3001, 3002, 3003];
  let browser = null;
  try {
    browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 900 });

    let ok = false;
    for (const port of ports) {
      const url = `http://localhost:${port}/aurora-demo`;
      try {
        const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 5000 });
        if (resp && resp.status() < 400) {
          console.log('OPENED', url);
          ok = true;
          break;
        }
      } catch (e) {
        // try next
      }
    }
    if (!ok) {
      console.error('Unable to open /aurora-demo on localhost:3000-3003');
      process.exitCode = 2;
      return;
    }

    // Wait a short time for animations to start
    await page.waitForTimeout(500);
    const out = '/tmp/aurora-demo.png';
    await page.screenshot({ path: out, fullPage: true });
    console.log('SCREENSHOT_SAVED', out);
  } catch (err) {
    console.error(err && err.message ? err.message : err);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
  }
})();
