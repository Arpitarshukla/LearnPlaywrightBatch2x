//How to do this

//*          R1   -----> //n=3 (n=row)   
//* *        R2
//* * *      R3    --------> make indexes in the grid---> 0,0 has * 1,0 and 1,1 has * then 2,0 2,1 and 2,2 has * others places are blank

let n = 4;

for (let i = 1; i <= n; i++) {   //(row are 3 hence and starting from 1)
    let row = " ";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row.trim());  // trim is just a safeguard
}


