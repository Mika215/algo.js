
console.log("--a program that requires a user to enter a number called <n> and then it allows you to enter different numbers <n> amount of times.Finally it display's back the sum of all the numbers collected--")

const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question('chose a number: '))
let sum = 0
for(let i = 0; i < n; i++) 
sum += parseInt(readlineSync.question('enter a new number: '))


console.log(sum)
