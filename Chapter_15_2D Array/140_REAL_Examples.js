// Real Example in Automation :

let testMatrix = [
    ["login", "pass", 200],  // login is the testName, status and status code 
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

//API test cases result stored into this
// How many testcases we have executed? --- 3 (as rows: 1,2,3)
// How many test cases are passed? ---- 2 
// How many test cases are failed? ---- 404 
// How to iterate over it ----> using for loop

// Easy Way
for (let i = 0; i < testMatrix.length; i++) {   // we are getting rows here
    for (let j = 0; j < testMatrix[i].length; j++) {   // we are getting rows.length --- means- column
        console.log(testMatrix[i][j]);
    }
    console.log(); // after every row adding space
}


//Alternate Way
for (let row of testMatrix) {
    for (let cell of row) {         //cell is a column value
        process.stdout.write(cell + " ");  // This is same as console.log line. this is a node module function -----> This will print values without adding a space
    }
    console.log(); // after every row addign space
}

//Difference between :
//process.stdout.write- print raw, No new line
//Console.log- print+auto-append \n (new line)


// One more way (forEach way with arrow function) ----Never going to use 
testMatrix.forEach(row => {                 // 1.we are into a ONE row---- > row is a variable name
    row.forEach(                            // 2. Walk cell in that row
        cell => process.stdout.write(cell + " ")  // print cell, SAME line, ----> we are also calling a cell (column)
    );
    console.log();            // 3. row done - New line, drop down ----> after one row we will have a space
});
// Outer loop will point at row 1, then 2 and then 3, --- one at a time and inner loop will work for that row where it goes from left to right and take values of cells 















