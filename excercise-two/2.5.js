const readlineSync = require(`readline-sync`);
let favouriteNumber=42;
let userInput=parseInt(readlineSync.question(`enter your favourite number `));
while(favouriteNumber!==userInput){
    userInput=parseInt(readlineSync.question(`Are you sure ?\nPlease enter your favourite number again `));
    continue;
}

console.log(`Hmmmm...${userInput} Good to know!`);



