// Leap Year Check

//Rules:
//Divisible by 4 AND not divisible by 100-----> Leap Year
//OR divisible by 400------> Leap Year
//Else--> Not a leap year

// ---||-> or, && is used to condition addition to first one---% is modulus---|| used to add another imp rule

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a Leap Year");
} else {
    console.log(year + " is not a Leap year");
}