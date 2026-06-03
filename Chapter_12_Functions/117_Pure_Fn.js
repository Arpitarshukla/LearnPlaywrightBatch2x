// Pure function
//a pure function always returns the same output for the same input and has no side effects.

// example: Pure----> no side effects, predictable output

function calculatePassRate(total, passed) {
    return ((passed / total) * 100).toFixed(2);   ///to fixed means a decimal like .00
}

console.log(calculatePassRate(10, 7));
console.log(calculatePassRate(10, 7));


//example:Impure- depends on external state

function isPassing(score) {
    return score >= threshold;   //depends on external variable
}

let threshold = 70;
console.log(isPassing(threshold));

threshold = 50;
console.log(isPassing(threshold));


// This is true but values are diff when threshold is changed 70 to 50.


