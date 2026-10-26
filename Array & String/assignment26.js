
/*
Assignment 26: Product Dataset Analysis
Concepts: Arrays, Objects, filter(), map(), reduce()
*/

const products = [
    { name: "Laptop", category: "Electronics", price: 50000, stock: 5 },
    { name: "Phone", category: "Electronics", price: 20000, stock: 10 },
    { name: "Notebook", category: "Stationery", price: 50, stock: 100 },
    { name: "Pen", category: "Stationery", price: 10, stock: 200 },
    { name: "Headphones", category: "Electronics", price: 1500, stock: 15 },
    { name: "Backpack", category: "Accessories", price: 1200, stock: 20 }
];

// 1. Display all products
console.log("===== ALL PRODUCTS =====");

products.forEach(product => {
    console.log(
        `${product.name} | ₹${product.price} | Stock: ${product.stock}`
    );
});

// 2. Filter products under ₹2000
console.log("\n===== PRODUCTS UNDER ₹2000 =====");

const affordableProducts = products.filter(
    product => product.price < 2000
);

affordableProducts.forEach(product => {
    console.log(`${product.name}: ₹${product.price}`);
});

// 3. Filter electronics products
console.log("\n===== ELECTRONICS PRODUCTS =====");

const electronics = products.filter(
    product => product.category === "Electronics"
);

electronics.forEach(product => {
    console.log(product.name);
});

// 4. Create a list of product names
console.log("\n===== PRODUCT NAMES =====");

const productNames = products.map(
    product => product.name
);

console.log(productNames.join(", "));

// 5. Calculate total inventory value
const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
);

console.log("\nTotal Inventory Value: ₹" + inventoryValue);

// 6. Count all available units
const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
);

console.log("Total Units in Stock:", totalStock);

// 7. Find the most expensive product
const mostExpensive = products.reduce(
    (highest, product) =>
        product.price > highest.price ? product : highest
);

console.log(
    "Most Expensive Product:",
    mostExpensive.name,
    "- ₹" + mostExpensive.price
);

// 8. Calculate average product price
const averagePrice = inventoryValue === 0
    ? 0
    : products.reduce((total, product) => total + product.price, 0)
        / products.length;

console.log("Average Product Price: ₹" + averagePrice.toFixed(2));

console.log("\nProduct analysis completed!");
