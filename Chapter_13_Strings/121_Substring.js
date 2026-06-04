let str = "Login_Test_Pass_001 ";   ///Login_Test is a test name, Pass is status and 001 is test number 
//slice (start,end)- negative indexes supported
console.log(str.slice(0, 5)); // sol: login --->index starting from 0-4 hence login
console.log(str.slice(11)); // sol: Pass_001  ---> from index 11 to end

let testNumber = str.slice(-3);
console.log(testNumber); //Sol: 01

console.log(str.includes("Pass")); //sol: true ---> it will pass--- this is a case sensitive



//substring (start,end) - does not take negative indexes (treats as 0)

console.log(str.substring(6, 10)); //sol: test 

console.log(str.at(0)); // sol: L














