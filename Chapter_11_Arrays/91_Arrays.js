// Rule:  By default nos. will be sorted in the lexographic sorting means sorted like string (based on first charaters)
// to properly sort them as a no. sys you need to use arrow function. check lines from 17 onwards

let fruits = ["banana", "apple", "cherry"]; // 3 elements are there
// sort based on first character in the case  alphabetically
fruits.sort();
console.log(fruits);


// for numbers
let number = [3, 1, 4];
number.sort();
console.log(number);



let nums = [10, 1, 21, 2];
nums.sort();
console.log(nums);// solution: [ 1, 10, 2, 21 ], This is lexographic/Natural sorting----based on first letter or number

// Because sort() converts elements to strings and sorts lexicographically (dictionary order). "10" comes 
// before "2" since "1" < "2". 


// For Normal sorting (sorting based on no. system)----Use nums.sort((a, b) => a - b) for numeric Ascending sort.
nums.sort((a, b) => a - b); //comparing two numbers with - if ans is +ve will roll back and if ans is -1 then it will be 1st one.
console.log(nums);// solution: [ 1, 2, 10, 21 ]

// For Reverse---- Descending order

nums.sort((a, b) => b - a);
console.log(nums);// solution: [ 21, 10, 2, 1 ]
















