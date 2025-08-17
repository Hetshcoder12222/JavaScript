// 1. Set a map
const Value1 = new Map()
Value1.set('1.', "India")
Value1.set('2.', "Nepal")
Value1.set('3.', "Russia")
Value1.set('4.', "Israel")
Value1.set('5.', "United States of America")
Value1.set('6.', "United Kingdom")
console.log(Value1);

// Output:
/* 
Map(6) {
    '1.' => 'India',
    '2.' => 'Nepal',
    '3.' => 'Russia',
    '4.' => 'Israel',
    '5.' => 'United States of America',
    '6.' => 'United Kingdom'
}
*/

// 2. Again same Value
const Value2 = new Map()
Value2.set('1.', "India")
Value2.set('1.', "India") // Cannot print because only unique values
Value2.set('2.', "Nepal")
Value2.set('3.', "Russia")
Value2.set('4.', "Israel")
Value2.set('5.', "United States of America")
Value2.set('6.', "United Kingdom")
console.log(Value2);