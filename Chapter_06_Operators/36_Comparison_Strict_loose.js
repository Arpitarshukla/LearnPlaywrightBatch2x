//number==string
console.log(42 == "42"); // true  // loose comparison (==) performs type coercion, converting the string "42" 
// to the number 42 before comparing, resulting in true.
console.log(42 === "42"); // false  // strict comparison (===) does not perform type coercion, so it compares both value 
// and data type. Since 42 is a number and "42" is a string, they are not strictly equal, resulting in false.

console.log(5 === 5);
console.log(5 === "5");

console.log(5 == 5);
console.log(5 == "5");



console.log(0 == ""); // ? ""(empty) converted 0 and then checked. hence true
console.log(0 === "");


console.log(true == 1);// true
console.log(false == 0); // true
console.log(true == "1"); // true  in loose converted terms string is also true if it is without 0
console.log(true == 2); // need to check runninf the code again if it is true or false




console.log(5 != "5"); //false, 5=int, "5" string, both pf them are not equal
console.log(5 !== "5"); // true, (value, datatype) ----> loose check, hence true
//console.log(5!=== "5"); // doesn't existss

// === Strict check we will check for both the datatype and value
// == lose check we will check either value or data type
