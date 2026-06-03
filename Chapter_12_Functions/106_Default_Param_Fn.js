/*Concept borrowed from Python, default parameters allow you to specify default values for function parameters. 
If the caller does not provide a value for that parameter, the default value will be used.*/


// Example of default parameters for functions---->// when you give paramter the default value, 
function retry(testName, maxRetries = 3, delay = 1000) {    // maxRetries = 3, delay = 1000) are default parameters.
    console.log(`Retrying ${testName} up to ${maxRetries} times,${delay} ms apart`);
}

retry("Login test"); // if you call wihtout the values, it will take default values
retry("Registration Test", 5, 2000); //If you take with values, it will take the provided values instead of default values.







