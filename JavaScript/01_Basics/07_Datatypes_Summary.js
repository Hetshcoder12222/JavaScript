let Value1 = 9007199254740991 // Number

let Value2 = 1.1 // Number

let Value3 = true // Boolean

let Value4 = false // Boolean

let Value5 = null // Null

let Value6; // Undefined

let Value7 = "String" // String

let Value8 = 9007199254740992n // BigInt

let Value8_v2 = BigInt(9007199254740993n) // BigInt

let ID = Symbol("123") // Symbol

let ID_v2 = Symbol("123") // Symbol

let ID_vs = Symbol('123') // Symbol

let ID_v2s = Symbol('123') // Symbol

console.log(ID === ID_v2);
console.log(ID_vs === ID_v2s);



// Non-Primitive

// Object:

let Myself = {
    name: "Hetsh", 
    age: 8, 
    dream: "Hiring_in_Google"
}

console.log(Myself);


// Array:

const heros = ["Niraliwoman", "Hackerman", "Dil-ka-chain-chori-karne-wala-Spiderman"];

console.log(heros);


// Function:

const Function = function(){
    
}