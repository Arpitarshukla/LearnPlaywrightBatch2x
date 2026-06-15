//To check all the solutions: please disabled other codes except one for which you want to see the result


let p = new Promise(function (resolve, reject) {
    resolve(42);
});
p.then(function (value) {
    console.log("Answer: ", value);
});

// sol: Answer:  42 --> only calling resolve and printing the value which is there



let c = new Promise(function (resolve, reject) {        //selected idetifier c ans p is already taken for above example and it will shoe ref error
    reject("Something broke");
});
c.catch(function (err) {
    console.log("Caught:", err);
});

//sol: Caught: Something broke


let d = Promise.resolve(5);
d.then(function (val) {
    return val * 10;                  //then will pass the value to the anonymous function
}).then(function (val) {
    console.log("Result: ", val);
});
// sol: Result: 50


Promise.resolve(1)
    .then(function (val) {
        console.log(val);
        return val + 1;                 //sol- 1
    })
    .then(function (val) {
        console.log(val);
        return val + 1;                   //sol- 2
    })
    .then(function (val) {
        console.log(val);
    });                                     //sol- 3
/* sol: 1
2
3*/


Promise.resolve("start")
    .then(function (val) {
        console.log(val);
        throw new Error("Broke at  step  2");
    })
    .then(function () {
        console.log("This will NOT run"); //// throw new error means- got an error and will not use .then will use .catch
    })
    .catch(function (err) {
        console.log("Caught:", err.message);

    });  // sol: Caught: Broke at  step  2




Promise.reject("Test failed")
    .then(function (data) {                           //use .catch not .then for reject won't run
        console.log("Data:", data);
    })

    .catch(function (err) {                         // runs as.catch is used
        console.log("Error:", err);
    })

    .finally(function () {                      // .finally runs not matter if it is rejected or resolved
        console.log("Cleanup done");
    });

/* sol: Error: Test failed
Cleanup done */


Promise.resolve("Quick win").then(function (msg) {
    console.log(msg);                            //sol: Quick win
});

Promise.reject("Quick loss").catch(function (msg) {
    console.log(msg);                            // sol: Quick loss
});


let t1 = Promise.resolve("Login: PASS");
let t2 = Promise.resolve("Search: PASS");
let t3 = Promise.resolve("Logout: PASS");

Promise.all([t1, t2, t3]).then(function (results) {
    console.log(results);
});

//sol: [ 'Login: PASS', 'Search: PASS', 'Logout: PASS' ]


/*let t1 = Promise.resolve("PASS");
let t2 = Promise.reject("FAIL");
let t3 = Promise.resolve("PASS");

Promise.all([t1, t2, t3])
    .then(function (r) { console.log("All:", r); })
    .catch(function (err) { console.log("Stopped:", err); });

//sol: Stopped FAIL*/



Promise.allSettled([
    Promise.resolve("API 200"),
    Promise.reject("API 500"),
    Promise.resolve("API 201")
]).then(function (results) {
    results.forEach(function (r) {
        let val = r.status === "fulfilled" ? r.value : r.reason;
        console.log(r.status + "➡️" + val);
    });
});

/* sol: fulfilled➡️API 200
rejected➡️API 500
fulfilled➡️API 201 */










