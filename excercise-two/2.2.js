
const readlineSync = require("readline-sync");
let minAge= readlineSync.question('enter a minimum age');
let maxAge= readlineSync.question('enter a maximum age');
let currentAge= readlineSync.question('enter your current age');


if(currentAge>minAge && currentAge<maxAge){
    console.log("Your current age is: "+currentAge)
}else{
    throw console.error("Ooops! it seems that you didn't understand the instruction.\nGoodBye!")
}