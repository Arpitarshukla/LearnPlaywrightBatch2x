// JavaScript supports these number bases and types:

// 1. Decimal (Base 10) - no prefix
let decimal1 = 42;
let decimal2 = 100;

// 2. Binary (Base 2) - prefix 0b
let binary1 = 0b1010; // decimal 10
let binary2 = 0b1111; // decimal 15

// 3. Octal (Base 8) - prefix 0o
let octal1 = 0o755; // decimal 493
let octal2 = 0o123; // decimal 83

// 4. Hexadecimal (Base 16) - prefix 0x
let hex1 = 0xFF; // decimal 255
let hex2 = 0x1A; // decimal 26

// 5. Floating-point numeric literals
let float1 = 3.14; // decimal floating-point
let float2 = 0.5; // decimal floating-point
let exp1 = 1.5e10; // exponential notation (15000000000)
let exp2 = 2.5e-3; // exponential notation (0.0025)

// 6. BigInt - suffix n (arbitrary precision)
let bigInt1 = 9007199254740991n;
let bigInt2 = 12345678901234567890n;

// 7. Numeric separator (ES2021) - underscore _ for readability
let sepDecimal = 1_000_000; // 1000000
let sepBinary = 0b1010_1011; // decimal 171
let sepOctal = 0o755_123; // decimal 252371
let sepHex = 0xFF_FF; // decimal 65535
let sepBigInt = 1_000_000_000_000n; // BigInt with separator
let sepFloat = 1_234.567_89; // decimal floating-point

// 8. Special numeric values
let infinity1 = Infinity;
let infinity2 = -Infinity;
let nan1 = NaN;
let nan2 = Number.NaN;

// 9. Signed numbers
let positive1 = +100;
let positive2 = +42;
let negative1 = -100;
let negative2 = -42;

// Type checks
console.log(typeof decimal1); // "number"
console.log(typeof binary1); // "number"
console.log(typeof octal1); // "number"
console.log(typeof hex1); // "number"
console.log(typeof float1); // "number"
console.log(typeof exp1); // "number"
console.log(typeof bigInt1); // "bigint"
console.log(typeof infinity1); // "number"
console.log(typeof nan1); // "number"

// Print values
console.log("decimal  42     =", decimal1);
console.log("decimal  100    =", decimal2);
console.log("binary 0b1010   =", binary1); // 10
console.log("binary 0b1111   =", binary2); // 15
console.log("octal 0o755     =", octal1); // 493
console.log("octal 0o123     =", octal2); // 83
console.log("hex   0xFF      =", hex1); // 255
console.log("hex   0x1A      =", hex2); // 26
console.log("float 3.14      =", float1);
console.log("float 0.5       =", float2);
console.log("exp   1.5e10    =", exp1); // 15000000000
console.log("exp   2.5e-3    =", exp2); // 0.0025
console.log("bigInt1         =", bigInt1);
console.log("bigInt2         =", bigInt2);
console.log("sep 1_000_000   =", sepDecimal);
console.log("sep 0b1010_1011 =", sepBinary);
console.log("sep 0xFF_FF     =", sepHex);
console.log("sep 1_234.567_89 =", sepFloat);
console.log("sep 1_000_000_000_000n =", sepBigInt);
