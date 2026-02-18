import { test, expect, chromium, firefox } from '@playwright/test';

const baseUrl = 'https://playwright.dev/';
const expectedTitle = 'Fast and reliable end-to-end testing for modern web apps | Playwright';

// Запуск теста в Chromium

test('Checking heading element for Chromium', async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(baseUrl);

  const headingTitle = page.getByRole('heading', {
    name: 'Playwright enables reliable end-to-end testing for modern web apps',
  });

  await expect(page).toHaveTitle(expectedTitle);
  await expect(headingTitle).toBeVisible();
  await browser.close();
});

// Запуск теста в Firefox

test('Checking heading element for Firefox', async () => {
  const browser = await firefox.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(baseUrl);

  const headingTitle = page.getByRole('heading', {
    name: 'Playwright enables reliable end-to-end testing for modern web apps',
  });

  await expect(page).toHaveTitle(expectedTitle);
  await expect(headingTitle).toBeVisible();
  await browser.close();
});
