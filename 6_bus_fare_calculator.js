/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


// Input: Age and Student Status
var prompt = require("prompt-sync")(); 

let yourAge = Number(prompt("Enter your Age: "));

if (yourAge < 10) {
    console.log("Your ticket fare is free.");
}
else if (yourAge >= 10 && yourAge < 26) {
    let studentCheck = prompt("Are you a student? if yes/no then type y. if no then type n: ").toLowerCase();
    if (studentCheck === 'y') {
        console.log("You are eligible for a 50% student discount. Your ticket fare is 400 tk.");
    }
    else {
        console.log("Your ticket fare is 800 tk.");
    }
}
else if (yourAge >= 60) {
    console.log("You are eligible for a 15% senior citizen discount. Your ticket fare is 680 tk.");
}
else {
    console.log("Your ticket fare is 800 tk.");
}