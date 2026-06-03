// Rest of the parameters or spread paramters 
// are used to represent an indefinite number of arguments as an array. It is denoted by three dots (...).


function logResult(suiteName, ...results) {
    console.log(suiteName);
    console.log(results);

}

logResult('Login test', 1, 2, 3);  // you can pass any no. of paramters like 1,2,3
logResult('Reg Test', "Hello", "Pramod"); // you can pass any no. of paramters like "Hello", "Pramod" 
// call with these parameters will print the suite name and the results as an array.
// its a array of objects

//rarely used
// This is can be used as last one as a spread.---> three dots (...) are allowed and no limitation on the number of parameters. It will be treated as an array of objects.




