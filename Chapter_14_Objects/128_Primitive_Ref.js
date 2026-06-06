//Objects are not a primitive variables

// Primitive vs Reference types

let a = 10;
let b = a;   // this is primitive variable ------> new varaible b created, where b= 10
b = 99;         // b=99 means, if we print b, the value of b = 99 and for a it is still 10.
console.log(a); //sol: 10
console.log(b); //sol: 99

// Objects always  copy the reference, call by reference
// Reference- Object, array, function

let obj1 = { val: 10 }; // here we take variable value a =10
let obj2 = obj1;
obj2.val = 99;    // here, it will copy the reference and the value of obj1=obj2 are same
console.log(obj1.val); // sol: 99


// primitive variables are : nos, string, boolean, null and undefined
// Reference are: Object, array, function
