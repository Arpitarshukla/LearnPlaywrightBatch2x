let a = 10; // Global scope
console.log(a);
// Definition of the function
function printHello() {
    console.log("Hello The Testing Academy!");
    let a = 20; // Local scope
    console.log(a);
    if (true) {
        let a = 30; // Still local scope, but let is block-scoped, not function-scoped
        console.log(a); //30
    }
    console.log("F ->", a); //20, the local variable 'a' inside the function is unaffected by the block-scoped variable 'a' inside the if statement
}

console.log("G->", a); //10, global variable 'a' is unaffected by the local variable 'a' inside the function

printHello();