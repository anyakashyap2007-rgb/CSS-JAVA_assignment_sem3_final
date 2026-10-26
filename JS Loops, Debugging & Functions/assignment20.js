
/* Assignment 20: Mathematical Utility Functions */

// 1. Addition
function add(a, b) {
    return a + b;
}

// 2. Subtraction
function subtract(a, b) {
    return a - b;
}

// 3. Multiplication
function multiply(a, b) {
    return a * b;
}

// 4. Division
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }

    return a / b;
}

// 5. Square
function square(n) {
    return n * n;
}

// Testing the functions
console.log("Addition:", add(10, 5));
console.log("Subtraction:", subtract(10, 5));
console.log("Multiplication:", multiply(10, 5));
console.log("Division:", divide(10, 5));
console.log("Square:", square(4));

console.log("Division by zero:", divide(10, 0));
