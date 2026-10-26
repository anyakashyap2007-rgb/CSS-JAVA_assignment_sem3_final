
/*
Assignment 28: Arrays and Strings Problem Set
*/

// 1. Find the largest number in an array
function findLargest(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log("1. Largest Number");
console.log(findLargest([12, 45, 7, 89, 23]));


// 2. Reverse a string
function reverseString(text) {
    return text.split("").reverse().join("");
}

console.log("\n2. Reverse String");
console.log(reverseString("JavaScript"));


// 3. Count vowels in a string
function countVowels(text) {
    let count = 0;
    const vowels = "aeiou";

    for (let character of text.toLowerCase()) {
        if (vowels.includes(character)) {
            count++;
        }
    }

    return count;
}

console.log("\n3. Count Vowels");
console.log(countVowels("Hello World"));


// 4. Remove duplicate values from an array
function removeDuplicates(numbers) {
    return [...new Set(numbers)];
}

console.log("\n4. Remove Duplicates");
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 5. Check whether a string is a palindrome
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

console.log("\n5. Palindrome Check");
console.log("madam:", isPalindrome("madam"));
console.log("hello:", isPalindrome("hello"));


// 6. Find the sum of array elements
function sumArray(numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log("\n6. Sum of Array");
console.log(sumArray([10, 20, 30, 40]));

console.log("\nAll problems completed!");
