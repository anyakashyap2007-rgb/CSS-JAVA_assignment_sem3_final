
/*
Assignment 24: Practical Submission
Topic: Validation, Settings and Shopping Calculations
*/

// 1. Validate Name
function validateName(name) {
    if (typeof name !== "string" || name.trim() === "") {
        return false;
    }

    return true;
}

// 2. Validate Age
function validateAge(age) {
    if (typeof age !== "number" || !Number.isFinite(age)) {
        return false;
    }

    if (age < 1 || age > 120) {
        return false;
    }

    return true;
}

// 3. Merge Settings
function mergeSettings(defaults, userSettings) {
    return { ...defaults, ...userSettings };
}

// 4. Calculate Total
function calculateTotal(items) {
    let total = 0;

    for (let item of items) {
        if (
            typeof item.price !== "number" ||
            !Number.isFinite(item.price) ||
            item.price < 0 ||
            !Number.isInteger(item.quantity) ||
            item.quantity < 0
        ) {
            return null;
        }

        total += item.price * item.quantity;
    }

    return total;
}

// 5. Apply Discount
function applyDiscount(total, percentage) {
    if (
        typeof total !== "number" ||
        !Number.isFinite(total) ||
        total < 0 ||
        typeof percentage !== "number" ||
        !Number.isFinite(percentage) ||
        percentage < 0 ||
        percentage > 100
    ) {
        return null;
    }

    return total - (total * percentage / 100);
}


// TEST CASES
console.log("===== TEST CASES =====");

// Name tests
console.log(
    "Valid name:",
    validateName("Anya") === true ? "PASS" : "FAIL"
);

console.log(
    "Empty name:",
    validateName("   ") === false ? "PASS" : "FAIL"
);

// Age tests
console.log(
    "Valid age:",
    validateAge(20) === true ? "PASS" : "FAIL"
);

console.log(
    "Invalid age:",
    validateAge(150) === false ? "PASS" : "FAIL"
);

// Settings test
const defaults = {
    theme: "light",
    notifications: true
};

const userSettings = {
    theme: "dark"
};

const settings = mergeSettings(defaults, userSettings);

console.log(
    "Settings merge:",
    settings.theme === "dark" &&
    settings.notifications === true ? "PASS" : "FAIL"
);

// Shopping calculation tests
const items = [
    { price: 100, quantity: 2 },
    { price: 50, quantity: 1 }
];

const total = calculateTotal(items);

console.log(
    "Total calculation:",
    total === 250 ? "PASS" : "FAIL"
);

console.log(
    "Invalid price:",
    calculateTotal([{ price: -10, quantity: 1 }]) === null
        ? "PASS"
        : "FAIL"
);

// Discount test
console.log(
    "10% discount:",
    applyDiscount(250, 10) === 225 ? "PASS" : "FAIL"
);


// FINAL RESULTS
console.log("\n===== PRACTICAL SUMMARY =====");
console.log("Merged Settings:", settings);
console.log("Shopping Total: ₹" + total);
console.log("After 10% Discount: ₹" + applyDiscount(total, 10));
console.log("All test cases executed.");
