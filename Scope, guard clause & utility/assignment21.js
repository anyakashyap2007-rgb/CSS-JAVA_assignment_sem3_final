
/* Assignment 21: Scope and Hoisting */

// Question 1: Block Scope
console.log("1. Block Scope");

let x = 10;

{
    let x = 20;
    console.log("Inside block:", x);
}

console.log("Outside block:", x);


// Question 2: var vs let
console.log("\n2. var vs let");

if (true) {
    var a = 5;
    let b = 10;

    console.log("Inside block - b:", b);
}

console.log("Outside block - a:", a);
// b is not accessible outside the block


// Question 3: Hoisting with var
console.log("\n3. Hoisting with var");

console.log("Before declaration:", num);
var num = 15;
console.log("After declaration:", num);


// Question 4: Hoisting with let
console.log("\n4. Hoisting with let");

try {
    console.log(value);
    let value = 10;
} catch (error) {
    console.log("Error:", error.name);
}


// Question 5: Function Scope
console.log("\n5. Function Scope");

function test() {
    var p = 10;
    let q = 20;

    console.log("Sum:", p + q);
}

test();


// Question 6: var Redeclaration
console.log("\n6. var Redeclaration");

var number = 2;
var number = 7;

console.log("Number:", number);


// Question 7: let Reassignment
console.log("\n7. let Reassignment");

let marks = 3;
marks = 9;

console.log("Marks:", marks);


// Question 8: const Reassignment
console.log("\n8. const Reassignment");

const price = 100;

try {
    price = 200;
} catch (error) {
    console.log("Error:", error.name);
}


// Question 9: Function Hoisting
console.log("\n9. Function Hoisting");

greet();

function greet() {
    console.log("Hello!");
}


// Final Message
console.log("\nAll scope and hoisting examples completed!");
