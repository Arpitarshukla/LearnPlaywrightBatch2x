import { test, expect } from '@playwright/test'

//page- inbuilt fixture is automatically given to you, 
// which are the functions you can directly use in PW -- 
// Fixtures means our internal habits or things we automatically do

test("Verify that the title will be TTA Cart", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/")    // go to function return promise so we need to use await keyword to make it sync in nature
    await page.waitForTimeout(5000)  // wait for 5 sec to see the browser opening and closing in headed mode

});

//opening and verify the title is TTA Cart.
//this is callback function and we need to create arrow function
// with arrow function we need to use async as it is async language..
// whatever the anonymous function we are calling it will always be in async in
// nature cause for every step we work we need to make it sync in nature


/*to see the option of play infront of playwright code we need to add extension
playwright code in VS  playwright test for vs code from Microsoft */


// after running this it will give result as passed but it runs in the
// headless mode and we cannot see the browser and run without the UI,
// so we need to run it in headed mode to see the browser opening and closing.

//same concept in selenium as well.. advantage is it is fast than headed mode
//if we have 15000 or more cases then it will take 2-3 hours to run in headed mode
// but in headless mode it will take 15-20 mins to run all the test cases.

//headed mode is used for debugging purpose and run limited no. of test cases
// like 1000 cases
// Headless mode is used for CI/CD pipeline means run it in jenkins.

//By default it is headless mode, so we need to change it to headed mode in playwright.config.ts file

// we can run it as headed by using command npx playwright test tests/example.spec.ts --headed
//and to see the report we can use command: npx playwright show-report
//as it was fast you can add one more line to see the browser opening and closing in headed mode,
//  so we need to add delay of 5 sec in playwright.config.ts file

/* As it will run in chromium, firefox and webkit 3 times. 
you need to edit it in playwright.config.ts to run it in chromium or only for one and disable others */




