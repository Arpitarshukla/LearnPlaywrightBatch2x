//If and else are decision making only but Prmise handles aynchronous operations (means the things wil happen after some time)

//async means something I'll do it later
// promise is a way where it tell you where promise can be resolved or rejected we don't know exactly what.. we don't know how much time, when and which one will be called



let testRun = new Promise(function (resolve, reject) {
    let apiCall = true;
    if (apiCall) {
        resolve({ status: "done" });
    } else {
        reject("Assertion failed");
    }
});


testRun.then(function (data) {
    console.log(data);               //won't run if no resolve happened

}).catch(function (error) {              // runs cause reject or failure happened
    console.log(error);
}).finally(function () {
    ///This code will be always executed anyhow.
    console.log("I will be executed anyHow!");
})


// Promise will resolve pyramid problem