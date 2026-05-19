var a = 10;

//var is actually function scoped


console.log(a); // 10

function printHello() {
    console.log("Hello The Testing Academy!");
    var a = 20; // local scope
    console.log(a); // 20
    if (true) {
        var a = 30; // still the same variable 'a' in the function scope
        console.log(a); // 30
    }

}

printHello();

var a = 50;

//var = trump, flipper,dual faced, not trust worthy as it is redeclarable, function scoped, hoisted
