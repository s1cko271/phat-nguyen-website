const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'public', 'screenshots');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const sections = [
  { id: 'hero', name: '01-hero' },
  { id: 'origin', name: '02-origin' },
  { id: 'dual-persona', name: '03-persona' },
  { id: 'nexus', name: '04-nexus' },
  { id: 'why-sales', name: '05-why-sales' },
  { id: 'human-equation', name: '06-human-equation' },
  { id: 'method', name: '07-method' },
  { id: 'framework', name: '08-framework' },
  { id: 'refusal', name: '09-refusal' },
  { id: 'philosophy', name: '10-philosophy' },
  { id: 'b2c-b2b', name: '11-b2c-b2b' },
  { id: 'motivation', name: '12-motivation' },
  { id: 'business-mindset', name: '13-business-mindset' },
  { id: 'six-outcomes', name: '14-six-outcomes' },
  { id: 'current-work', name: '15-current-work' },
  { id: 'case-study', name: '16-case-study' },
  { id: 'humility', name: '17-humility' },
  { id: 'goal', name: '18-goal' },
  { id: 'contact', name: '19-contact' },
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // 1. DESKTOP 1440x900
  console.log('Capturing Desktop screenshots (1440x900)...');
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  for (const sec of sections) {
    await page.evaluate((id) => document.getElementById(id)?.scrollIntoView(), sec.id);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, `desktop-${sec.name}.png`) });
    console.log(`Saved desktop-${sec.name}.png`);
  }

  // 2. MOBILE 390x844
  console.log('Capturing Mobile screenshots (390x844)...');
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1000));

  for (const sec of sections) {
    await page.evaluate((id) => document.getElementById(id)?.scrollIntoView(), sec.id);
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outDir, `mobile-${sec.name}.png`) });
    console.log(`Saved mobile-${sec.name}.png`);
  }

  await browser.close();
  console.log('ALL 19 sections desktop and mobile screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error taking screenshots:', err);
  process.exit(1);
});
