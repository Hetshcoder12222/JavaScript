const Name = "Hetsh"

// const:

// Scope: Block-scoped.
// Hoisting: Similar to let (with temporal dead zone).
// Reassignment: Not allowed.
// Redeclaration: Not allowed in the same block.
// Mutation: The object’s properties can be updated (but you cannot reassign the object itself).

let Age = 8

// let:

// Scope: Block-scoped (within {}).
// Hoisting: Happens, but you’re in a temporal dead zone until the declaration.
// Reassignment: Allows reassignment.
// Redeclaration: Not allowed in the same block.

var Class = "2"

// var:

// Scope: Func­tion or globally scoped.
// Hoisting: Happens with undefined (means you can use it before declaring).
// Reassignment: Allows reassignment.
// Redeclaration: Allows redeclaration in the same scope.

Section = "D"
let City;

// Name = "Prath" // not allowed
Age = 9
Class = "3"
Section = "A"

console.log(Name);
console.log(Age);
console.log(Class);
console.log(Section);
console.log(City);
console.table([Name, Age, Class, Section, City]);
                                                                                                           
// We cannot change the const so comment the const and again comment and write not allowed like above code ↑
// We can chane let and var
// Beginners do console.log(); again and again
// Pro use console.table(); to add multiple items

/*
    Prefer to do not use var, 
    Because of issue in functional scope and block scope.
*/