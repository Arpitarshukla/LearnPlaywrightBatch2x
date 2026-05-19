var a = 10; // Global scope
console.log(a); //10
// Definition of the function
function printHello() {
    console.log("Hello The Testing Academy!");
    var a = 20; // Local scope
    console.log(a);
    if (true) {
        var a = 30; // Still local scope, but var is function-scoped, not block-scoped
        console.log(a); //30
    }
    console.log("F ->", a); //30, because var is function-scoped, the same variable 'a' is being reassigned
}

console.log("G->", a); //10, global variable 'a' is unaffected by the local variable 'a' inside the function

printHello();