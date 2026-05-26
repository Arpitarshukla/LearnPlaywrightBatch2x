// Creating Array// Array literal (preferred way)
let browser = ["Chrome", "Firefox", "Safari"];

//Array constructor (another way) --------> it will create an empty Array 
//and create another array like the previous one also
let score = new Array(3);  // here the 3 is length    // empty array will be created on basis of this line

let scores2 = new Array(1, 2, 3);
console.log(score);      // solution: [ <3 empty items> ]-empty array is created
console.log(scores2);  // solution:[ 1, 2, 3 ] -it will show all the arrays

// new is a keyword here----> way to create empty array
//empty array is created so that we can put some values in between

let numbers = new Array(100, 200, 300, 400); // we can create array using keyword like new array
console.log(numbers);


// another way of creating array is "Array of"
let test = Array.of(10, 20, 30, 40, 50);
console.log(test);


// Array.from ----->   Arrays can be created using "from"
let chars = Array.from("hello"); //it will divide in multiple charcters
console.log(chars); // solution: ['he','e','l','l','o']



//let numbers1 = Array.from("123456789");  // not a great way for number so ignore for now
//console.log(numbers1);                 // it is specially used for charcters

