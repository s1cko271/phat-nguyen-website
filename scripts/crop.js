const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.evaluate(() => document.getElementById('current-work')?.scrollIntoView());
  await new Promise(r => setTimeout(r, 600));
  
  const el = await page.$('#current-work .lg\\:col-span-4');
  if (el) {
    await el.screenshot({ path: 'public/screenshots/crop-current-work-col4.png' });
    console.log('Saved crop-current-work-col4.png successfully');
  } else {
    console.log('Element not found');
  }
  await browser.close();
})();
