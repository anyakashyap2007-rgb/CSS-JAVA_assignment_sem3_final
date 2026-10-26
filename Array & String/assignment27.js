
/*
Assignment 27: Text-Cleaning Utility
Concepts: Strings, Functions, Regular Expressions
*/

// 1. Remove extra spaces
function cleanText(text) {
    if (typeof text !== "string") {
        return "";
    }

    return text.trim().replace(/\s+/g, " ");
}

// 2. Convert text to lowercase
function toLowerCaseText(text) {
    return cleanText(text).toLowerCase();
}

// 3. Convert text to title case
function toTitleCase(text) {
    const cleaned = cleanText(text);

    return cleaned.replace(/\b[a-z]/gi, letter =>
        letter.toUpperCase()
    );
}

// 4. Clean an email address
function cleanEmail(email) {
    if (typeof email !== "string") {
        return "";
    }

    return email.trim().toLowerCase();
}

// 5. Check whether a field is empty
function isEmpty(text) {
    return typeof text !== "string" || text.trim() === "";
}

// 6. Basic email format validation
function isValidEmail(email) {
    const cleaned = cleanEmail(email);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(cleaned);
}


// TEST THE FUNCTIONS
console.log("===== TEXT CLEANER =====");

const name = "   anya    kashyap   ";
console.log("Original name:", JSON.stringify(name));
console.log("Cleaned name:", cleanText(name));
console.log("Title case:", toTitleCase(name));

const email = "  ANYA@EXAMPLE.COM  ";
console.log("\nOriginal email:", JSON.stringify(email));
console.log("Cleaned email:", cleanEmail(email));
console.log("Valid email:", isValidEmail(email));

console.log("\nEmpty field test:", isEmpty("    "));
console.log("Non-empty field test:", isEmpty("Hello"));

console.log("\nText cleaning completed!");
