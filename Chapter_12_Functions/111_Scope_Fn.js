//Scope in Functions

let env = "Staging"; //global scope

function setupConfig() {
    let timeout = 3000; //local scope
    console.log(env); //staging----can access global variable inside the function
    console.log(timeout); //3000--can access local variable inside the function
}

setupConfig();
console.log(env); //staging--can access global variable outside the function
console.log(timeout); //ReferenceError: timeout is not defined--cannot access local variable outside the function   
// Here, local variable cannot be used outside the function, but global variable can be used inside and outside the function.
// undefined will come when you assigned undefined value but here the value is defined
// but not accessible (we cannot use it), so reference error will come.











