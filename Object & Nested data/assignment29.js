
/*
Assignment 29: Product Inventory Manager
Source Code + Sample Output + Test Cases
*/

// Product dataset
const products = [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 500, stock: 20 },
    { id: 3, name: "Keyboard", price: 1200, stock: 10 }
];

// Display all products
function displayProducts(items) {
    console.log("\n===== PRODUCT INVENTORY =====");

    if (items.length === 0) {
        console.log("No products available.");
        return;
    }

    for (const product of items) {
        console.log(
            `ID: ${product.id} | ${product.name} | ` +
            `Price: ₹${product.price} | Stock: ${product.stock}`
        );
    }
}

// Calculate total inventory value
function calculateInventoryValue(items) {
    return items.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

// Find a product by ID
function findProduct(items, id) {
    return items.find(product => product.id === id);
}

// Validate a product
function isValidProduct(product) {
    return (
        typeof product.name === "string" &&
        product.name.trim() !== "" &&
        typeof product.price === "number" &&
        Number.isFinite(product.price) &&
        product.price >= 0 &&
        Number.isInteger(product.stock) &&
        product.stock >= 0
    );
}

// Add a product
function addProduct(items, product) {
    if (!isValidProduct(product)) {
        return "Invalid product details.";
    }

    if (items.some(item => item.id === product.id)) {
        return "Product ID already exists.";
    }

    items.push(product);
    return "Product added successfully.";
}


// ===== MAIN PROGRAM =====

displayProducts(products);

console.log(
    "\nInitial Inventory Value: ₹" +
    calculateInventoryValue(products)
);

// Search test
const found = findProduct(products, 2);
console.log("\nSearch ID 2:", found ? found.name : "Not found");

// Add product test
console.log(
    "\nAdd Product:",
    addProduct(products, {
        id: 4,
        name: "Headphones",
        price: 1500,
        stock: 8
    })
);

// Invalid product test
console.log(
    "Invalid Product Test:",
    addProduct(products, {
        id: 5,
        name: "",
        price: -100,
        stock: 3
    })
);

// Duplicate ID test
console.log(
    "Duplicate ID Test:",
    addProduct(products, {
        id: 4,
        name: "Speaker",
        price: 2000,
        stock: 2
    })
);

// Final inventory
displayProducts(products);

console.log(
    "\nFinal Inventory Value: ₹" +
    calculateInventoryValue(products)
);
