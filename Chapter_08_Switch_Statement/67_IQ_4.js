let value = "5";                        // it is string, if confuse then check value
console.log(typeof value);

switch (value) {
    case 5:
        console.log("Number 5 matched");
        break;
    case "5":
        console.log("String '5' matched");
        break;
}

// another example

let status = 0;                   // it will select 0 matched
console.log(typeof status);       // number  just to know why 0 is selected here

switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}
