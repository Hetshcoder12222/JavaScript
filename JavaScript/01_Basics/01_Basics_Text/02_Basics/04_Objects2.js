// const CValue1 = new Object()
// console.log("", CValue1);  // Same output as Literals: {}
                                                            // Or
const CValue1 = {}                               // Literal
console.log("", CValue1);  // Output: {}  // Literal

// Constructor 1. Entering a Object
CValue1.name = "Sam"
CValue1.age = 30
CValue1.email = "Sammy@google.com"
CValue1.number = 9857212379576914n
CValue1.nameIsSam = true

// Constructor 2. Entering a Object in a Object in a...
const CValue2 = {
    CValue1: "CValue1",
    CValue2: {
        CValue1: "CValue1",
            CValue2: {
            CValue1: "CValue1",
                CValue2: {
                CValue1: "CValue1",
            }
        }
    }
}

// console.log("", CValue2); :
console.log("", CValue2);
console.log("", CValue2[CValue2]);
console.log("", CValue2[CValue2[CValue2]]);
console.log("", CValue2[CValue2[CValue2[CValue2]]]);
                                                        // Or
// console.log(CValue2);
// console.log(CValue2.CValue2);
// console.log(CValue2.CValue2.CValue2);
// console.log(CValue2.CValue2.CValue2.CValue2);

// Constructor 3. ?
console.log("", CValue2.CValue2?.CValue2);
/* 

    Output: 
    undefined
    undefined
    undefined
    { CValue1: 'CValue1', CValue2: { CValue1: 'CValue1' } }

*/

// Constructor 4. Joining like a Array
const CValue3 = {1: "a", 2: "b"}
const CValue4 = {3: "c", 4: "d"}
// const CValue5 = {CValue3, CValue4}
const CValue5 = Object.assign(CValue3, CValue4)
const CValue6 = Object.assign({}, CValue3, CValue4)
                                                 // Or
const CValue7 = {...CValue3, ...CValue4, /**/}
console.log("", CValue5);
console.log("", CValue6);
console.log("", CValue7);

// Constructor 5. Joining a Array with a Object
const CValue8 = {
    CValue1: "CValue1",
    CValue2: {
        CValue1: "CValue1",
            CValue2: {
            CValue1: "CValue1",
                CValue2: {
                CValue1: "CValue1",
            }
        }
    }
}

const CValue9 = [
    {
        name: "Sam",
        age: 30,
        email: "SammysEmail@google.com"
    },
    {
        name: "Sam",
        age: 30,
        email: "SammysEmail@google.com"
    },
    {
        name: "Sam",
        age: 30,
        email: "SammysEmail@google.com"
    },
    {
        name: "Sam",
        age: 30,
        email: "SammysEmail@google.com"
    }
]

CValue9[1].email
console.log("", CValue8);
console.log("", Object.keys(CValue8));
console.log("", Object.values(CValue8));
console.log("", Object.entries(CValue8));

// Constructor 6. Does it is Existed
console.log("", CValue9.hasOwnProperty('CValue1'));