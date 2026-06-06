//Spread 

const obj1 = { a: 1, b: 2 };  // we use const as it will not change the value of object only it will change the keys
const obj2 = { c: 3, d: 4 };

const copy = { ...obj1 }; // we can copy object of obj 1 ----> ... means all the values
console.log(copy); // sol: { a: 1, b: 2 }

// Why we keep object as a const: We dont want to change the object reference we want to change only key values







