// example:

//  writing a configuration:

let config = {};

config.browser = "chrome";
config.timeout = 3000;
config.testname = "login test";

console.log(config); // sol: { browser: 'chrome', timeout: 3000, testname: 'login test' }


//example: if we delete the key
delete config.browser;
console.log(config);   // sol: { timeout: 3000, testname: 'login test' } ---> key is deleted  

// this below code will not be executed as config.browser doesn't executed

if (config.browser === "chrome") {
    console.log("I will execute my TC"); // sol: I will execute my TC
}



//Example: it above example can be created inside the brackets also ---> alternate way to create

let config2 = {
    browser="chrome",
    timeout=3000,
    testname="login test"
};
















