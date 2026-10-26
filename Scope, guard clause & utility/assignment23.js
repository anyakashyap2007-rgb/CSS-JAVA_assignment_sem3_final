
/* Assignment 23: Settings and Total Utilities */

// Utility 1: Merge default settings with user settings
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

// Utility 2: Calculate the total price of items
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
            return "Error: Invalid price or quantity";
        }

        total += item.price * item.quantity;
    }

    return total;
}

// Utility 3: Apply a discount
function applyDiscount(total, discountPercentage) {
    if (
        typeof total !== "number" ||
        !Number.isFinite(total) ||
        total < 0 ||
        typeof discountPercentage !== "number" ||
        !Number.isFinite(discountPercentage) ||
        discountPercentage < 0 ||
        discountPercentage > 100
    ) {
        return "Error: Invalid total or discount";
    }

    return total - (total * discountPercentage / 100);
}


// Example 1: Merge Settings
console.log("===== MERGED SETTINGS =====");

const defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

const userSettings = {
    theme: "dark",
    language: "Hindi"
};

const finalSettings = mergeSettings(
    defaultSettings,
    userSettings
);

console.log(finalSettings);


// Example 2: Calculate Shopping Total
console.log("\n===== SHOPPING TOTAL =====");

const items = [
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Pen", price: 10, quantity: 3 },
    { name: "Bag", price: 800, quantity: 1 }
];

const total = calculateTotal(items);

console.log("Total Price: ₹" + total);


// Example 3: Apply 10% Discount
console.log("\n===== DISCOUNT =====");

const finalAmount = applyDiscount(total, 10);

console.log("Discount: 10%");
console.log("Final Amount: ₹" + finalAmount);

console.log("\nProgram completed successfully!");
