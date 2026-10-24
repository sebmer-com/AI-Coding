// Erzeugt Screenshots der Beispiele fuer README und Arbeitsheft.
// Aufruf: node scripts/screenshots.mjs (aus dem Repo-Wurzelordner, nach npm install in examples/de)
import { chromium } from '../examples/de/node_modules/playwright/index.mjs';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = resolve(new URL('..', import.meta.url).pathname);
const out = resolve(root, 'assets/screenshots');
mkdirSync(out, { recursive: true });

async function waitFor(url, tries = 60) {
  for (let i = 0; i < tries; i++) {
    try { const r = await fetch(url); if (r.ok) return; } catch {}
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error('server not ready ' + url);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });

for (const lang of ['de', 'en']) {
  await page.goto('file://' + resolve(root, `examples/${lang}/docs/moodboard.html`));
  await page.screenshot({ path: `${out}/moodboard-${lang}.png`, fullPage: true });
  const wf = lang === 'de' ? ['01-liste', '02-formular'] : ['01-list', '02-form'];
  for (const w of wf) {
    await page.setViewportSize({ width: 960, height: 600 });
    await page.goto('file://' + resolve(root, `examples/${lang}/docs/wireframes/${w}.svg`));
    await page.screenshot({ path: `${out}/wireframe-${w}-${lang}.png` });
  }
  await page.setViewportSize({ width: 1200, height: 900 });
}

for (const [lang, port] of [['de', 5181], ['en', 5182]]) {
  const cwd = resolve(root, `examples/${lang}`);
  const srv = spawn('npx', ['vite', '--port', String(port), '--strictPort'], { cwd, stdio: 'ignore' });
  try {
    await waitFor(`http://localhost:${port}/`);
    await page.setViewportSize({ width: 900, height: 860 });
    await page.goto(`http://localhost:${port}/`);
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    const sample = lang === 'de'
      ? [['Druckerpapier bestellen', 'done'], ['Zugang für neue Kollegin', 'doing'], ['Beamer im Raum 2 fehlt', 'open']]
      : [['Order printer paper', 'done'], ['Access for new colleague', 'doing'], ['Projector missing in room 2', 'open']];
    for (const [title, status] of sample) {
      await page.locator('#title').fill(title);
      await page.locator('button[type=submit]').click();
      await page.getByRole('combobox').first().selectOption(status);
    }
    await page.locator('button[type=submit]').click();
    await page.screenshot({ path: `${out}/app-${lang}.png`, fullPage: true });
  } finally {
    srv.kill();
  }
}
await browser.close();
console.log('screenshots written to', out);
