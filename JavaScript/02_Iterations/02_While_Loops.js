// 1. While loop example
let Value1 = 0;
while (Value1 <= 10) {
    Value1 = Value1 + 2;
    console.log(`Value1: ${Value1}`);
}
console.log("————————————————————————————————");
    
// 2. Array in a While Loop
let Value2 = [undefined, null, "String", 2, 9007199254740992n, true, false]
let Value3 = 0
while (Value3 < Value2.length) {
    console.log(`Value2[${Value3}]: ${Value2[Value3]}`);
    Value3 = Value3 + 1;
}