const Value1 = {
    Value1: "Value1",
    Value2: 9007199254740991,
    Value3: true,
    Value4: false,
    Value5: 9007199254740992n,
    Value6: null,
    Value7: undefined,
    Value8: Symbol('Value7'),

    Value9: "Value9",
    Value10: 9007199254740991,
    Value11: true,
    Value12: false,
    Value13: 9007199254740992n,
    Value14: null,
    Value15: undefined,
    Value16: Symbol('Value16'),
}

const Value2 = {
    ValueOne: {
        Value2: {
            Value3: {
                Value4: "Value1"
            }
        }
    }
}


// console.log("", Value2.Value1.Value1.Value1.Value1);   // Not recommended to use this way / Not a Good code style
const {ValueOne} = Value2
console.log("", Value2);

const {ValueOne: name} = Value2
console.log("", Value2);