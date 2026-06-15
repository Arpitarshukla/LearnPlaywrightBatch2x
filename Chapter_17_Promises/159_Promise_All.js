let checkAuth = Promise.resolve("Auth ok");
let checkDB = Promise.resolve("DB OK");
let checkCache = Promise.resolve("Cache ok");

Promise.all([checkAuth, checkDB, checkCache]).then(function (results) {
    console.log("All the checks are fine!");                     //this will runs when all the promises are fulfilled
})

Promise.all([
    Promise.resolve("OK"),
    Promise.reject("DB DOWN"),
    Promise.resolve("OK"),
]).then(function (r) {
    console.log(r);
}).catch(function (error) {
    console.log("Failed:", error);  //if anyone from the all is failed then it will be failed as a result-- here it is because of "DB DOWN"
})

/*sol: All the checks are fine!
Failed: DB DOWN*/




Promise.allSettled([
    Promise.resolve("Test A Passed!"),
    Promise.reject("Test B Failed"),
    Promise.resolve("Test C Passed")
]).then(function (results) {
    results.forEach(function (r, i) {
        console.log("Test " + (i + 1) + ":", r.status, "-", r.value || r.reason);
    });
});

/* sol: Test 1: fulfilled - Test A Passed!
Test 2: rejected - Test B Failed
Test 3: fulfilled - Test C Passed*/

//This is like a test report -
// you want results for ALL tests,
//not just stop at the first failure

// very rarely used but good to know knowledge