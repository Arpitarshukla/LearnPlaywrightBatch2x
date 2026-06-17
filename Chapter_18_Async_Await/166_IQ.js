//ex1
async function sayHello() {        //if marked async for the function
    return "Hello, QA!";
}

sayHello().then(function (msg) {       //it will become promise function
    console.log(msg);
});



//ex2

async function getStatus() {
    let status = await Promise.resolve(200);
    console.log("Status code:", status);
}

getStatus();


//ex3   -- sequential flow ---> mostly used in automation

async function testFlow() {
    let step1 = await Promise.resolve("Opened browser");
    console.log(step1);

    let step2 = await Promise.resolve("Clicked login");
    console.log(step2);

    let step3 = await Promise.resolve("Verified dashboard");
    console.log(step3);

}

testFlow();


// REMEMBER: Test will be parallel but commands will be always sequential --> run parallel can be done by using [T1,T2,T3] 

