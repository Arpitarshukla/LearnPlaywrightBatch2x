// node.js has a function named as readline for user input
// difficult version
// node.js says to us to use a library readline
// we have to create an interface then only we need to open the question,
// where we can run code and then we need to close it also



// it is never used in automation.. never used in place of this we prefer to use prompt sync..
//Prompt sync is also very rarely used in automation.. it shows 100's of error
// will see user input in playwright 

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number:", (input) => {
    let num = Number(input);
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    rl.close();
});
