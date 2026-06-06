
const user = {
    firstName: "Pramod",
    lastName: "Dutta",
    get fullName() {                              // fullName keyword is a getter
        return this.firstName + this.lastName;    // this. means my current value  -->returning 
    },
    set fullName(value) {                         //  set value which is fullName  --> setting value
        [this.firstName, this.lastName] = value.split(" "); // split is required for splitting firstname and last name
    }
}

// older way before the classes and objects (oops in JS) is introduced in JS. before that we can create class by using objects
/// not using in the playwright course as this is older way

// This is Objects-{} not class and object
// this. it means current value in the object

console.log(user.fullName);

user.fullName = "Amit Sharma"; // we can change the value also
console.log(user.fullName);




//New ways by creating a proper classes  -----> will learn later and going to use instead of above older way

/*class User {
    firstName
    lastName
    fullName(){

    }
}                  */
