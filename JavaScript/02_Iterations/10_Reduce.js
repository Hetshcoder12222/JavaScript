const Value1 = [1, 2, 3, 4]
const Value2 = 0
const Value3 = Value1.reduce( (accumilator, currentValue) => {
    console.log(`Accumilator: ${accumilator}`);
    console.log(`Current Value: ${currentValue}`);
    // return accumilator + currentValue, Value2
}, 1 );
console.log(Value3);
console.log("————————————————————————————————");