
/*
Assignment 32: Profile Summary Generator
Concepts: Objects, Object.keys(), Object.values(),
Object.entries(), Object.assign()
*/

const profile = {
    name: "Anya Kashyap",
    age: 20,
    course: "BCA Artificial Intelligence",
    university: "Invertis University",
    skills: ["HTML", "CSS", "JavaScript"],
    city: "Bareilly"
};

// 1. Display the complete profile
console.log("===== USER PROFILE =====");
console.log(profile);

// 2. Get all property names
console.log("\n===== PROFILE FIELDS =====");
console.log(Object.keys(profile));

// 3. Get all property values
console.log("\n===== PROFILE VALUES =====");
console.log(Object.values(profile));

// 4. Display properties as key-value pairs
console.log("\n===== PROFILE DETAILS =====");

for (const [key, value] of Object.entries(profile)) {
    console.log(`${key}: ${value}`);
}

// 5. Create a profile summary
function generateSummary(user) {
    return `${user.name} is studying ${user.course} at ${user.university}. ` +
        `Skills include ${user.skills.join(", ")}.`;
}

console.log("\n===== PROFILE SUMMARY =====");
console.log(generateSummary(profile));

// 6. Copy the profile into a new object
const updatedProfile = Object.assign({}, profile);

// Update the copied profile
updatedProfile.age = 21;
updatedProfile.city = "Delhi";

console.log("\n===== UPDATED PROFILE =====");
console.log(updatedProfile);

// 7. Check whether a property exists
console.log("\n===== PROPERTY CHECK =====");
console.log("Has name:", Object.hasOwn(profile, "name"));
console.log("Has email:", Object.hasOwn(profile, "email"));

// 8. Count the profile fields
console.log("\nTotal profile fields:", Object.keys(profile).length);

console.log("\nProfile summary program completed!");
