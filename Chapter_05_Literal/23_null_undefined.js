// null vs undefined in JavaScript

// undefined: variable declared but NOT assigned a value
let a;
console.log(a); // undefined

// null: explicitly assigned "empty" value
let b = null;
console.log(b); // null

// typeof check
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (historical JS bug)

// Equality
console.log(undefined == null);  // true  (loose equality)
console.log(undefined === null); // false (strict equality - different types)

// When they appear
function greet(name) {
  console.log(name); // undefined if not passed
}
greet(); // name is undefined

let obj = { x: 1 };
console.log(obj.y); // undefined (property doesn't exist)

// null is intentional — "no value" set by the developer
let user = null; // I know there's no user right now

// undefined means JS couldn't find a value
