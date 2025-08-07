// 1.

const Name = "Udhnawala Hetsh."
const Age = "8"

console.log(Name + Age + "I_am_a_boy");                  // ❎ // Old Way(Outdated)
console.log(`My name is ${Name} and my age is ${Age}`);  // ✅ // Modern Way

const Value1 = new String('Value1')

// 2.
console.log(Value1[0]);  // V
console.log(Value1[1]);  // a
console.log(Value1[2]);  // l
console.log(Value1[3]);  // u
console.log(Value1[4]);  // e
console.log(Value1[5]);  // 1
console.log(Value1[6]);  // Undefined
console.log(Value1.__proto__);

// 3. .Length

console.log(Value1.length);  // 6

// 4. .toUpperCase
console.log(Value1.toUpperCase());  // VALUE1

// 5. .charAt
console.log(Value1.charAt(0));
console.log(Value1.charAt(1));
console.log(Value1.charAt(2));
console.log(Value1.charAt(3));
console.log(Value1.charAt(4));
console.log(Value1.charAt(5));

// 6. .indexOf
console.log(Value1.indexOf('l'));

// 7. .substring
const Value2 = Value1.substring(0, 1);
console.log(Value2);
const Value3 = Value2.substring(1, 2);
console.log(Value3);
const Value4 = Value3.substring(1, 3);
console.log(Value4);
const Value5 = Value4.substring(3, 4);
console.log(Value5);
const Value6 = Value5.substring(4, 5);
console.log(Value6);
const Value7 = Value6.substring(2, 6);
console.log(Value7);

// 8. .slice
const Value8 = Value1.slice(-9, 3);
console.log(Value8);

// 9. .trim
const Value9 = "    Value9    "
console.log(Value9);
console.log(Value9.trim());

// 10. .replace
const Value10 = "https://www.youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y%20tRC5Q37"
/*10.1*/console.log(Value10.replace('%20', '-'));
/*10.2*/console.log(Value10);

// 11. .includes
console.log(Value10.includes(http));  // true
console.log(Value10.includes(org));   // false

// 12. .split
const Value12 = "Value12-is-Split"
console.log(Value12);
console.log(Value12.split('-'));