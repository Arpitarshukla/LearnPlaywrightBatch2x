
const obj = { a: 1, b: 2, c: 3 };  // 3 keys: a,b,c and values 1,2,3

console.log(Object.keys(obj)); // sol: [ 'a', 'b', 'c' ] ---> we can get all the keys using Object.keys(obj)
console.log(Object.values(obj)); // sol: [ 1, 2, 3 ]       ---> we can get all the values
console.log(Object.entries(obj)); // sol: [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]  ---> we can get all the key values pairs


//To iterate over the keys                  ---- using this 
const user = { name: "John", age: 30 };

for (const key in user) {
    console.log(`${key}:${user[key]}`);
}

// another way --> Object.keys/values/entries ---- not going to use it
//Object.keys(user).forEach(key => {
//    console.log(key);
//});





