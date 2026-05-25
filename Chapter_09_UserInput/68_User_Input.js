// You can take user input using prompt
//it won't run, as it is not migrated in node.js

let num = prompt("Enter a number");
num = number(num); // convert string to number

if (num % 2 === 0) {
    console.log(num + "is Even");
} else {
    console.log(num + "is odd");
}


// it will run in console
// it is available in javascript engine or browser only