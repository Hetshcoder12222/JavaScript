// Symbol
// Symbol is a primitive data type in JavaScript that represents a unique identifier.

let id = Symbol("123");
let anotherid = Symbol("123");

// console.log(id === anotherid); // false

// This is because each time you create a new Symbol, it is unique, even if the description is the same.
// The description is just for debugging purposes and does not affect the uniqueness of the Symbol.

// bigInt
// BigInt is a built-in object that provides a way to represent whole numbers larger than 2^53 - 1.
let bigInt = BigInt(1234567890123456789012345678901234567890n);
// You can also create a BigInt by appending 'n' to the end of an integer literal.
let bigInt1 = 1234567890123456789012345678901234567890n;
// You can also create a BigInt from a string.
let bigInt2 = BigInt("1234567890123456789012345678901234567890");

// console.log(bigInt); // 1234567890123456789012345678901234567890n
// console.log(bigInt1); // 1234567890123456789012345678901234567890n
// console.log(bigInt2); // 1234567890123456789012345678901234567890n

// You can perform arithmetic operations on BigInts just like you would with regular numbers.
// However, you cannot mix BigInts and regular numbers in arithmetic operations.
// For example, the following code will throw a TypeError:
// let result = bigInt + 1; // TypeError: Cannot mix BigInt and other types, use explicit conversions
// To perform arithmetic operations with BigInts, you need to convert the regular number to a BigInt first.
let result = bigInt + BigInt(1); // 1234567890123456789012345678901234567891n
// console.log(result); // 1234567890123456789012345678901234567891n

// You can also convert a BigInt to a regular number using the Number() function.
let regularNumber = Number(bigInt); // 1.2345678901234567e+36
// console.log(regularNumber);
// 1.2345678901234567e+36
// However, be careful when converting a BigInt to a regular number, as you may lose precision if the BigInt is too large.

// Objects

// Objects are a collection of key-value pairs.
// In JavaScript, objects are mutable, meaning you can change their properties and values after they are created.
let person = {
  name: "Prath",
  age: 10,
  isLoggedIn: false,
};
// You can access the properties of an object using dot notation or bracket notation.
console.log(person.name); // Prath
// console.log(person["age"]); // 10
// You can also add new properties to an object or change the values of existing properties.
person.isLoggedIn = true;
console.log(person.isLoggedIn); // true
// You can also delete properties from an object using the delete operator.
delete person.age;
console.log(person.age); // undefined
// You can also use the Object.keys() method to get an array of the keys of an object.

// Arrays

// Arrays are a special type of object in JavaScript that are used to store ordered collections of values.
let heros = ["superman", "batman", "spiderman", "ironman", "hulk"];
// You can access the elements of an array using their index, which starts at 0.
console.log(heros[0]); // superman
// You can also add new elements to an array using the push() method.
heros.push("thor");
console.log(heros); // ["superman", "batman", "spiderman", "ironman", "hulk", "thor"]
// You can also remove elements from an array using the pop() method.
heros.pop();
console.log(heros); // ["superman", "batman", "spiderman", "ironman", "hulk"]
// You can also use the splice() method to add or remove elements from an array at a specific index.
heros.splice(2, 1, "blackpanther");
console.log(heros); // ["superman", "batman", "blackpanther", "ironman", "hulk"]
// You can also use the slice() method to create a new array that is a subset of an existing array.
let newHeros = heros.slice(1, 3);
console.log(newHeros); // ["batman", "blackpanther"]
// You can also use the map() method to create a new array by applying a function to each element of an existing array.
let newHeros1 = heros.map((hero) => {
  return hero.toUpperCase();
});
console.log(newHeros1); // ["SUPERMAN", "BATMAN", "BLACKPANTHER", "IRONMAN", "HULK"]

// functions

// Functions are a block of code that can be called and executed when needed.
// You can define a function using the function keyword, followed by the name of the function and parentheses.
function greet(name) {
  console.log("Hello " + name);
}
// You can call a function by using its name followed by parentheses.
greet("Prath"); // Hello Prath
// You can also define a function using an arrow function syntax.
const greet1 = (name) => {
  console.log("Hello " + name);
};
greet1("Prath"); // Hello Prath
// You can also define a function that returns a value using the return keyword.
function add(a, b) {
  return a + b;
}
// You can call the function and store the result in a variable.
let result1 = add(2, 3);
// console.log(result1); // 5
// You can also define a function that takes another function as an argument.
function calculate(a, b, operation) {
  return operation(a, b);
}
// You can pass a function as an argument to another function.
let result2 = calculate(2, 3, add);
// console.log(result2); // 5