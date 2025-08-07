// const Value1 = []  // Array literal / Array initializer
// const Value2 = {}  // Scopes
// const Value3 = ()  // Brackets / Parentheses

const Value1 = [0, 1, 2, 3, 4, 5]                                                                              // Number
const Value2 = ["Value2"]                                                                                      // String
const Value3 = [undefined]                                                                                     // Undefined
const Value4 = [null]                                                                                          // Null(Object){Empty Value}[Not zero]
const Value5 = [9994059038083881n]                                                                             // BigInt
const Value6 = [true]                                                                                          // Boolean
const Value7 = [false]                                                                                         // Boolean
const Value8 = [Symbol('a')];                                                                                  // Symbol
// const Value9 = [0, 1, 2, 3, 4, 5, "Value3", undefined, null, 675496598360749778n, true, false, Symbol('xxx')]  // Mixed

// console.log(Value1);  // Not for Arrays
console.log(Value1[0]);  // For Arrays


/* Methods */

// 1. .push
Value1.push(6)
Value1.push(7)
console.log(Value1);

// 2. .pop
const Value9 = [1, 2, 3, 4, 5, 6]
Value9.pop()
console.log(Value9);

// 3. .shift
const Value10 = [1, 2, 3, 4, 5, 6]
Value10.unshift(0)
console.log(Value10);

// 4. .shift
const Value11 = [1, 2, 3, 4, 5, 6]
Value11.shift(7)
console.log(Value11);



 // Questions Methods

// 1. .includes
console.log(Value11.includes(2));  // true   // [ [2], 3, 4, 5, 6 ]
console.log(Value11.includes(1));  // false  // [ 2, 3, 4, 5, 6 ]❌❎
console.log(Value11.includes(9));  // false  // [ 2, 3, 4, 5, 6 ]

// 2. .indexOf
const Value12 = [0, 4, 2, 5, 1, 3]
console.log(Value12.indexOf(4)); // 1   // In Value12        // [0, 4, 2, 5, 1, 3]  // Value12
console.log(Value12.indexOf(9)); // -1  // Not in Value12    // [0, 1, 2, 3, 4, 5]  // Place{In JavaScript}

// 3. .join
const Value13 = Value12.join()
console.log(Value12);         // [ 0, 4, 2, 5, 1, 3 ]
console.log(Value13);         // 0,4,2,5,1,3
console.log(typeof Value12);  // Object
console.log(typeof Value13);  // String

// 4. .slice
const Value14 = Value12.slice(1, 4)
console.log(Value14);
console.log("A ", Value14);

// 5. .splice
const Value15 = Value14.splice(1, 3)
console.log(Value15);
console.log("B ", Value15);