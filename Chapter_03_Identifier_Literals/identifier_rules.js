// ========== RULE 1: Must start with letter, underscore, or dollar sign ==========

let name = "John";          // starts with letter
let _count = 10;            // starts with underscore
let $price = 99.99;         // starts with dollar sign
let firstName = "Jane";     // starts with letter (camelCase)

// let 1stPlace = "gold";   // ERROR: cannot start with digit


// ========== RULE 2: Subsequent chars can include digits ==========

let player1 = "Messi";
let item2nd = "box";
let rank3 = 3;

// let first-name = "hi";   // ERROR: hyphen not allowed
// let first name = "hi";   // ERROR: space not allowed


// ========== RULE 3: Cannot be a reserved keyword ==========

// let let = 5;             // ERROR: 'let' is a keyword
// let if = true;           // ERROR: 'if' is a keyword
// let for = 1;             // ERROR: 'for' is a keyword
// let return = "x";        // ERROR: 'return' is a keyword

let _let = 5;               // OK: underscore prefix avoids keyword conflict
let _if = true;
let $return = "x";


// ========== RULE 4: Case-sensitive ==========

let city = "New York";
let City = "London";
let CITY = "Tokyo";

console.log(city);          // "New York"
console.log(City);          // "London"  (different from city)
console.log(CITY);          // "Tokyo"   (different from both)


// ========== RULE 5: No spaces or special characters (except _ and $) ==========

let myVar = 1;              // OK
let my_var = 2;             // OK (underscore)
let my$var = 3;             // OK (dollar sign)

// let my var = 4;          // ERROR: space
// let my-var = 5;          // ERROR: hyphen
// let my@var = 6;          // ERROR: @
// let my#var = 7;          // ERROR: #
// let my.var = 8;          // ERROR: dot


// ========== Put it all together: valid examples ==========

let $ = "dollar alone";
let _ = "underscore alone";
let __proto__ = "dunder";
let $$ = "double dollar";
let _$$ = "mix";
let validIdentifier123 = "works";
