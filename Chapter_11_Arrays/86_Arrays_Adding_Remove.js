// How to add and remove the arrays

let arr = [1, 2, 3];    //here arr is the name of array
console.log(arr);


//Add to End
arr.push(4);  //  if you want to add 4 or any thing at the end use arrayname.push---> example: arr.push
console.log(arr);


//Remove from END
arr.pop();  // if you want to remove any thing from the end use arrayname.pop---> example: arr.pop
console.log(arr);


// we can push multiple elements also
arr.push(5, 6);
console.log(arr);


// Add at the beginning---->  using arrayname.unshift---> example: arr.unshift
arr.unshift(0); // array arr(0) will replace the value
console.log(arr);


// Remove from the beginning------> using arrayname.shift----> example: arr.shift
arr.shift();
console.log(arr);


//arr.unshift(0); // solution:0-----> unshift will insert the element in the beginning
//console.log(arr);

arr.unshift(100); // solution:100-----> unshift will insert the element in the beginning
console.log(arr);


arr.shift();
console.log(arr);// solution: remove 100 from the elemets---->  remove first elemt






