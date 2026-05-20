console.log(c);          //----TDZ starts
console.log("Hei");
console.log("Hei");
console.log("Hei");
console.log("Hei");

let c = "Pramod";       //----TDZ ends
console.log(c);          //----Pramod

var c = "Pramod";       //----No TDZ, var is hoisted and initialized with undefined
console.log(c);          //----undefined    

const c = "Pramod";       //----TDZ starts

