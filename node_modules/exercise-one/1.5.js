const readlineSync = require("readline-sync");
let decimalNumber1 =readlineSync.question("Give me one decimal number");
let decimalNumber2=readlineSync.question("and now can you give me a second decimal number")
let result = Math.trunc(decimalNumber1)*Math.trunc(decimalNumber2);
console.log("Your multiplication integer result is:"+result);