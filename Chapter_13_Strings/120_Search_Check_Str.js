// Searching and checking concept

let url = "https://staging.vwo.com/api/login?retry=true";


//includes
console.log(url.includes("staging")); // sol: true---->want to verify
console.log(url.includes("production"));// sol: false

// startsWith and endsWith---like Array concept

console.log(url.startsWith("https"));  //sol: true
console.log(url.startsWith("http://"));  //sol: false
console.log(url.endsWith("true"));    //sol: true


// indexOf and lastIndexOf concept

console.log(url.indexOf("a")); // sol:10 ------>index is 10
console.log(url.lastIndexOf("a")); // sol: 24  -----> index from last occurance of "a"

console.log(url.indexOf("nothere")); // sol: -1 ---> it does not exist at all hence- -1

console.log(url.indexOf("x")); //sol: -1 ---> we do not have this



// Search -----finds the first substring match in a regular expression search and return no.
console.log(url.search(/login/)); //sol: 28 ---> login has started from index of 28

console.log(url.search(/vwo/)); //sol: 16

// --- we are using /login/ or /vwo/ instead of quote...They are Regex (regular expression)
//regular expression are the expression or a way or patterns which we find within the strings






