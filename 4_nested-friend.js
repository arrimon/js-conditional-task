/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

// Input:  My Score
var prompt = require("prompt-sync")();

let myScore = Number(prompt("Enter Your Score: "));  // Example score

if (myScore > 80) {
    let friendScore = Number(prompt("Enter Ypour Friend's Score: "));  // Example friend's score

    if (friendScore > 80) {
        console.log(`You get more the ${friendScore} marks. Treat me for a lunch.`);
    }
    else if (friendScore >= 60 && friendScore < 80) {
        console.log(`Your get ${friendScore} marks Not bad. Good luck next time.`);
    }
    else if (friendScore >= 40 && friendScore < 60) {
        console.log(`Your get ${friendScore} marks very bad. I don't see his message.`);
    }
    else {
        console.log(`Your get ${friendScore} marks. I just Blocked! him`);
    }
}
else {
    console.log("Go to home and sleep and act sad");
}