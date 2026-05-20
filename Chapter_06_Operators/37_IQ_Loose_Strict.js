console.log(0 == "");
console.log(0 == "0");
console.log("" == "0"); // false     //transitivity broken

//0 == ""	true	Empty string coerces to 0
//0 == "0"	true	"0" coerces to 0
//"" == "0"	false	Both strings — no coercion — different values

console.log("" == 0); //true

//----> Rules:
//-----string vs number --> coerce string to number hence true
//-----string vs string ---> byte compare, no coercion
//-----Number ("") =0, Number ("0") =0 ----> but that path never runs when both sides already strings

// JavaScript's == coerces to primitive numbers when one operand is a number,
// but when both operands are strings ("" vs "0"), it compares them as-is without coercion.
// This inconsistency breaks transitivity.


console.log(0 == false);           // true
console.log(null == 0);           // false    null is never = 0
console.log(null == undefined);   //true       loose compared then true
console.log(null === undefined);  //true          strictly compared then false

