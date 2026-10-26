
/*
Assignment 33: Create and Validate a JSON Catalogue
Run with Node.js
*/

const fs = require("fs");

// Read the JSON file
const fileData = fs.readFileSync("catalogue.json", "utf8");

// Convert JSON text into a JavaScript object
const catalogue = JSON.parse(fileData);

// Validate the catalogue
function validateCatalogue(data) {
    if (
        !data ||
        typeof data.storeName !== "string" ||
        data.storeName.trim() === "" ||
        !Array.isArray(data.products)
    ) {
        return false;
    }

    const ids = new Set();

    for (const product of data.products) {
        if (
            !product ||
            !Number.isInteger(product.id) ||
            product.id <= 0 ||
            typeof product.name !== "string" ||
            product.name.trim() === "" ||
            typeof product.category !== "string" ||
            product.category.trim() === "" ||
            typeof product.price !== "number" ||
            !Number.isFinite(product.price) ||
            product.price < 0 ||
            !Number.isInteger(product.stock) ||
            product.stock < 0 ||
            ids.has(product.id)
        ) {
            return false;
        }

        ids.add(product.id);
    }

    return true;
}

// Display catalogue information
console.log("===== CATALOGUE VALIDATION =====");

if (!validateCatalogue(catalogue)) {
    console.log("Catalogue is invalid.");
    process.exitCode = 1;
} else {
    console.log("Catalogue is valid!");
    console.log("Store:", catalogue.storeName);
    console.log("Currency:", catalogue.currency);
    console.log("Total products:", catalogue.products.length);

    console.log("\n===== PRODUCT LIST =====");

    for (const product of catalogue.products) {
        console.log(
            `${product.id}. ${product.name} | ` +
            `${product.category} | ₹${product.price} | ` +
            `Stock: ${product.stock}`
        );
    }

    const totalStock = catalogue.products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    console.log("\nTotal stock units:", totalStock);
}

