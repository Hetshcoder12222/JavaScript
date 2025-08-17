const Value1 = [1, 2, 3,4, 5, 6, 7, 8, 9, 10]
const Value2 = Value1.map( (V1) => {
    return V1 + 10
} );
console.log(Value2);
// Output:
/*
[
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
]
*/

// Analysis:
/*
    1 + 10 = 11
    2 + 10 = 12
    3 + 10 = 13
    4 + 10 = 14
    5 + 10 = 15
    6 + 10 = 16
    7 + 10 = 17
    8 + 10 = 18
    9 + 10 = 19
    10 + 10 = 20
*/

// 1. Chaining
/*
   const Value3 = Value1.map().map().map().map().map()
   const Value4 = Value1.map().filter().map().filter().map()
   const Value5 = Value1.filter().filter().filter().filter().filter()
*/

// 2. Chaining Value
const Value3 = Value1.map( (V2) => V2 * 10 )
                     .map( (V2) => V2 + 1 )
                  .filter( (V2) => V2 >= 50 )
console.log(Value3);