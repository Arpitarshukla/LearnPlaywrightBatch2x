//Real QA Scenario: End to end login for the App.vwo.com

//openBrowser()
//goToLoginPage()
//enterCredentials()
//clickLogin()

//Untill openbrowser is finished we can not run goToLoginPage().. we need to wait
//we have to create a function and its name will be openbrowser() and it will take a callback

function openBrowser(callback) {
    console.log("Opening the chrome browser");
    setTimeout(function () {
        callback();                  //we can directly call but we have taken 1 sec 
    }, 1000); //(1000 means 1 sec-calling a function and run for 1 sec then after it is finished then we can call a callback)

}  // after one sec it will open browser

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 2000);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 1000);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 1000);
}
//this is Callback hell- when open browser is done, then we call a function and then i will call gotologinpage, when it is done ----so on 

//This is CALLBACK Hell 👇

openBrowser(function () {
    goToLoginPage(function () {
        enterCredentials(function () {
            clickLogin(function () {
                console.log("Test completed!");
            });
        });
    });

});

