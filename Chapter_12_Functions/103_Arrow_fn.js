//Arrow function 
// (introduced in the case of ES6-6th version of JS) ---ECMA Script 6 is alternate name of JS

const greet = function (name1) {
    return "Hi" + name1;
}

let r = greet('Pramod');
console.log(r);

const greet2 = (name1) => "Hi" + name1; // remove other things and take only parameters (name1), 
// use => instead of brackets and return paramater

let r2 = greet2("Pramod");
console.log(r2);


//if you want to make normal function to arrow function
// Remove the keyword function, remove keyword return, remove curly braces, use the =>


//if we don't have return type then we cannot use arrow function


//example 2
const doubleIt = n => n * 2;  // n will be 10 and the return type will be 10*2
console.log(doubleIt(10)); // sol: 20

//example 3
//Print it- whatever the name you give- the solution will print it

const printIt = name => console.log(name);
printIt("Dutta");








