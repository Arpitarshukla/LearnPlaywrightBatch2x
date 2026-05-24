//let age = 18;

//if (age >= 18) {
//  console.log("You are an adult");
//} else {
//  console.log("You are a minor");   
//}               // You are an adult 


// app.vwo has 3 types of log in rules: viewers, editor and admin---->

let isLoggedIn = true; // if we select false it will show result as "you are not loggen in!!"
let userRole = "editor";

if (isLoggedIn) {              //This parent will check if you are logged in (last line)

    if (userRole === "admin") {                    //nested loops //These line will check the role if you are logged in
        console.log("admin can do all the things.");
    } else if (userRole === "editor") {
        console.log("Welcome Editor- Edit access granted.");
    } else if (userRole === "viewer") {
        console.log("Welcome viewer -Read-only access.");
    } else {
        console.log("No idea which role you are!");
    }

} else {
    console.log("You are not logged in!!");  // Untill you are not logged in, should i even check your role
}

