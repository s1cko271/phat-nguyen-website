const puppeteer = require('puppeteer-core');

async function testPage() {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  const consoleErrors = [];
  const pageErrors = [];

  page.on('console', msg => {
    const type = msg.type();
    const text = msg.text();
    if (type === 'error' || text.toLowerCase().includes('hydration') || text.toLowerCase().includes('mismatch')) {
      consoleErrors.push(`[Console ${type}] ${text}`);
    }
  });

  page.on('pageerror', err => {
    pageErrors.push(`[PageError] ${err.toString()}`);
  });

  console.log('Navigating to http://localhost:3000...');
  const response = await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 15000 });
  console.log('HTTP Status:', response.status());

  await new Promise(r => setTimeout(r, 2000));

  // Check section existence
  const sectionIds = [
    'hero', 'origin', 'dual-persona', 'nexus', 'why-sales', 'human-equation',
    'method', 'framework', 'refusal', 'philosophy', 'b2c-b2b', 'motivation',
    'business-mindset', 'six-outcomes', 'current-work', 'case-study', 'humility',
    'goal', 'contact'
  ];

  const sectionStatus = await page.evaluate((ids) => {
    return ids.map(id => {
      const el = document.getElementById(id);
      return { id, exists: !!el, textLength: el ? el.innerText.trim().length : 0 };
    });
  }, sectionIds);

  console.log('\n--- SECTIONS AUDIT (19/19) ---');
  let allSectionsPresent = true;
  for (const s of sectionStatus) {
    const statusLabel = (s.exists && s.textLength > 0) ? 'OK' : 'FAIL';
    console.log(`Section #${s.id.padEnd(16)}: [${statusLabel}] (${s.textLength} chars)`);
    if (!s.exists || s.textLength === 0) allSectionsPresent = false;
  }

  // Check for genuine Next.js error dialogs/badges
  const errorInfo = await page.evaluate(() => {
    const portal = document.querySelector('nextjs-portal');
    if (!portal || !portal.shadowRoot) return { hasError: false, message: null };
    
    const errorBadge = portal.shadowRoot.querySelector('[data-next-badge][data-error="true"]');
    const dialogHeader = portal.shadowRoot.querySelector('[data-nextjs-dialog-header]');
    const dialogBody = portal.shadowRoot.querySelector('[data-nextjs-rendered-error]');
    
    if (errorBadge || dialogHeader || dialogBody) {
      return {
        hasError: true,
        message: dialogHeader ? dialogHeader.innerText : (dialogBody ? dialogBody.innerText : 'Next.js error badge active')
      };
    }
    return { hasError: false, message: null };
  });

  console.log('\n--- HYDRATION & RUNTIME AUDIT ---');
  console.log('Next.js Error Detected in Devtools:', errorInfo.hasError);
  if (errorInfo.hasError) {
    console.error('  -> Next.js Error Message:', errorInfo.message);
  }
  console.log('Page Errors count:', pageErrors.length);
  if (pageErrors.length > 0) {
    pageErrors.forEach(e => console.error('  ->', e));
  }
  console.log('Console Errors/Hydration Warnings count:', consoleErrors.length);
  if (consoleErrors.length > 0) {
    consoleErrors.forEach(e => console.error('  ->', e));
  }

  // Capture clean verification screenshot of Hero
  await page.screenshot({ path: 'public/screenshots/verify-hero.png' });
  console.log('\nSaved verification screenshot to public/screenshots/verify-hero.png');

  await browser.close();

  if (!errorInfo.hasError && pageErrors.length === 0 && consoleErrors.length === 0 && allSectionsPresent) {
    console.log('\n=============================================');
    console.log('>>> ALL 19 SECTIONS & HYDRATION AUDIT PASSED! <<<');
    console.log('=============================================\n');
    process.exit(0);
  } else {
    console.log('\n>>> AUDIT FAILED <<<');
    process.exit(1);
  }
}

testPage().catch(err => {
  console.error('Fatal test execution error:', err);
  process.exit(1);
});
