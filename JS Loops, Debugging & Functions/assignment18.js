
/*
Assignment 18: Debug and Fix JavaScript

Common bugs fixed:
1. Incorrect variable declaration
2. Wrong comparison operator
3. Incorrect loop condition
4. Wrong calculation
5. Incorrect function return
6. Array index error
*/

// Bug 1: Use the correct variable declaration
let name = "Anya";
console.log("Name:", name);

// Bug 2: Use === to compare values
let age = 20;

if (age === 20) {
    console.log("Age is 20");
}

// Bug 3: Correct loop condition
console.log("\nNumbers from 1 to 5:");

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// Bug 4: Correct the calculation
let a = 10;
let b = 5;

let sum = a + b;
console.log("\nSum:", sum);

// Bug 5: Return the calculated value
function multiply(x, y) {
    return x * y;
}

console.log("Multiplication:", multiply(4, 3));

// Bug 6: Use a valid array index
let fruits = ["Apple", "Mango", "Banana"];

console.log("First fruit:", fruits[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("\nAll bugs fixed successfully!");
