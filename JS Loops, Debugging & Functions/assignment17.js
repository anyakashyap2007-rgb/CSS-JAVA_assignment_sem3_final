
console.log("===== JAVASCRIPT LOOP PRACTICE =====\n");

// 1. Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 2. Sum of first 10 natural numbers
console.log("\n2. Sum of first 10 natural numbers:");

let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);


// 3. Multiplication table of 5
console.log("\n3. Multiplication table of 5:");

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number * i));
}


// 4. Factorial of 5
console.log("\n4. Factorial of 5:");

let factorialNumber = 5;
let factorial = 1;

for (let i = 1; i <= factorialNumber; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);


// 5. Count even numbers from 1 to 20
console.log("\n5. Even numbers from 1 to 20:");

let count = 0;

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
}

console.log("Total even numbers =", count);


// 6. Print a star pattern
console.log("\n6. Star pattern:");

for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

console.log("\n===== PROGRAM COMPLETED =====");
