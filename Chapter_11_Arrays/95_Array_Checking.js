//Checking Arrays

//check if something IS an Array or not-------------> isArray is a function to be used here and in automation
let result = Array.isArray([1, 2, 3]);
console.log(result);                   // solution: True
let result1 = Array.isArray("a");
console.log(result1);                  //solution: False-------> only a is not an array, it is a string


// Every & Some---------> can be used in automation

//reduce 
let a1 = [80, 90, 85].every(s => s >= 70);
console.log(a1);                           // sol: true

let a2 = [80, 60, 85].every(s => s >= 70);    //(s => s >= 70) is a arrow function
console.log(a2);                          // sol: false



// Playwright API-----------> to check all the status code should be greater than 200


let statuscode = [200, 201, 203].every(statuscode => statuscode > 200);
console.log(statuscode); // false


// Some- AT LEAST  One must pass

let c1 = [80, 60, 85].some(s => s < 70); // true
console.log(c1); //true

let c2 = [80, 90, 85].some(s => s < 70); // false
console.log(c2); //false


// Arrow function : (s => s < 70)




