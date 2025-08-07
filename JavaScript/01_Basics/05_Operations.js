let value = 1
let negativevalue = -value
console.log(negativevalue);



console.log(2 + 2); // Addition      // Output: 4
console.log(2 - 2); // Subtraction      // Output: 0
console.log(2 * 2); // Multiplication      // Output: 4
console.log(2 ** 3); // Exponentiation      // Output: 8
console.log(2 / 3); // Division      // Output: 0.6666666666666666
console.log(2 % 3); // Modulus      // Output: 2



let str1 = "str1 +"
let str2 = " str2"

let str3 = str1 + str2
console.log(str3);

// To join the words write the above code
 
console.log("1" + 2); // Output: 12
console.log(1 + "2"); // Output: 12
console.log("1" + 2 + 2); // Output: 122
console.log(1 + 2 + "2"); // Output: 32
console.log("1" + "2"); // Output: 12

console.log(+true);  // 1 → true
console.log(true);  // true
console.log(typeof true);  // true → boolean

console.log(+"");  // 0 → false
console.log(false);  // false
console.log(typeof false);  // false → boolean



let num1, num2, num3
num3 = num2 = num1 = 2 + 2 
// meaning: 
// num1 is same as num2.
// num2 is same as num3.
// num3 is known as 2 + 2
console.log(num3);

let value1 = 100
value1++; // 1 more add 
console.log(value1);

let value2 = 100
++value2; // 1 more add 
console.log(value2);



// prefix and postfix:

let x = 3; // 5
const y  = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// link to study
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment