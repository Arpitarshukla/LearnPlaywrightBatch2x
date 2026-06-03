// Function within function------------> JS allows this
// not used in automation it is againt automation


let g_x = 10;


//Nested scope | blocked scope

function outer() {    //outer function
    let x = 10;

    function inner() {       //inner function
        let y = 20;
        console.log(x);    //Outer variables are allowed to internal function

        inner();
        console.log(y);    // Internal variables are not allowed to outer function
    }
    //console.log(y);     // not allowed here
}
outer();
console.log(g_x);    // global variable is allowed everywhere


