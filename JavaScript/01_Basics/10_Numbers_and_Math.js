/* ←————————————————————→ Number ←————————————————————→ */

// 1.
const Value1 = 100
const Value2 = new Number(100)
console.log(Value1);  // Expected Output: 100            // Only saying its 100 / One Hundred.
console.log(Value2);  // Expected Output: [Number: 100]  // Saying that 100 / One Hundred is a number.

// 2. .length
const Value3 = 100
console.log(Value2.length);         // 3
console.log(typeof Value2.length);  // 3

// 3. .toString
const Value4 = 100
console.log(Value3.toString());                // String
console.log(typeof Value3.toString());         // String

// 4. .toFixed
const Value5 = 100
console.log(Value4.toFixed(0));  // 100
console.log(Value4.toFixed(1));  // 100.0
console.log(Value4.toFixed(2));  // 100.00
console.log(Value4.toFixed(3));  // 100.000
console.log(Value4.toFixed(4));  // 100.0000
console.log(Value4.toFixed(5));  // 100.00000

// 5. .toPrecision
const Value6 = 100
// console.log(Value6.toPrecision(0));  // Not Allowed  // 1 - 100 / One to One Hundred
console.log(Value6.toPrecision());  // 1e+2
console.log(Value6.toPrecision(2));  // 1.0e+2
console.log(Value6.toPrecision(3));  // 100
console.log(Value6.toPrecision(4));  // 100.0
console.log(Value6.toPrecision(5));  // 100.00

// 6. .toLocaleString
const Value7 = 1000000000
console.log(Value7.toLocaleString('en-IN'));  // Automatic , / commas in Numbers



/* ←————————————————————→ Maths{In JavaScript} ←————————————————————→ */

// 7. .abs
console.log(Math);
// /*7.1*/console.log(Math.abs(-4));
// /*7.2*/console.log(Math.abs(4));

// 8. .round
/*8.01*/console.log(Math.round(4.0)); // Output: 4
/*8.02*/console.log(Math.round(4.1)); // Output: 4
/*8.03*/console.log(Math.round(4.2)); // Output: 4
/*8.04*/console.log(Math.round(4.3)); // Output: 4
/*8.05*/console.log(Math.round(4.4)); // Output: 4
/*8.06*/console.log(Math.round(4.5)); // Output: 5
/*8.07*/console.log(Math.round(4.6)); // Output: 5
/*8.08*/console.log(Math.round(4.7)); // Output: 5
/*8.09*/console.log(Math.round(4.8)); // Output: 5
/*8.10*/console.log(Math.round(4.9)); // Output: 5
/*8.11*/console.log(Math.round(5.0)); // Output: 5

// 9. .ceil
console.log(Math.ceil(4.0));  // Output: 4
console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.ceil(4.2));  // Output: 5
console.log(Math.ceil(4.3));  // Output: 5
console.log(Math.ceil(4.4));  // Output: 5
console.log(Math.ceil(4.5));  // Output: 5
console.log(Math.ceil(4.6));  // Output: 5
console.log(Math.ceil(4.7));  // Output: 5
console.log(Math.ceil(4.8));  // Output: 5
console.log(Math.ceil(4.9));  // Output: 5
console.log(Math.ceil(5.0));  // Output: 5


// 10. .floor
console.log(Math.floor(4.0));  // Output: 4
console.log(Math.floor(4.1));  // Output: 4
console.log(Math.floor(4.2));  // Output: 4
console.log(Math.floor(4.3));  // Output: 4
console.log(Math.floor(4.4));  // Output: 4
console.log(Math.floor(4.5));  // Output: 4
console.log(Math.floor(4.6));  // Output: 4
console.log(Math.floor(4.7));  // Output: 4
console.log(Math.floor(4.8));  // Output: 4
console.log(Math.floor(4.9));  // Output: 4
console.log(Math.floor(5.0));  // Output: 5

// 11. .min
console.log(Math.min(1, 2, 3, 4));

// 12. .max
console.log(Math.max(100, 200, 300, 400));

// 13. .random
/*13.1*/console.log(Math.random());      // 0 - 1 / Zero to One
/*13.2*/console.log(Math.random()*100);  // 0 - 100 / Zero to Hundred

// 13. To avoid 0
/*13.2*/console.log(Math.random()*100 + 1);  // 0 - 100 / Zero to Hundred

// 13. To avoid like 0.794586927
/*13.2*/console.log(Math.floor(Math.random()*100) + 1);  // 0 - 100 / Zero to Hundred

// 11, 12.(Merge) .min and .max
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - max + 1)) + min);