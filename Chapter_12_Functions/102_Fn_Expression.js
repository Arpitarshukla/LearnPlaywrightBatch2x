// Storing the function and then calling it

//example store the function and remove the name and then take any name and call the function when needed

const greet = function sayName(name) {   // storing function in greet now ("name" is saved in greet)
    return `Hello,${name}`;
}

let r = greet("Pramod");
console.log(r);

//we can use let also but mostly const is used as we mostly want the function name will not change

//Type 4 - Normal function      //can also be written like line 19
function greet1(name1) {
    return `Hello,${name1}!`;
}
greet1("Pramod");

//Function as Expression------->Normal type 1 function now as expression

const greet2 = function (name1) {
    return `Hello,${name1}!`;
}
greet2("Bob");




