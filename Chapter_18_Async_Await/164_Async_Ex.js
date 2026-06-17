// Basic Async and Await

/*async function getTestResult() {          //for async we need to use .then for returning a promise
    return "Pass";
}

getTestResult.then(function (res) {      //if async function is there, it will alwasy return promise
    console.log(res);
});*/


import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);

    let r = page.locator();  //no  need to use await here as this function doesn't return promise
});