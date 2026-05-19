const BASE_URL = "https://app.thetestingacademy.com";
//const BASE_URL = "https://staging.thetestingacademy.com";
//BASE_URL = "https://staging.thetestingacademy.com";
// TypeError: Assignment to constant variable.


let name = "pending";
let name = "pending"; // not possible to declare the same variable again with let or const
name = "done";
{                         // this is a block, if you want to call it you have to duplicate again and again
    let name = "Dutta";
}
function say() {     // function can be called again and again
    let name = "Dutta";
}
say();
say();