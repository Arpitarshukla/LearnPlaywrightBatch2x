let name = "Alice";
let age = 30;

let single = 'Hello, ' + name + '! You are ' + age + '.';
let double = "Hello, " + name + "! You are " + age + ".";
let backtick = `Hello, ${name}! You are ${age}.`;

console.log(single);   // Hello, Alice! You are 30.
console.log(double);   // Hello, Alice! You are 30.
console.log(backtick); // Hello, Alice! You are 30.
