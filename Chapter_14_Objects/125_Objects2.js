//Objects
// key and values ------> keys will not be in double quotes otherwise it is a JSON

let student1 = { name: "Amit", age: 65 }; // 2 keys: name and age ----  2 values: "Amit" and 65
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };
// Key will not be in the double quotes


//below key in double is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

//example:
let a = { status: "PASS" }; // a is a reference which pints status= pass
console.log(a.status);     // to print use .status operator
console.log(a["status"]);     // a["status"] can be also used to fetch the value 

// another variable can be created which is similar 

let a1 = { status: 'Pass' };
console.log(a1.status);

let b = a; // b=a means now b is also pinting to a which is pointing to status=pass
console.log(b.status);// PASS

// if we select b1=a and then change the value of b1.status as fail the same result will come for b1.status and a.status
let b1 = a;
b1.status = "FAIL"; // now status: pass becomes status" fail -----> copy by reference
console.log(b1.status);
console.log(a.status);
//Objects are always copy by reference

if (b1 === a) {
    console.log("true");
} else {
    console.log("false");
}                           /// true as b = a and is same------> both a and b are pointing same reference

