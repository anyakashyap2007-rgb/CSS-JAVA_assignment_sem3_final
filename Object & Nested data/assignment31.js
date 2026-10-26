
/*
Assignment 31: Shopping Cart
Concepts: Objects, Arrays, Functions, Validation
*/

const cart = {
    items: [],

    // Add a product to the cart
    addItem(product, quantity) {
        if (!Number.isInteger(quantity) || quantity <= 0) {
            console.log("Error: Quantity must be a positive integer.");
            return;
        }

        if (
            !product ||
            typeof product.name !== "string" ||
            product.name.trim() === "" ||
            typeof product.price !== "number" ||
            !Number.isFinite(product.price) ||
            product.price < 0
        ) {
            console.log("Error: Invalid product details.");
            return;
        }

        const existingItem = this.items.find(
            item => item.id === product.id
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity
            });
        }

        console.log(product.name + " added to cart.");
    },

    // Calculate the total price
    calculateTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    },

    // Display all cart items
    displayCart() {
        console.log("\n===== SHOPPING CART =====");

        if (this.items.length === 0) {
            console.log("Cart is empty.");
            return;
        }

        for (const item of this.items) {
            console.log(
                `${item.name} | ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
            );
        }

        console.log("-------------------------");
        console.log("Total: ₹" + this.calculateTotal());
    },

    // Remove a product by ID
    removeItem(productId) {
        const index = this.items.findIndex(
            item => item.id === productId
        );

        if (index === -1) {
            console.log("Product not found in cart.");
            return;
        }

        const removed = this.items.splice(index, 1);
        console.log(removed[0].name + " removed from cart.");
    }
};


// Available products
const notebook = {
    id: 1,
    name: "Notebook",
    price: 50
};

const pen = {
    id: 2,
    name: "Pen",
    price: 10
};

const bag = {
    id: 3,
    name: "Backpack",
    price: 800
};


// Test the cart
cart.addItem(notebook, 2);
cart.addItem(pen, 5);
cart.addItem(bag, 1);

// Test invalid quantity
cart.addItem(notebook, -2);

// Display the cart
cart.displayCart();

// Add more of an existing product
console.log("\nAdding more notebooks...");
cart.addItem(notebook, 1);
cart.displayCart();

// Remove a product
console.log("\nRemoving the pen...");
cart.removeItem(2);
cart.displayCart();
