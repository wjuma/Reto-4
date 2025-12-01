const { test, expect } = require('@playwright/test');

test('localization page shows translations', async ({ page }) => {
  await page.goto('http://localhost:3000');
  // default should be English
  await expect(page.locator('h1[data-i18n="title"]')).toHaveText('Hello');
  // switch to Spanish by calling the page function
  await page.evaluate(() => applyLang('es'));
  await expect(page.locator('h1[data-i18n="title"]')).toHaveText('Hola');
});
