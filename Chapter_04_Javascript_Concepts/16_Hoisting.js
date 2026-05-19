//JS Engine
// Line by Line, JIT Execution

console.log(greeting); //undefined, due to hoisting, the declaration of 'greeting' is hoisted but not its assignment
var greeting = "Hello, World!";
console.log(greeting); //Hello, World!

//Behind the scenes

// var greeting;                        <---Declaration is hoisted to the top of the scope
// console.log(greeting);              <---undefined, because the variable is declared but not assigned yet
// greeting = "Hello, World!";        <---Assignment happens here
// console.log(greeting);            <---Hello, World!   


// var a;
console.log(a); //undefined, due to hoisting, the declaration of 'a' is hoisted but not its assignment
var a = "Pramod";
console.log(a); //Pramod