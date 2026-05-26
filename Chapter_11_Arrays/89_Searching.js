// How to search

let results = ["pass", "fail", "pass", "error", "fail"];  // index= 0,1,2,3,4

////indexOf- returns first index, or -1 if not found

console.log(results.indexOf("fail")); // solution: 1
console.log(results.indexOf("skip")); // solution: -1



//lastIndexOf- searches from the end

console.log(results.lastIndexOf("fail")); //4


//includes- returns boolean

console.log(results.includes("error"));  //true
console.log(results.includes("skip"));   //false



//find- returns first matching element

let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);     /// solution: 25----> 10 is removed  
console.log(r);


//findIndex

console.log(nums.findIndex(n => n > 20)); //solution: 1


//findlast
console.log(nums.findLast(n => n > 20)); //solution: 45

console.log(nums.findLastIndex(n => n > 20)); //solution: 3


