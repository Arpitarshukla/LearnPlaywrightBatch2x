// JS == vs === : The Confusing Cases
// ==  : loose equality (coerces types)
// === : strict equality (no coercion)

console.log("========== TYPE COERCION with ==");
console.log(`0 == ''         : ${0 == ''}`);
console.log(`0 == '0'        : ${0 == '0'}`);
console.log(`'' == '0'       : ${'' == '0'}`);
console.log(`0 == false      : ${0 == false}`);
console.log(`'' == false     : ${'' == false}`);
console.log(`'0' == false    : ${'0' == false}`);
console.log(`1 == true       : ${1 == true}`);
console.log(`'1' == true     : ${'1' == true}`);
console.log(`' \t\r\n' == 0  : ${' \t\r\n' == 0}`);

console.log("\n========== null / undefined quirks ==");
console.log(`null == undefined  : ${null == undefined}`);
console.log(`null === undefined : ${null === undefined}`);
console.log(`null == 0          : ${null == 0}`);
console.log(`undefined == 0     : ${undefined == 0}`);
console.log(`null == false      : ${null == false}`);
console.log(`undefined == false : ${undefined == false}`);

console.log("\n========== NaN (never equal to anything) ==");
console.log(`NaN == NaN  : ${NaN == NaN}`);
console.log(`NaN === NaN : ${NaN === NaN}`);

console.log("\n========== Array / Object coercion ==");
console.log(`[] == ''     : ${[] == ''}`);
console.log(`[] == 0      : ${[] == 0}`);
console.log(`[] == false  : ${[] == false}`);
console.log(`[] == ![]    : ${[] == ![]}`);
console.log(`[] == []     : ${[] == []}`);
console.log(`[1] == 1     : ${[1] == 1}`);
console.log(`[1,2] == NaN : ${[1, 2] == NaN}`);
console.log(`[1] == [1]   : ${[1] == [1]}`);
console.log(`{} == {}     : ${{} == {}}`);
console.log(`{} == '[object Object]' : ${{} == '[object Object]'}`);

console.log("\n========== The classic false/string trap ==");
console.log(`false == 'false' : ${false == 'false'}`);
console.log(`false == '0'     : ${false == '0'}`);
console.log(`false == ''      : ${false == ''}`);

console.log("\n========== Strict equality (always safe) ==");
console.log(`0 === ''         : ${0 === ''}`);
console.log(`0 === '0'        : ${0 === '0'}`);
console.log(`0 === false      : ${0 === false}`);
console.log(`'' === false     : ${'' === false}`);
console.log(`null === undefined : ${null === undefined}`);
console.log(`NaN === NaN      : ${NaN === NaN}`);



// ========== QUICK INTERVIEW CHEATS ==========

//  ==  coerces types,  ===  does NOT
//  null == undefined -> TRUE   |   null === undefined -> FALSE
//  NaN is NEVER equal to anything, not even itself (use Number.isNaN())
//  [] == ![]  -> TRUE   ([] is truthy, ![] is falsy, both coerce to 0)
//  '' == 0   -> TRUE   |   '0' == 0   -> TRUE   |   '' == '0'   -> FALSE
//  Objects/Arrays compare by REFERENCE, not value:  {} !== {} ,  [] !== []
//  false == '0'     -> TRUE    |    false == 'false'     -> FALSE  (tricky!)
//  Whitespace-only strings coerce to 0:  '\\\\t\\\\n' == 0  -> TRUE
//  Non-primitives coerce via valueOf() then toString()
//  GOLDEN RULE: prefer  === ;  use  ==  only for  obj == null  (catches both)

