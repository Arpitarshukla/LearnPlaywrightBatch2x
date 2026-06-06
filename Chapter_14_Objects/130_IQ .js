/// Objects are dynamic in nature

const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
};
console.log(user); // {name: 'John', age: 30, email: 'john@example.com'}
console.log(user.name); // John
console.log(user["age"]); // 30



//Dynamic Property Access
const key = "age";
console.log(user[key]);  // sol: 30 ---> key is now age   ----> // key is a string



//Adding/Modifying properties
user.city = "NYC";
user.age = 31;
console.log(user);  // sol: {name: 'John', age: 31, email: 'john@example.com', city: 'NYC'}



// if you want to print all the values then use Object interface
let obj = { name: "Login" };
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
/* 
Sol: {
  value: 'Login',
  writable: true,
  enumerable: true,
  configurable: true
}                */

  
// never used anywhere but we can print all the info about name
// we can get a description of a key if we want to by using above inbuilt function
