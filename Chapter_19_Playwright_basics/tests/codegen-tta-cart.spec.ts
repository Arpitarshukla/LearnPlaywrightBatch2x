import { test, expect, type Page } from '@playwright/test';

test('test', async ({ page }: { page: Page }) => {
  await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abc');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('abc1234567');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="error"]').click({
    button: 'right'
  });
  await page.locator('[data-test="error"]').click();
  await page.getByRole('heading', { name: 'TTACart' }).click();
  await expect(page.getByRole('heading', { name: 'TTACart' })).toBeVisible();
  await page.locator('[data-test="error"]').click();
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('body')).toMatchAriaSnapshot(`
    - heading "TTACart" [level=1]
    - textbox "Username": abc
    - textbox "Password": abc1234567
    - alert: "Epic sadface: Username and password do not match any user in this service"
    - button "Login"
    - heading "Accepted usernames are:" [level=4]
    - paragraph: standard_user locked_out_user problem_user performance_glitch_user error_user visual_user
    - heading "Password for all users:" [level=4]
    - paragraph: tta_secret
    `);
});

//record scenario by using codegen
//recording all the steps while testing and created script to check logging, username wrong id or pw.
// you can check all the aspects also check screenshots. this steps and clicking all the options create a code..we can copy it and paste it in playwright.this is codegen. you can run that.