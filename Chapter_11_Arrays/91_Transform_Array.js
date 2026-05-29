//Transforming the array
let scores = [45, 82, 91, 60, 73]


//map-ransforms  every element, return a new arrays
//map will always return same no. of element you have but based on condition their values will be changed

let grades = scores.map(s => s > 70 ? "Pass" : "Fail"); //arrow  function: s (find all the elemets if it is greater than 70) then s=pass else fail
// like ternary  operators //  here, this function calls the elements one by one 
console.log(grades); //solution: [fail,pass,pass,fail,pass]



let passing = scores.filter(s => s > 70); // will only keep values greater than 70
console.log(passing); // only 82,91,73



//Reduce--- it will accumulate to a single value 

let total = scores.reduce((a, b) => a + b, 0); //(a,b)=>a+b is func)-- where a= accumulator (running total), b= current element, 0= initial value of a
// taking ,0 at end means skip 0 as 0+number will give type error)
console.log(total); //sol: 351------>> previous value to current value is added and 
// reduce the size of array or reduce the index



//flat----------- flattens nested array (convert multiple arrays into simple new array ) - rarely used

let nested = [[1, 2], [3, 4], [5]];
console.log(nested.flat());  // [ 1, 2, 3, 4, 5 ]

