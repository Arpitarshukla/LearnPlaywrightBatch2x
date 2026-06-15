let apiCall = new Promise(function (resolve, reject) {

    reject("500 Error");
});

apiCall.then(function (data) {
    console.log("Success or Resolve");
}).catch(function (error) {               //.catch is calling the reject only and print error or reject
    console.log(error);
});

//Can you do both of them ---> Nope: Only one condition from resolve or rejected can be performed

//.catch() only runs when the promise is rejected.
// .then() is completely skipped in this case.







