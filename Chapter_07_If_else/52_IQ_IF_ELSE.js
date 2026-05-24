if ("Hello") console.log("String is truthy");  //Truthy condition  "hello" = truthy
if (42) console.log("Number is truthy");
if ({}) console.log("Empty object is truthy!");
if ([]) console.log("Empty array is truthy!");  // [] array


//in literals the below examples are there
// Number= 1,2,3,45,87,....- truth 
//but 0=false 


//if ("") console.log("Won't print");    //false condition
//if (null) console.log("Won't print");    //false condition
//if (undefined) console.log("Won't print");    //false condition
//if (NaN) console.log("Won't print");    //false condition
//if (0) console.log("Won't print");    //false condition


let name = undefined;  //if let name=0, the result will be "Bye" only
if (name) {
    console.log("Hi");
} else {
    console.log("Bye");
}



