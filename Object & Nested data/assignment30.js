
/*
Assignment 30: Product Object with Nested Specifications
Concepts: Objects, Nested Objects, Arrays, Object Access
*/

const product = {
    id: 101,
    name: "Laptop",
    brand: "Dell",
    price: 55000,
    inStock: true,

    specifications: {
        processor: "Intel Core i5",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "15.6 inches",
        operatingSystem: "Windows 11"
    },

    colors: ["Silver", "Black", "Grey"],

    warranty: {
        duration: 2,
        unit: "years",
        type: "Manufacturer Warranty"
    },

    reviews: {
        rating: 4.5,
        totalReviews: 250
    }
};

// 1. Display basic product information
console.log("===== PRODUCT DETAILS =====");
console.log("Product ID:", product.id);
console.log("Name:", product.name);
console.log("Brand:", product.brand);
console.log("Price: ₹" + product.price);
console.log("Available:", product.inStock);

// 2. Display nested specifications
console.log("\n===== SPECIFICATIONS =====");
console.log("Processor:", product.specifications.processor);
console.log("RAM:", product.specifications.ram);
console.log("Storage:", product.specifications.storage);
console.log("Screen:", product.specifications.screen);
console.log("OS:", product.specifications.operatingSystem);

// 3. Display available colors
console.log("\n===== AVAILABLE COLORS =====");

for (const color of product.colors) {
    console.log("-", color);
}

// 4. Display warranty details
console.log("\n===== WARRANTY =====");
console.log(
    "Duration:",
    product.warranty.duration,
    product.warranty.unit
);
console.log("Type:", product.warranty.type);

// 5. Display customer reviews
console.log("\n===== CUSTOMER REVIEWS =====");
console.log("Rating:", product.reviews.rating, "/ 5");
console.log("Total Reviews:", product.reviews.totalReviews);

// 6. Update the product price
product.price = 52000;

console.log("\nUpdated Price: ₹" + product.price);

// 7. Add a new specification
product.specifications.graphics = "Integrated Graphics";

console.log(
    "Graphics:",
    product.specifications.graphics
);

// 8. Display all product keys
console.log("\n===== PRODUCT FIELDS =====");
console.log(Object.keys(product));

console.log("\nProduct object program completed!");
