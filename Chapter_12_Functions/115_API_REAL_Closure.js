// API EXAMPLE

function makeRetryTracker(max) {
    let attempts = 0
    function tryAgain(testName) {
        attempts++;
        if (attempts > max) {
            return `${testName} exceeded max retries(${max})`;
        }
        return ` Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;

}



let retry = makeRetryTracker(3);
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));
console.log(retry("Login"));



//inner functions can be called by outer by assigning them
//indirectly talking to someone else