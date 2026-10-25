import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
  for (const title of ['Projector missing in room 2', 'Access for new colleague']) {
    await page.getByLabel('Title *').fill(title);
    await page.getByRole('button', { name: 'Save request' }).click();
  }
  await page.getByRole('combobox', { name: 'Status for Access for new colleague' }).selectOption('doing');
});

test('PRD 03 normal: filter "open" shows only open requests with a matching count', async ({ page }) => {
  await page.getByRole('button', { name: 'open (1)' }).click();
  const rows = page.getByTestId('request-list').locator('li');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Projector missing in room 2');
  await expect(page.getByRole('button', { name: 'open (1)' })).toHaveAttribute('aria-pressed', 'true');
});

test('PRD 03 empty: no match shows the empty-state text', async ({ page }) => {
  await page.getByRole('button', { name: 'done (0)' }).click();
  await expect(page.getByText('No requests with this status.')).toBeVisible();
});

test('PRD 03 edge: a request set to done disappears from the "open" filter at once', async ({ page }) => {
  await page.getByRole('button', { name: 'open (1)' }).click();
  await page.getByRole('combobox', { name: 'Status for Projector missing in room 2' }).selectOption('done');
  await expect(page.getByText('No requests with this status.')).toBeVisible();
  await expect(page.getByRole('button', { name: 'done (1)' })).toBeVisible();
});
