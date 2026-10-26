
/* Project 2: Shopping Cart Calculator */

const cart = [
    { name: "Notebook", price: 50, quantity: 2 },
    { name: "Pen", price: 10, quantity: 5 },
    { name: "Bag", price: 800, quantity: 1 }
];

function calculateTotal(items) {
    let total = 0;

    for (let item of items) {
        total += item.price * item.quantity;
    }

    return total;
}

function calculateDiscount(total) {
    if (total >= 1000) {
        return total * 0.10; // 10% discount
    }

    return 0;
}

function displayCart(items) {
    console.log("===== SHOPPING CART =====");

    for (let item of items) {
        let itemTotal = item.price * item.quantity;

        console.log(
            `${item.name}: ${item.quantity} x ₹${item.price} = ₹${itemTotal}`
        );
    }
}

const total = calculateTotal(cart);
const discount = calculateDiscount(total);
const finalAmount = total - discount;

displayCart(cart);

console.log("-------------------------");
console.log("Subtotal: ₹" + total);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);
