//
function openBrowser() {
    return new Promise(function (resolve) {
        //Code to open the browser                 //rather than returning to callback we are using promise
        resolve("Open the browser");              //callback is replaced by the promise as callback is not a good thing
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}


function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}


function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}




openBrowser().then(function (msg) { // when openBrowser is done will call the goToLogin to start their journey
    console.log("Step 1- Open browser");
    return goToLogin();
}).then(function (msg) {

});

openBrowser()                                                //  when you are done call step 1 then done then step 2-- like this
    .then(function (msg) {
        console.log("Step 1: ", msg);
        return goToLogin();
    }).then(function (msg) {
        console.log("Step 2: ", msg);
        return enterCredentials();
    }).then(function (msg) {                          //if there is rejection, .then will not be used will call .catch
        console.log("Step 3: ", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4: ", msg);
    }).catch(function (error) {
        console.log("Error: ", error);
    }).finally(function () {
        console.log("Done execution!");
    });


/*Step 1- Open browser
Step 1:  Open the browser
Step 2:  Login page loaded
Step 3:  Credentials entered
Step 4:  Logged in successfully
Done execution!*/



//we have coverted asynchronous program into synchronous program
