
let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying....", retry);
    retry++;
} while (retry < 3);                    // 0,1 and 2 it will run automatically

//---- while using playwright automation---this code is for finding a particular locator