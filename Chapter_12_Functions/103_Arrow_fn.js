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

// return type is there in the below function but we cannot use arrow function because of the return type
function add(a, b) {  // arguments- a and b
    return a + b;  //return type- a+b

}

console.log(add(10, 20)); // sol: 30


//Arrow function- same as above function in a arrow function pattern
const add2 = (a, b) => a + b; // we can remove the return type and curly braces as this is arrow function and it will return the value of a+b
console.log(add2(10, 20)); // sol: 30

// used in automation sometimes as it is more concise and easy to write. It is also used in React JS framework for writing components.

//Arrow function has a condition that they will return something at all either will return a console.log or will return a value/undefined (like a+b) 
// but it will not return nothing. So we cannot use arrow function if we don't have return type. In that case we can use normal function.

//example 4
function say() {
    console.log("Hi"); // this is a console.log and it will print Hi but it will not return anything. So we cannot use arrow function here.
}

console.log(say()); // sol: Hi and undefined (as there is no return type)



//if we want to use arrow function here then we can do like this
const say1 = () => console.log('Hi');  // this is a console.log and it will print Hi but it will not return anything. So we cannot use arrow function here.
say1(); // sol: Hi (as there is no return type)

const say2 = () => 'Hi'; // this is a console.log and it will print Hi but it will not return anything. So we cannot use arrow function here.
say2(); // sol: Hi (as there is no return type) but it will return Hi as it is a string and it will be printed in the console.


//Big Logic or multiple lines of code- we cannot write in a single line. In that case we can use normal function 
// or we can use arrow function with curly braces and return type.

const greet1 = name => {              // takes one argument that is name 
    const message = "Hi " + name;        // write multiple lines more than one line then we need to write return keyword and curly braces
    return message;
}

console.log(greet1("Arpita")); // sol: Hi Arpita (as there is a return type and it will return the value of message)