
/* Assignment 22: Validation Utility Library */

// 1. Validate Name
function validateName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return "Error: Name cannot be empty";
    }

    return "Valid name";
}

// 2. Validate Age
function validateAge(age) {
    if (typeof age !== "number" || !Number.isFinite(age)) {
        return "Error: Age must be a valid number";
    }

    if (age < 1 || age > 120) {
        return "Error: Age must be between 1 and 120";
    }

    return "Valid age";
}

// 3. Validate Email
function validateEmail(email) {
    if (typeof email !== "string" || email.trim() === "") {
        return "Error: Email cannot be empty";
    }

    if (!email.includes("@") || !email.includes(".")) {
        return "Error: Invalid email address";
    }

    return "Valid email";
}

// 4. Validate Positive Number
function validatePositiveNumber(number) {
    if (typeof number !== "number" || !Number.isFinite(number)) {
        return "Error: Input must be a valid number";
    }

    if (number <= 0) {
        return "Error: Number must be positive";
    }

    return "Valid positive number";
}

// 5. Validate Password
function validatePassword(password) {
    if (typeof password !== "string" || password.length < 8) {
        return "Error: Password must contain at least 8 characters";
    }

    return "Valid password";
}


// Test the utility functions
console.log("===== VALIDATION RESULTS =====");

console.log("Name:", validateName("Anya"));
console.log("Empty Name:", validateName(""));

console.log("Age:", validateAge(20));
console.log("Invalid Age:", validateAge(150));

console.log("Email:", validateEmail("anya@example.com"));
console.log("Invalid Email:", validateEmail("anyaexample"));

console.log("Number:", validatePositiveNumber(25));
console.log("Invalid Number:", validatePositiveNumber(-5));

console.log("Password:", validatePassword("hello123"));
console.log("Short Password:", validatePassword("abc"));

console.log("\nValidation testing completed!");
