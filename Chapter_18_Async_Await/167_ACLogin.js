import { test, expect } from '@playwright/test';

test('logs in with valid credentials @p0', async ({ page }) => {
    await test.step('Login as standard_user', async () => {
        log.info('Logging in as standard_user');
        await loginPage.loginAs('standard_user', 'tta_secret');
    });
    await test.step('Verify login form is no longer shown', async () => {
        log.info('Asserting login form is hidden after login');
        await expect(page.locator('[data-test="login-button"]')).toBeHidden();
    });
});



import { test, expect } from '@playwright/test';  // Anything from the Object ('@playwright/test') is breked in two parts (test, expect)

test('has title', async ({ page }) => {             //callback with the async as the function we are using within are returning some kind of promises
    await page.goto('https://playwright.dev/');

    //Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
});