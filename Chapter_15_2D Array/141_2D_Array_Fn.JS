let scores = [
    [85, 90, 78],   // student 0 --> 253
    [60, 45, 70],   // student 1 --> 175 
    [95, 88, 92]     // student 2 --> 275

];

// Sum of row using Map function --- Map can take you item one by one
let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0)); //line says: for every row (array)- return me the reduce which is (a,b) and give me the value of (a+b) and if do not find the value, give me 0
console.log(rowSums); // sol: [ 253, 175, 275 ] ---> sum of rows
// consider row 1: where s1 + s2= x then x+ s3= 253 total sum of row 1 ---> map can only take two values at a time
// then it will take second row and continue like above steps and map this
// reduce ((a,b)=>(a+b,0)) runs the function for all the values


let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  //Auth suite
    ["search-pass", "filter-fail", "sort-pass"],     //Search suite
    ["checkout-fail", "payment-fail", "confirm-pass"]   //Payment suite

];

// I want all the test case which have fail in it

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}
/* sol: filter-fail
checkout-fail
payment-fail */



// Example- This is also a 2d array but not a grid and assymmetric in nature as it doesn't have a same row and columns
let array_2d = [
    [1, 2, 3],
    [4, 5],
    [6]
];




