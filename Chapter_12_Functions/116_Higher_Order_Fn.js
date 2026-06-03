//Higher-order dunctions
// A function takes a function as a argument or returns a function (ex big fish eating small fish)

//Example: 
// loginTest function is assigned to testFn whatever is returing is assigned to result
//logingTest is argument and testFn is a parameter

function runWithLogging(testFn, testName) {
    console.log(`Starting:${testName}`);

    let result = testFn();
    console.log(`Finished:${testName}-${result}`);
    return result;

}

function loginTest() {
    return "pass";
}

function loginTestFAILED() {
    return "fail";
}



runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFAILED, "Dashboard Failed Test");