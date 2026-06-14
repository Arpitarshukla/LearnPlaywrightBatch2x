function print() {
    console.log("Normal function");
}


function placeOrder(ClipboardItem, pramodcallback) {    ///callback is just a variable name.. it can be anything
    console.log("Hi, You order is place");
    pramodcallback();
}

//Ways for calling the function

// First Way

placeOrder("Pizza", print);



//Second Way - Anonymous function - don't have to give the name

placeOrder("Burger", function () {
    console.log("Anoy Fn, I am also a function without name!");
});


//Third way- Arrow function -- doesn't have name using arrow fn

placeOrder("Momos", () => {
    console.log("Anoy Fn, I am also a function without name!");
});


//callback fn will be called in the end and works like---call me when you are done

//Playwright mostly uses  arrow function with async














