//Async and await are the much cleaner way to write promises instead of chaining with .then we can directly use the keywords.
//promise uses .then whereas async and await is like face to face ---> more natural

//Similar 
//try/catch/finally maps directly to .then()/.catch()/.finally()-----> same logic, cleaner syntax

/*async function testAPI() {
    try { }
    catch { }
    finally { }
}*/

// example of async function:

async function testapi() {
    try {
        let result = await Promise.reject("503 reject"); //---> when you make promise you always await for that promise to finish
    }
    catch (error) {  //we can use .catch and .finally here as we are using promise
        console.log('Error', error);
    }
    finally {
        console.log("Clean up!")
    }
}

testapi();
/*sol: Error 503 reject
Clean up!*/

//Rule: Whenever you see function its async and statement its await
