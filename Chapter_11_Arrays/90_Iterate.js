// Iterate - Go from one to another

let tests = ["login", "checkout", "search"];    // name of the array is "test"

for (let i = 0; i < tests.length; i++) {                  /// mostly use this
    console.log(tests[i]);
}

console.log("----");



//another way:-----> for..of (cleanest for values)

for (test of tests) {
    console.log(test);
}

console.log("----");



// another way is forEach loop--- sometimes can be used  this

tests.forEach((test, index) => {           /// or sometimes use this
    console.log(test, index);
});

console.log("----");

// previous one, only "test" is replaced with "i"

tests.forEach((i, index) => {             // test is a keyword, can be items of array also or i also---any name
    console.log(i, index);
});

console.log("----");



///for in is also possible

let students = ["methis", "senthil", "ajay", "rahul"];

for (let student in students) {   // in case of "for in" you need to take variable "let"
    console.log(student, "->", students[student]); //index=in
}

console.log("----");




// another way//-----------> never going to use this

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

