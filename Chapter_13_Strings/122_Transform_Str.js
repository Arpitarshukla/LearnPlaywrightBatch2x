let str = " Hello, World! ";
console.log(str.toUpperCase());  //HELLO, WORLD!
console.log(str.toLowerCase());  // hello, world!

console.log(str.trim());  //Hello, World!--- spaces are removed from start n end


console.log(str.trimStart()); //Hello, World! --- spaces are removed from start
console.log(str.trimEnd()); // Hello, World!--- spaces are removed from end


let msg = "Test: FAIL. Retry: FAIL.";
let msg1 = msg.replace("FAIL", "PASS");
console.log(msg1); // sol: Test: Pass. Retry: FAIL.

// console.log(msg.replace("FAIL", "PASS"); can also be used directly without taking let msg1

console.log(msg.replaceAll("FAIL", "PASS")); //Sol:  Test: Pass. Retry: PASS.


//you can do the above code with Regex as well

console.log(msg.replace(/FAIL/g, "PASS")); // sol: Test: PASS. Retry: PASS.


// Concetenation
"Hello" + "" + "World";
"Hello".concat("", "World");
`$ {"Hello"} $ {"World"}`;



let url = "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g, "qa"));     // change environment variable to qa




let r = "pass,fail,skip".split(",");  // split will create an array out of it
console.log(r);

let rr = "test_login_pass".split("_").join(""); // join the splitted array using .join

console.log(rr);




let parts = ["2024", "03", "07"];   // we have a array
let date = parts.join("_");         // we are joining then using .join with _
console.log(date);


//replace will use only first character and replace all will use all character












