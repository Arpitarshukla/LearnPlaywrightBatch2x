function getToken() {
    return Promise.resolve("abc123"); //whenever there is a promise, which is getting return by any func, we will return something
}


//Playwright
//pageXOffset.goto() - Promise()
//await page.goto();

async function run() {
    let token = await getToken(); // getToken func is returning promise,we will always use await
    console.log(token);
}      //will getToken when will use await

run(); /// sol: abc123

//Rules:
//any function which return the promise we need to use await in front of it
//any func which can basically work with any kind of promise we need to use async