function add(a, b, c) {
    return a + b + c;
}

let num = [1, 2, 3];
// Spread operator is used to expand an array into individual elements. It is denoted by three dots (...).
console.log(add(...num)); // Spread operator is used to pass the elements of the array as individual arguments to the function. It will print 6 as the result of adding 1, 2 and 3.


// example 2-

let responseCodes = [200, 201, 404, 500];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}

console.log(hasError(...responseCodes)); //Solution :True---> Spread operator is used to pass the elements of the array as individual arguments to the function. It will return true as there are error codes (404 and 500) in the responseCodes array.


