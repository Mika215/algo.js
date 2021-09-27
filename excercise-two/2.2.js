
const readlineSync = require("readline-sync");
const minAge= parseInt(readlineSync.question(`enter a minimum age_ `));
const maxAge= parseInt(readlineSync.question(`enter a maximum age_ `));


if (minAge>maxAge){
    throw console.error("Ooops! it seems that you didn't understand the instruction.\nGoodBye!")
}
else{
    const currentAge= parseInt(readlineSync.question(`enter your current age `));
    if (currentAge>minAge & currentAge<maxAge)
    console.log(`Your current age is: ${currentAge}`);
    }
