var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome"; //var allows redeclaration and reassignment
var browser = "firefox";//redeclaration allowed
browser = "edge";//reassignment allowed   

var testCases = ["login", "logout", "signup"];
for (var i = 0; i < testCases.length; i++) {
    console.log("running test case: " + testCases[i]);
}

console.log("loop counter leaked outside:", i);



console.log("Hi");
console.log("Hi");
console.log("Hi");


function say() {
    console.log("Hi from Function");
}

say();
say();
say();  
