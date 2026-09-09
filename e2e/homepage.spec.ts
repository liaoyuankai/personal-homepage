import { test, expect } from '@playwright/test';

test('mobile page shows hero and allows interest selection', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /a little chaotic/i })).toBeVisible();
  await page.getByRole('button', { name: '剧本杀' }).click();
  await expect(page.getByText(/剧本杀说明/)).toBeVisible();
});
