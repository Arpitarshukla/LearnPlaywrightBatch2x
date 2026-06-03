function runTest(name, status, duration) {
    return `${name}: ${status} (${duration} ms)`;
}

//runTest("Log in", "Pass", 320);  // No output is there as we are not assigning the result of test case
const r = runTest("Log in", "Pass", 320);  // Output: Log in: Pass (320 ms)
console.log(r);
