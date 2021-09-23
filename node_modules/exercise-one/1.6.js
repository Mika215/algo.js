const readlineSync = require("readline-sync");
let integerNumber1 =readlineSync.question("Give me one integer number");
let integerNumber2=readlineSync.question("and now enter a second integer number")
let result = Math.round(integerNumber1)/Math.round(integerNumber2);
//incase the user added a decimal number insted of an integer then the Math.round method will fix by converting the decimal number into the closet inter number
console.log("Your integer divion result is:"+result);