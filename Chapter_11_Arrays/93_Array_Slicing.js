// Slicing & Combining
let arr = [1, 2, 3, 4, 5]; // index = [0,1,2,3,4]
//.// slice( start,end)- returns new array, doesnot mutate actual one
// // Don't give the end, it will automatically take fromstart to end

console.log(arr.slice(1, 3)); // solution [2,3]--> (start, end-1):--- 1,3 means going from index 1 to 2---->asking for index->(1,2)
console.log(arr.slice(2, 4));// solution: [3,4]

console.log(arr.slice(2, 5));// solution: [ 3, 4, 5 ]


// if end is not given then, it will print all
console.log(arr.slice(2));// sol: [ 3, 4, 5 ]---> from index 2 to all


// if - then it will start from back as [-5,-4,-3,-2,-1]--- no 0 is considered in negative
console.log(arr.slice(-2));// sol: [4,5] ----> will go from -2 to -1 going will be from right hand side


console.log(arr.slice(0));// sol: [ 1, 2, 3, 4, 5 ]





// difference of slice and splice


// ------>In slice: old array will remain as it is and new array will be created

let array = [10, 20, 30, 40, 50];
let s = array.slice(1, 4); //sol: 20,30,40
console.log(array);
console.log(s);

//------->In splice: he original array is modified

let array1 = [60, 70, 80, 90, 100];
let removed = array1.splice(1, 2);  //remove 2 elemts from index 1
console.log(removed); // sol: [60,90,100]
console.log(array1);


// slice is safe