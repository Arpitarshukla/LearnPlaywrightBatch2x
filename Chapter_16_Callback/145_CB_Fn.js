function cafe(item, callWhenTableisReady) {
    console.log("Finding...1");
    console.log("Finding...2");
    console.log("Finding...3");
    console.log(item)
    callWhenTableisReady();
}

function callWhenTableisReady() {
    console.log("Calling 9876543210");
}


//First way
cafe("Burger", callWhenTableisReady);

//second way
cafe("Pizza", function () {
    console.log("calling 876594256");
})

//third way
cafe("Momos", () => {
    console.log("calling 876594256");
});



