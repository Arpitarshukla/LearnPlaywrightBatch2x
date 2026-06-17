//This can be parallel in this case

function apiCall(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name, "200 Ok")
        }, 2000);
    })
}                         //this becomes automatically async function as it returns a promise

async function parallelTest() {

    let [r1, r2, r3] = await Promise.all([

        apiCall("Auth Service"),
        apiCall("User Account Creation"),
        apiCall("Support Page API")

    ])

    console.log(r1);
    console.log(r2);
    console.log(r3);
}

parallelTest();        //Promise.all means they all should finish when and how it is finished doesn't matter 

//Promise.all is the way to run
//If somthing is fail then we can use Promise.allSettled.. everything should come