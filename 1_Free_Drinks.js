/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// Input: Burger Price
var prompt = require("prompt-sync")();

let burgerPrice = Number(prompt("Enter Burger Price: "));  // Example burger price
let cokePrice = 30; // Price of Coke

if(burgerPrice > 500){
    console.log("Congratulations! You get Coke for Free.")
}
else{
    console.log("Burger Price: " + burgerPrice + "tk")  
    console.log("Coke Price: " + ' + ' + cokePrice + "tk") 
    console.log("==============================")
    console.log("Total Price: " + (burgerPrice + cokePrice) + "tk")
}