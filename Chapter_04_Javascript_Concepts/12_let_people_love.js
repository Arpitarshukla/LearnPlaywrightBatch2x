// let - Block Scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1; // retry with let again by adding line 6 and then running the code again 
retryCount = retryCount + 1;
console.log("Retry attempt:", retryCount);

let retryCount = 5;
//let retryCount=5; Syntax Error: Identifier 'retryCount' has already been declared
// Synatx Error : redeclaration not allowed with let, but you can reassign the value of retryCount without redeclaring it.



let testStatus = "pending";

if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime); //1200
}

console.log(executionTime); // ReferenceError: executionTime is not defined

// {} -Block
// if(){}
// function(){}


// let = loyal
//var= traitor / variable



let name = "pending";
name = "done";
