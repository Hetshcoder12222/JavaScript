let score = 33;
console.log(typeof score);
console.log(typeof(score));

/*
    Sometimes we dont know type so we want to do typeof  
*/

let age = "33abc"
console.log(typeof age);
console.log(typeof(age));

let Value_In_Number = Number(age);
console.log(typeof Value_In_Number);
console.log(Value_In_Number);

// "33" → 33
// "33xxx" → NaN
// console.log("Value_In_Number");
// NaN → Not an Number

let run = 10
console.log(typeof run);
console.log(typeof(run));

let Value_of_Number = Number(run);
console.log(typeof Value_of_Number);
console.log(Value_of_Number);

let value3 = null;
console.log(typeof value3);
console.log(typeof(value3));

let Value_out_Number = Number(value3);
console.log(typeof Value_out_Number);
console.log(Value_out_Number);

// The output of null will be 0

let value4;
console.log(typeof value4);
console.log(typeof(value4));

let Value_on_Number = Number(value4);
console.log(typeof Value_on_Number);
console.log(Value_on_Number);

// The output of undefind will be NaN

let value5 = true
console.log(typeof value5);
console.log(typeof(value5));

let Value_under_Number = Number(value5);
console.log(typeof Value_under_Number);
console.log(Value_under_Number);

let value6 = false
console.log(typeof value6);
console.log(typeof(value6));

let Value_behind_Number = Number(value6);
console.log(typeof Value_behind_Number);
console.log(Value_behind_Number);

let value7 = "String"
console.log(typeof value7);
console.log(typeof(value7));

let Value_inside_Number = Number(value7);
console.log(typeof Value_inside_Number);
console.log(Value_inside_Number);

// The value of string will be NaN


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// The node will say its true

let isLoggedOut = 0

let booleanIsLoggedOut = Boolean(isLoggedOut)
console.log(booleanIsLoggedOut);

// The node will say its false

let isSignedIn = "yes"

let booleanIsSignedIn = Boolean(isSignedIn)
console.log(booleanIsSignedIn);

// The node will say its true

let isSignedOut = ""

let booleanIsSignedOut = Boolean(isSignedOut)
console.log(booleanIsSignedOut);

// The node will say its false

// 1 - true
// "xxxx" - true
// 0 - false
// "" - false

let stringTheNumber = 34

let stringNumber = String(stringTheNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// The stringTheNumber is now stringed