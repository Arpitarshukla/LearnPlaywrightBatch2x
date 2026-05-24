let rajkumar_age = 18;
let rj_will_Goa = rajkumar_age > 18 ? "RJ will go goa" : "No goa"; // : means else
console.log(rj_will_Goa);


let rupa_age = 18;
let rupa_will_Goa = rajkumar_age >= 18 ? "Rupa will go goa" : "No goa"; // : means else
console.log(rupa_will_Goa);

//ternary operators based on conditions, like age example

// Doubt questions
//let a = 10;
//let + a=10;
//let a+=10; this doesn't exists

// other examples of ternary operators//

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅Pass" : "❌Fail";
console.log(testResult);


let environment = "staging";            // env= staging, 
let baseUrl = environment === "prod"    //checking staging is prod?, then value will be 1st site else 2nd site
    ? "https://api.example.com" : "https://staging-api.example.com";
console.log(baseUrl);


let isCI = true;  //isCI is a variable name
let browserMode = isCI ? "headless" : "headed";  //true in headless mode 
console.log("Launching browser in:", browserMode, "mode");
// CI/CD ENV AND JENKINS  we run in headless mode as it is faster than headed mode


let responseTime = 850; // ms   sla means Service Level Agreement
let sla = 1000; // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";  // responseTime<=sla? is condition,"Within SLA ✅" : "SLA breached ❌" true and false.
console.log(`Response: ${responseTime}ms-${slaStatus}`);


//Ternary operator works like: Condition ? true : false;

let condition = true;
let issKMale = condition ? true : false;
console.log(issKMale);


//Nested Ternary

// We can have multiple conditions in nested ternary 

let age = 26;
let is_pramod_goa = age > 26 ? "Yes, he will go" : "No, he will not go";
console.log(is_pramod_goa);


/*example with multiple condition as  if pramod is 18+ then he will go to goa elso no 
and if he goes to goa then if he is greater than 26 then only can have drink else no.*/
// rarely used in practical

let age_pramod = 45;
let is_pramod_d = age_pramod > 18 ? (age_pramod > 26 ? "Drink" : "No Drink") : "No Goa";
console.log(is_pramod_d);


///--------------------------used in API Testing----------//

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :                           //first it is checked
        statusCode < 400 ? "Redirect" :                     // in single ternary there is No condition
            statusCode < 500 ? "Client Error" : "Server Error";    //if it is <300, it will check if <400 and again at the end it will check <500
console.log(`Status ${statusCode}:${category}`);



//Real example

let a = 10, b = 5, c = 8;
let result = a > b ? (a > c ? "a is greatest" : "c is greatest") : "b is greatest";
console.log(result);


let temp = 35;
let feel = (temp >= 40) ? "Very hot" :            //false
    (temp >= 30) ? "Hot" :                         //true
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";

console.log("7.Temperature:", temp, "|Feel:", feel);



