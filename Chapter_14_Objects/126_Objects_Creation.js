let c = { status: "pass" };
let d = { status: "pass" };  // They are not same.. when object is created variables are stored in heap memory with same value with different reference

console.log(c);  // { status: 'pass' }  values are same but references are different
console.log(d); // { status: 'pass' }


if (c === d) {
    console.log("true");
} else {
    console.log("false");
}                           /// false as both of thame have different reference


if (c == d) {      // == is also false
    console.log("true");
} else {
    console.log("false");
}                           /// false as both of thame have different reference




