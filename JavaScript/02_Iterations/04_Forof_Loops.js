const Value1 = [undefined, null, "String", 2, 9007199254740992n, true, false]

for (const Value2 of Value1) {
    console.log(Value2)
}

// 1. Greetings
const Value3 = "Value3 Greets you"
for (const Value4 of Value3) {
    console.log(`Greeting: ${Value4}`);
}

// 2. Forof Loop with Map
const Value5 = new Map()
Value5.set('1.', "India")
Value5.set('2.', "Nepal")
Value5.set('3.', "Russia")
Value5.set('4.', "Israel")
Value5.set('5.', "United States of America")
Value5.set('6.', "United Kingdom")
console.log(Value5);

for (const Value6 of Value5) {
    console.log(Value6);
}

// 3. Remove Array
const Value7 = new Map()
Value7.set('1.', "India")
Value7.set('2.', "Nepal")
Value7.set('3.', "Russia")
Value7.set('4.', "Israel")
Value7.set('5.', "United States of America")
Value7.set('6.', "United Kingdom")


for (const [Value8, Value9] of Value7) {
    console.log(Value8, Value9);
}
