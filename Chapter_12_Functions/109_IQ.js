// Returns a value

function getStatus(code) {
    if (code >= 200 && code < 300) return "success";
    if (code >= 400 && code < 500) return "Client error";
    if (code >= 500) return "Server error";

}

let r = getStatus(200); // success  
let r1 = getStatus(404); // Client error
let r2 = getStatus(500); // Server error 

console.log(r);
console.log(r1);
console.log(r2);




//example 2

function logTest(name) {
    console.log(`Running:${name}`);
    // no return statement, so it will return undefined by default

}


let result = logTest("Login"); // Solution : Running:Login---> it will print the name of the test being run, which is "Login". The function does not return any value, so result will be undefined.
console.log(result); // Solution: undefined, because logTest does not return anything. It only logs the name of the test being run.



//Example 3: 


greet("Alice"); // Solution: Hello, Alice!-----> as hoisting is there, the function greet can be called before its declaration. It will print "Hello, Alice!" to the console.

function greet(name) {
    console.log(`Hello, ${name}!`);
}


//Example 4:

sayHi("Bob"); // not possible to call before declaration, because it's a function expression. It will throw a ReferenceError: Cannot access 'sayHi' before initialization.


const sayHi = function (name) {  // It is in TDZ (Temporal Dead Zone) until the variable sayHi is initialized. So, it cannot be called before its declaration.
    return `Hi, ${name}!`;

};






