// Accessing and modifying the element

let statuses = ["pass", "fail", "skip"];
//JS borrowed this from Python. indexs are 0,1,2 from left to right and -3,-2,-1 from right to left.
console.log(statuses[0]);          //correct way is directly using accessing by using inxsations and they will be visible.
console.log(statuses[2]);
console.log(statuses[-1]);  /// undefined as it is not sure

// if you want to see -1, -2 or any negative index like this you need to use ".at" as it is borrowed func from python

console.log(statuses.at(-1));    // solution: "skip"----> here it will conside from right to left
console.log(statuses.at(-2));    //solution: "fail"
console.log(statuses.at(-3));    //solution: "pass"
console.log(statuses.at(-4));    //solution: undefined

//console.log(statuses.at(-4)); // here "at" is a function

// This can be used when the question ask to print last element in the array, 
// using -1 will give direct solution




//Modify ----> we can change the value also

statuses[1] = "blocked";  // for index 1 the value will be changed to "Blocked"
console.log(statuses);  // solution: [ 'pass', 'blocked', 'skip' ]