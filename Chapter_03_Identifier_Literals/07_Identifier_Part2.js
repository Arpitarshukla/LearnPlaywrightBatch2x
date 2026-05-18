var name='Pramod'; // Normal / lowercase

// ------ Camel Case (camelCase) ------
// standard for JS variables functions
var firstName='Pramod';
var lastName='Dutta';
var totalAmount=1000;

// ------ Snake Case (snake_case) ------
// Used for: variable names in Python, database columns, file names
var first_name='Amit';
var last_name='Dutta';
var account_balance=5000;

// ------ Pascal Case (PascalCase) ------
// Standard for JS class and constructors
var FirstName='Pramod';
var LastName='Dutta';
var TotalAmount=1000;

// ------ Screaming Snake Case (UPPER_CASE) ------
// Used for: constants
var TAX_RATE=0.18;
var MAX_LIMIT=100;
var PI_VALUE=3.14;

// ------ Hungarian Notation ------
// Used for: prefix indicates data type (str=string, int=integer, is=boolean, arr=array)
// Common in older systems, less used in modern JS
var strName='Pramod';    // str = string name
var intCount=10;         // int = integer count
var isLoggedIn=true;     // is = boolean
var arrItems=[1,2,3];    // arr = array items

// ------ Output Summary ------
console.log('--- Naming Convention Examples ---');
console.log('Camel Case :', firstName, lastName, totalAmount);
console.log('Snake Case :', first_name, last_name, account_balance);
console.log('Pascal Case :', FirstName, LastName, TotalAmount);
console.log('Screaming Snake :', TAX_RATE, MAX_LIMIT, PI_VALUE);
console.log('Hungarian :', strName, intCount, isLoggedIn, arrItems);

