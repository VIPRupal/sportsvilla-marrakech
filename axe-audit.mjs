import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const page = await browser.newPage();
await page.goto('http://localhost:5000', { waitUntil: 'networkidle', timeout: 30000 });

const results = await new AxeBuilder({ page })
  .withTags(['wcag2a', 'wcag2aa', 'best-practice'])
  .analyze();

const violations = results.violations;
violations.forEach(v => {
  console.log(`\n[${v.impact?.toUpperCase()}] ${v.id}: ${v.description}`);
  v.nodes.slice(0, 2).forEach(n => {
    console.log(`  HTML: ${n.html.slice(0, 150)}`);
    [...n.any, ...n.all, ...n.none].forEach(c => console.log(`    -> ${c.message}`));
  });
});

console.log(`\n=== Total violations: ${violations.length} ===`);
violations.forEach(v => console.log(`  ${v.impact} | ${v.id} | ${v.nodes.length} nodes`));

await browser.close();
