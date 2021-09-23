const readlineSync = require("readline-sync");

let age=18;
let userAge = readlineSync.question('Enter your age');

if(userAge>=age){
    console.log("You are an adult")
}else{
    console.log("You are not yet an adult")
}
