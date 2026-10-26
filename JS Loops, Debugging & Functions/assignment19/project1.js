
/* Project 1: Student Result Management System */

const student = {
    name: "Anya",
    marks: [85, 78, 92, 88, 80]
};

function calculateAverage(marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total / marks.length;
}

function calculateGrade(average) {
    if (average >= 90) {
        return "A+";
    } else if (average >= 80) {
        return "A";
    } else if (average >= 70) {
        return "B";
    } else if (average >= 60) {
        return "C";
    } else {
        return "Needs Improvement";
    }
}

const average = calculateAverage(student.marks);
const grade = calculateGrade(average);

console.log("===== STUDENT RESULT =====");
console.log("Name:", student.name);
console.log("Marks:", student.marks.join(", "));
console.log("Total Marks:", student.marks.reduce((sum, mark) => sum + mark, 0));
console.log("Average:", average.toFixed(2));
console.log("Grade:", grade);
