/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/


// Input: Student's Score
var prompt = require("prompt-sync")();

let score = Number(prompt("Enter Student's Score (0-100): "));  // Example score

if (score >= 90 && score <= 100) {
    console.log(`Your Score is ${score}. You got an A grade.`);
}
else if (score >= 80 && score <= 89) {
    console.log(`Your Score is ${score}. You got a B grade.`);
}
else if (score >= 70 && score <= 79) {
    console.log(`Your Score is ${score}. You got a C grade.`);
}
else if (score >= 60 && score <= 69) {
    console.log(`Your Score is ${score}. You got a D grade.`);
}
else if (score >= 0 && score <= 59) {
    console.log(`Your Score is ${score}. You got an F grade.`);
}
else {
    console.log("Invalid score. Please enter a score between 0 and 100.");
}
