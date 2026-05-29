// Joining the arrays

let a = [1, 2];
let b = [3, 4];
let c = a + b;
console.log(c); // solution: 1,23,4------> not a proper joining as it is taken as a string 

// Proper joining or combining: CONCAT
let c1 = a.concat(b);
console.log(c1); // solution: [ 1, 2, 3, 4 ]

//Spread---->modern way- concatenation. (...)-------------> mostly used in automation
let d = [...a, ...b]; // all the element of a and all the element of b
console.log(d); // solution: [ 1, 2, 3, 4 ]

// Join
let s = ["pass", "fail", "skip"].join(" | ");// for joing all the elements into 1--- you can use any thing for separating like: |,-,/,etc
console.log(s); //solution: pass | fail | skip-----------> if selected as ("") will give solution like passfailskip





