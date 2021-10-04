const readlineSync = require("readline-sync");

let num1 = parseInt(readlineSync.question(`Give me one decimal number `));        
let num2 = parseFloat(readlineSync.question(`give me second decimal number `));
const multiply = (a,b) => a*b;
console.log(multiply(num1,num2));