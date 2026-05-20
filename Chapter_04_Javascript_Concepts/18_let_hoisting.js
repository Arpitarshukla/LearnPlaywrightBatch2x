console.log(score); // ReferenceError: Cannot access 'score' before initialization
let score = 100;

// Explanation:
// In JavaScript, variables declared with 'let' are hoisted to the top of their block scope,
// but they are not initialized until the line of code where they are defined is executed.
// This means that if you try to access a 'let' variable before it has been initialized, you will get a ReferenceError.
// In this example, we are trying to log the value of 'score' before it has been initialized, which results in the error.


{
    //------TDZ (Temporal Dead Zone) for "score" starts here----
    //console.log(score);            // ReferenceError: Cannot access 'score' before initialization
    //score=50;                      // ReferenceError
    // typeof score;                 // ReferenceError
    // -----TDZ for "score" ends here-----
    let score = 100;              // Declaration reached, TDZ ends
    console.log(score);        // 100 (safe to access now)
}
