// to add 3 elements in the array

let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);



//Splice Example:

// Splice (start, deleteCount,...items to Add)

//arr=[1,2,3,4,5,6]
//index=0,1,2,3,4,5

//arr.splice(2, 1);  // from index 0,1,2 (i.e- arr: 1,2,3) remove 1 item
//console.log(arr); // solution:[ 1, 2, 4, 5, 6 ]----> 3 is removed

//arr.splice(2, 0, 99); // 0 means we don't want to delete anything but add 99 at index 2 
//console.log(arr); //solution: [1, 2, 99, 3, 4, 5, 6]

//insert(), add()

//arr.splice(2, 1, 99);// 2 means index= 0,1,2 (i.e- 1,2,3), it will remove 1 element i.e 3 (index =2)
// and replace it with 99
//console.log(arr); // solution: [ 1, 2, 99, 4, 5, 6 ]


arr.splice(1, 2, 10, 20); // on index 0,1 (i.e-1,2 ) delete 2 elements from 1 (i.e - arr 2,3) and replace them
//  with 10 and 20
console.log(arr);// solution: [ 1, 10, 20, 4, 5, 6 ]





