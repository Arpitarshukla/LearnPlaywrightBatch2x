
let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length); // solution:5 
console.log(browser); // solution: [ 'chrome', 'firefox', 'safari', 'opera', 'edge' ]

browser.pop(); // remove last element i.e 'edge'
console.log(browser);


let removed = browser.shift(); //shift will remove the first element only..
console.log(browser); //solution: [ 'firefox', 'safari', 'opera' ] 
console.log(removed);// Solution: chrome


//or use this way

//browser.shift(); // remove first element
//console.log(browser);


//How do you iterate over them: use for loop

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera is removed from the selenium!");
    }
}




