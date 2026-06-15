//A promise in JS's way of saying ---> I'll give you the result later-> either it'll succeed or fail


//Real life analogy: Your food on Zomato. The order is a Promise

// Pending: Food is being prepared -- not ready yeat
//Fulfilled (resolved) - food is delivered ✅
//Rejected - Order cancelled ❌

//example:

let order = new Promise(function (resolve, reject) {
    let foodready = true;
    if (foodready) {
        resolve("Pizza is delivered!. Food is ready. ");
    } else {
        reject("Order Cancelled because of rain. ");
    }
});

console.log(order);

//A promise is an object. it wraps a value that will be available later.


