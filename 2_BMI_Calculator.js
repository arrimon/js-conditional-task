/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// Get user input for weight and height
var prompt = require("prompt-sync")();


let weight =  Number(prompt("Enter Weight (kg): ")); // weight in kilograms
let height =  Number(prompt("Enter Height (m): ")); // height in meters

// Calculate BMI
// const BMI = weight / (height * height);
const BMI = weight / height ** 2;

// Determine health category based on BMI
if (BMI < 18.5) {
    console.log(`You are underweight. Your BMI is ${BMI}`);
}
else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log(`You are normal. Your BMI is ${BMI}`);
}
else if (BMI >= 25 && BMI <= 29.9) {
    console.log(`You are overweight. Your BMI is ${BMI}`);
}
else {
    console.log(`You are obese. Your BMI is ${BMI}`);
}