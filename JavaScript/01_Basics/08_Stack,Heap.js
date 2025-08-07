// Stack/Primitive

let value1 = "Value1"
let value2 = value1
value2 = "Value2"

console.log(value1);
console.log(value2);


// Heap/Reference

let value3 = {
    Name: "User1",
    Age: 19
}

let value4 = {
    Name: "User2",
    Age: 13
}

value3.Age = 20

console.log(value3);
console.log(value4);