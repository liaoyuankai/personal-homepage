import { test, expect } from '@playwright/test';

test('hero, archive interaction and contact link work in both viewports', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /a little chaotic/i })).toBeVisible();
  await expect(page.getByText('计算机研二 / 实习中 / 歌房麦霸 / 剧本杀玩家')).toBeVisible();

  const mysteryTag = page.getByRole('button', { name: '剧本杀' });
  await expect(mysteryTag).toBeVisible();
  await expect(mysteryTag).toHaveCSS('min-height', '44px');

  await mysteryTag.click();
  await expect(page.getByText(/剧本杀说明/)).toBeVisible();

  await expect(page.getByTestId('activity-card')).toHaveCount(3);
  await expect(page.getByTestId('role-card')).toHaveCount(2);
});

test('the page never scrolls sideways', async ({ page }) => {
  await page.goto('/');
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );
  expect(overflow).toBeLessThanOrEqual(1);
});
