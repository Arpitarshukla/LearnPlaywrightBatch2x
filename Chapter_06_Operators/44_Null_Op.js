// ??

console.log(null >= 0);     // null == 0 (true, loose compared ) or null > 0 (false) // OR gate
console.log(null === 0);


// ??  Nullish operator-------// in type script it is used as ? mark in java it is ?? mark//

let amul = "null";                   // checking of null, if amul is null then nandani is selected
let milk_required = amul ?? "nandani milk";  // if we select "amul present" in place of null then it will come
console.log(milk_required);


//val="which milk?->"+val;
//console.log(val)

//In playwright we are using typescript