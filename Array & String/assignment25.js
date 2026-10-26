
/*
Assignment 25: Shopping-List Manager
Concepts: Arrays, Strings, Loops, Functions
*/

let shoppingList = ["Milk", "Bread", "Eggs"];

// 1. Display all items
function displayList() {
    console.log("\n===== SHOPPING LIST =====");

    if (shoppingList.length === 0) {
        console.log("Your shopping list is empty.");
        return;
    }

    for (let i = 0; i < shoppingList.length; i++) {
        console.log(`${i + 1}. ${shoppingList[i]}`);
    }
}

// 2. Add an item
function addItem(item) {
    if (typeof item !== "string" || item.trim() === "") {
        console.log("Error: Item name cannot be empty.");
        return;
    }

    shoppingList.push(item.trim());
    console.log(`"${item.trim()}" added successfully.`);
}

// 3. Remove an item
function removeItem(item) {
    const index = shoppingList.findIndex(
        existingItem =>
            existingItem.toLowerCase() === item.trim().toLowerCase()
    );

    if (index === -1) {
        console.log(`"${item}" was not found.`);
        return;
    }

    const removedItem = shoppingList.splice(index, 1);
    console.log(`"${removedItem[0]}" removed successfully.`);
}

// 4. Search for an item
function searchItem(item) {
    const found = shoppingList.some(
        existingItem =>
            existingItem.toLowerCase() === item.trim().toLowerCase()
    );

    if (found) {
        console.log(`"${item}" is on your shopping list.`);
    } else {
        console.log(`"${item}" is not on your shopping list.`);
    }
}

// 5. Count the items
function countItems() {
    console.log("Total items:", shoppingList.length);
}


// TEST THE FUNCTIONS
console.log("SHOPPING-LIST MANAGER");

displayList();

addItem("Apples");
addItem("Chocolate");

displayList();

searchItem("Milk");
searchItem("Juice");

removeItem("Bread");

displayList();

countItems();

console.log("\nShopping-list program completed!");
