const readlineSync = require("readline-sync");
let firstName=readlineSync.question('Can you give me your first name');
let name=readlineSync.question('Can you also give me your name please?');
let city=readlineSync.question('Could specify which city you are living currently?');

console.log(`Thanks for giving us all the need information Mr. ${firstName} ${name}\n I hope you are enjoying the weather in ${city}.`);