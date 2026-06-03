//Checking- if ourStatusCode >=200 && ourStatusCode < 300 

//Examples-

// Normal function---->Perfectly normal function

validateStatusCode(200);  // can be called before the function declaration as well because of hoisting
function validateStatusCode(status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}


// Function as expression
// In this case, we cannot call the function before its declaration because of hoisting. It will throw an error.

const validateStatusCode_Exp = function (status) {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Exp(250);


//Arrow function

// In this case, we cannot call the function before its declaration because of hoisting. It will throw an error.
const validateStatusCode_Arrow = (status) => {
    if (status >= 200 && status <= 300) {
        console.log("Request is fine!")
    }
}

validateStatusCode_Arrow(200);









