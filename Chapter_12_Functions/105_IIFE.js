// Immediately Invoked Function Expression (IIFE)

// An IIFE is a function that is defined and immediately executed. 
// It is often used to create a new scope and avoid polluting the global namespace. 

//* Function will call itself automatically   
//* They don't need to be called, they will execute immediately after they are defined.


//Syntax of IIFE---> sometimes used in playwright
(function () {            // This is the function definition, this is an anonymous function (a function without a name)
    //this wraps the function in () parentheses to make it an expression, which allows it to be executed immediately
    console.log("Hi");       // This is the function body
})();                      // This is the function invocation (the parentheses at the end)


// This  are used where we don't want to called by someone else.
// This are used when we do not want to share the function we want to invoke it immediately.
//Most of IIFE function do not have a name because they are not intended to be reused. 
// They are often used for one-time initialization or to create a new scope for variables.

// Example of IIFE in Playwright
(function () {
    // Playwright code to run the test
})();                   // you  dont want to call it again and again. it will not reused


// perfectly normal func
(function () {
    console.log("Staging")
})();


// Arrow function as IIFE---- most confusing syntax for juniors and not recommended to use in real world
(() => {
    console.log("Setup complete")
}());
