// Singleton
// Object.create()


// Literals

// Literal 1.
const LValue1 = {
    LValue1: "LValue1",             // String
    LValue2: "LValue2@google.com",  // String
    LValue3: 100,                   // Number
    LValue4: false,                 // Boolean
    LValue5: 87698430783780545n,    // BigInt
    LValue6: undefined,             // Undefined
    LValue7: null,                  // Null
    LValue8: [1, 2, 3, 4, 5],       // Array
    LValue10: {
        LValue9_1: "LValue10_1",
        LValue9_2: 200
    }                               // Object
}

console.log("", LValue1.LValue1)     // Output: LValue1
console.log("", LValue1["LValue2"])  // Output: XXXXXXX

console.log("", LValue1.LValue1)      // Output: LValue1
// console.log("", LValue1[LValue2])  // Error: LValue2 is not defined

// Literal 2. String value that cannot be with "." / full stop
const LValue2 = {
    "LValue1": "LValue1",
}

// console.log("", LValue2."LValue1")  // Error: Unexpected string
console.log("", LValue2["LValue1"])  // Output: LValue1

// Literal 3. Symbol to Object
const LValue3 = {
    LValue1: Symbol("LValue1"),  // Not allowed
    [LValue1]: "LValue1"         // Symbol
}

// Literal 4. Representing Symbol
// console.log("", LValue3.LValue1)  // Not the Good way to access
console.log("", LValue3[LValue1])  // Output: LValue1

// Literal 5. .freeze
const LValue4 = {
    LValue1: "LValue1",
    LValue2: ""
}

LValue1.LValue2 = "LValue2@microsoft.com"
Object.freeze(LValue1)
LValue1.LValue2 = "LValue2@samsung.com"
console.log("", LValue1)  // Output: LValue2@microsoft.com

// Literal 6. .greeeting
const LValue5 = {
    LValue1: "LValue1",             // String
    LValue2: "LValue2@google.com",  // String
    LValue3: 100,                   // Number
    LValue4: false,                 // Boolean
    LValue5: 87698430783780545n,    // BigInt
    LValue6: undefined,             // Undefined
    LValue7: null,                  // Null
    LValue8: [1, 2, 3, 4, 5],       // Array
    LValue10: {
        LValue9_1: "LValue10_1",
        LValue9_2: 200
    }                               // Object
}

LValue5.greeting = function(){
    console.log("", "Hello, World!");
}

console.log("", LValue5.greeting);    // Output: Hello, World!
console.log("", LValue5.greeting());  // Output: Undefined


LValue5.greeting_two = function(){
    console.log("", `Hello, World!, ${this.LValue1}`);
}

console.log("", LValue5.greeting_two);    // Output: Hello, World!
console.log("", LValue5.greeting_two());  // Output: Undefined