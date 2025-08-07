"use strict"; // Treat all JavaScript as newer version

// alert(1 + 1)

// Node.js is not Browsers
// Node.js do not supports Browsers

/*
   Inspect, go on console and write "alert(1 + 1)"
   The Browser says 2
   We are node.js not browser
*/

console.log(1 + 1); console.log("JavaScript");

/*
   Do not do like the above,
   Files and folders need readiblity.
   Like the given below code:
*/

console.log(1 + 1);
console.log("JavaScript");



// Datatypes:

let name = "Hetsh"                                          // String - "xxxxx"
let age = 9                                                 // Number - 1 - power 53/1 - 9007199254740992
let Is_Logged_in = true                                     // Bolean - true/false
let Is_Logged_out = false                                   // Bolean - true/false
let city;                                                   // Undefined - let xxxxx;
let state = null;                                           // Null - let xxxxx = null;
let mobile_Number = 70691706557096570925n                   // BigInt - 9007199254740993 to ∞n
console.log(typeof true);

                      // types                                                 |          // examples

// String - Sequence of characters (text)	                                     |       "Hello", 'JS'
// Number - Represents numeric values (both integers & floats)	                |       42, 3.14, -7
// Boolean - Represents true or false	                                        |       true, false
// Undefined - A variable that has been declared but not assigned a value	    |       let x; → undefined
// Null - Represents intentional absence of value	                            |       let y = null;
// BigInt - For large integers beyond 2-53 - 1	                               |       123456789012345678901234567890n
// Symbol - Unique and immutable identifier                                    |       Symbol('id')

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof "xxxxx");
console.log(typeof 12);
console.log(typeof 9007199254740993n);
console.log(typeof true);
console.log(typeof false);
console.log(typeof age);