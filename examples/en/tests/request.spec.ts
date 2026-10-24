import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test('PRD 01 normal: new request appears as open at the top', async ({ page }) => {
  await page.getByLabel('Title *').fill('Projector missing in room 2');
  await page.getByRole('button', { name: 'Save request' }).click();
  const rows = page.getByTestId('request-list').locator('li');
  await expect(rows).toHaveCount(1);
  await expect(rows.first()).toContainText('Projector missing in room 2');
  await expect(rows.first().getByRole('combobox')).toHaveValue('open');
});

test('PRD 01 error: empty title is rejected', async ({ page }) => {
  await page.getByRole('button', { name: 'Save request' }).click();
  await expect(page.getByRole('alert')).toHaveText('Please enter a title.');
  await expect(page.getByTestId('request-list')).toHaveCount(0);
});

test('PRD 01 edge: HTML in the title is shown as text', async ({ page }) => {
  await page.getByLabel('Title *').fill('<b>Test</b>');
  await page.getByRole('button', { name: 'Save request' }).click();
  const row = page.getByTestId('request-list').locator('li').first();
  await expect(row).toContainText('<b>Test</b>');
  await expect(row.locator('b')).toHaveCount(0);
});

test('PRD 02 normal: status persists after reload', async ({ page }) => {
  await page.getByLabel('Title *').fill('Projector missing in room 2');
  await page.getByRole('button', { name: 'Save request' }).click();
  await page.getByRole('combobox').first().selectOption('doing');
  await page.reload();
  await expect(page.getByRole('combobox').first()).toHaveValue('doing');
  await expect(page.getByRole('combobox').first().locator('option:checked')).toHaveText('in progress');
});
