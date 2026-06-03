// Closure is the old function. never used in automation
// we use async and await instead of closure function
// closure function is which remembers  variables from outer scope even after the outer function has finished executing


// example:
function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);  // inner function can access the message variable from outer function
    }
    return inner;  // returning the inner function
}


let fn_inner = outer();  // calling the outer function and storing the returned inner function in fn_inner
fn_inner();  // calling the inner function which still has access to the message variable from outer function due to closure

//inner();  // this will throw an error because inner is not defined in the global scope,
// it is only accessible through the closure created by outer function

//because of this we need to return the inner

//very rarely used or never used in automation













