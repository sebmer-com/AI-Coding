import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  for (const title of ['Beamer im Raum 2 fehlt', 'Zugang für neue Kollegin']) {
    await page.getByLabel('Titel *').fill(title);
    await page.getByRole('button', { name: 'Anfrage speichern' }).click();
  }
  await page.getByRole('combobox', { name: 'Status für Zugang für neue Kollegin' }).selectOption('doing');
});

test('PRD 03 normal: filter "offen" shows only open requests with a matching count', async ({ page }) => {
  await page.getByRole('button', { name: 'offen (1)' }).click();
  const rows = page.getByTestId('request-list').locator('li');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Beamer im Raum 2 fehlt');
  await expect(page.getByRole('button', { name: 'offen (1)' })).toHaveAttribute('aria-pressed', 'true');
});

test('PRD 03 empty: no match shows the empty-state text', async ({ page }) => {
  await page.getByRole('button', { name: 'erledigt (0)' }).click();
  await expect(page.getByText('Keine Anfragen mit diesem Status.')).toBeVisible();
});

test('PRD 03 edge: a request set to done disappears from the "offen" filter at once', async ({ page }) => {
  await page.getByRole('button', { name: 'offen (1)' }).click();
  await page.getByRole('combobox', { name: 'Status für Beamer im Raum 2 fehlt' }).selectOption('done');
  await expect(page.getByText('Keine Anfragen mit diesem Status.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'erledigt (1)' })).toBeVisible();
});
