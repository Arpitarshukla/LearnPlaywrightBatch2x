let apiCall = new Promise(function (resolve, reject) {

    resolve({
        status: 200, body: "User data"
    })

});

apiCall.then(function (response) {  // then means succes or resolve --- 200 value is the response
    console.log(response.status);
})

//.then() runs ONLY when the promise resolves successfully.


