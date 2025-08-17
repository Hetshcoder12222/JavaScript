const Value1 = ["A", "B", "C", "D", "E"];
const Value2 = ["F", "G", "H", "I", "J"];

// Value1.push(Value2);
// console.log(Value1);

// Think Output: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]
// Real Output: [ 'A', 'B', 'C', 'D', 'E', [ 'F', 'G', 'H', 'I', 'J' ] ]

// Reason: push() method adds new items to the end of an array.
// It does not merge two arrays.
// It adds the second array as a single item to the first array.
//  Array takes all Datatypes also Datatype in Datatype in Datatype...

// console.log(Value1[5][1]); // Output: G

// Reason: Value1[5] is the second array and Value1[5][1] is the second element of the second array.
// Array indexing starts from 0.
// Array elements are also zero-indexed.

// 1. .concat
// Value1.concat(Value2);  // ❎❌✕
// console.log(Value1);    // ❎❌✕
// Think Output: [ 'A', 'B', 'C', 'D', 'E', [ 'F', 'G', 'H', 'I', 'J' ] ]
// Real Output: [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J' ]
// .concat takes a new array not a old array.
const Value3 = Value1.concat(Value2);
console.log("", Value3);
// Value3 is a new array which contains all elements of Value1 and Value2.

// 2. .flat
const Value4 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]]
const Value5 = Value4.flat(Infinity);  // range: 1 to Infinity
console.log("", Value5);

/*
Output: 
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9fcdvgrt2.js:55 - 02_Arrays2.js:40", 
]
*/

// 3. .isArray
console.log("", Array.isArray(Value1)); // Output: true
console.log(Array.isArray("xxxxx - 02_Arrays2.js:46")); // Output: false

// 4. .from
console.log(Array.from("xxxxx - 02_Arrays2.js:49")); // Output: [ 'x', 'x', 'x', 'x', 'x' ]

// 5. .of
const Value6 = 100
const Value7 = 200
const Value8 = 300
console.log("", Array.of(Value6, Value7, Value8)); // Output: 100 200 300

// 6. Intresting Interviews Case Question
console.log("", Array.from({name: "xxxxx"}));  // Empty Array  // Output: []