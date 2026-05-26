
let a = 10;

//while (a < 10) {
//  console.log(a);
//a++;
//}                      // result is not printed because of no output


//-------------for the above declared variable, "do while" works in place of "while"

do {
    console.log(a);    //10 will be printed
    a++;               // value is increased
} while (a < 10);       // then value will be checked
// means one time we'll execute the value i.e 10.

//------Do while always execute atleast minimum one Time.

//-----always used in automation as a flaky test trial.