for (let Value1 = -10; Value1 < 10; Value1++){
    const Value2 = Value1;
    console.log(Value2);
}
console.log("————————————————————————————————");

// 1. For Loop with IFELSE
for (let Value3 = 0; Value3 < 10; Value3++){
    const Value4 = Value3;
    if (Value4 === 3) {
        console.log("3 = The quarter complete but 0.5 more.");
    }
    if (Value4 === 5) {
        console.log("5 = The half complete");
    }
    if (Value4 === 8) {
        console.log("8 = The quarter remaining but 0.5 more.");
    }
    console.log(Value4);
}

console.log("————————————————————————————————");

// 2. Loop in a Loop in a Loop in a...
/*

for (let Value5 = 0; Value5 < 10; Value5++) {
    for (let Value6 = 0; Value6 < 10; Value6++) {
        for (let Value7 = 0; Value7 < 10; Value7++) {
            for (let Value8 = 0; Value8 < 10; Value8++) {
                const Value9 = Value5;
                console.log(Value9);
            }
        }
    }
}

*/

for (let Value5 = 0; Value5 < 11; Value5++) {
    // console.log(`Outer core Value: ${Value5}`);
    console.log(`Table: ${Value5}`);
    for (let Value6 = 1; Value6 < 11; Value6++) {
        // console.log(`Inner core Value: ${Value6} and Inner core: ${Value5}`);
        console.log(Value5 + " × " + Value6 + " = " + Value5 * Value6);
    }
}
console.log("————————————————————————————————");

// 3. Array's Loop
const Value7 = [undefined, null, "String", 2, 9007199254740992n, true, false]
// for (let Value8 = 0; Value8 <= Value7.length; Value8++) {  // Output: *The items in the array*, undefind
for (let Value8 = 0; Value8 < Value7.length; Value8++) {      // Output: *The items in the array*
    const Value9 = Value7[Value8];
    console.log(Value9);
}
console.log(Value7.length);  // 7
console.log("————————————————————————————————");



// break    - Statement that is used inside loops (such as for, while, or do...while) to immediately stop the loop's execution and exit out of it, regardless of the loop's condition.
// continue - Statement in a for loop that is used to skip the current iteration and move directly to the next iteration of the loop.
           // It doesn’t stop the loop entirely (like break does); instead, it just tells the loop: "skip the rest of this round and go to the next one."

// 4. Break
for (let Value10 = 1; Value10 < 11; Value10++) {
    if (Value10 === 5) {
        console.log(`Error: ${Value10}`)
        break
    }
    console.log(Value10);
}
console.log("————————————————————————————————");

// 5. Continue
for (let Value12 = 1; Value12 < 11; Value12++) {
    if (Value12 === 5) {
        console.log(`Error: ${Value12}`)
        continue
    }
    console.log(Value12);
}