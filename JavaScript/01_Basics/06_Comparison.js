console.log(2 > 1);    // true    // greater than
console.log(2 >= 1);   // true    // greater than or equal to
console.log(1 < 2);    // true    // less than
console.log(1 <= 2);   // true    // less than or equal to
console.log(2 == 2);   // true    // equal to
console.log(2 != 1);   // true    // not equal to
 
// The real problems.
// This cannot gives us a predictable result.
console.log("2" > 1);
console.log("02" > 1);

// 1.
console.log(null > 0);  // false
console.log(null >= 0); // true
console.log(null < 0);  // false
console.log(null <= 0); // true
console.log(null == 0); // false
console.log(null != 0); // true

// 2.
console.log(undefined > 0); 
console.log(undefined >= 0);
console.log(undefined < 0); 
console.log(undefined <= 0);
console.log(undefined == 0);
console.log(undefined != 0);

console.log("0" == 0);   // true
console.log("0" === 0);  // false
console.log(0 == 0);     // true
console.log(0 === 0);    // true