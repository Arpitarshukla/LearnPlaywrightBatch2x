//let is Block-scoped

let x = "global";
if (true) {
    //TDZ for block scoped variable "x" starts here
    //console.log (x):     // ReferenceError: Cannot access 'x' before initialization (NOT "global"!)
    let x = "block";        //TDZ for block scoped variable "x" ends here
    console.log(x);      // block
}

console.log(x);      // global (outer "x" is unaffected by inner block)
