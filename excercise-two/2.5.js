const readlineSync = require("readline-sync");
let favouriteNumber=42;
let userInput=readlineSync.question("enter your favourite number");
userInput=Number(userInput);
while(favouriteNumber!==userInput){
    userInput=readlineSync.question("Are you sure ?\nPlease enter your favourite number again");
    continue;
}



