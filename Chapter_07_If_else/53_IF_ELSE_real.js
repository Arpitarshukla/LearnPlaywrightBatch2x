let username = "Dev";
let password = "secure123";
let isAccountLocked = true;



if ((username === "Dev" && password === "secure123")) {
    console.log("Allowed to enter");
} else {
    console.log("not allowed to enter");

}

//Logical operator + if-else statements----> same example but 2nd condition of account locked as false is taken

if ((username === "Dev" && password === "secure123") && !isAccountLocked) {
    console.log("Allowed to enter");
} else {
    console.log("not allowed to enter");
}
