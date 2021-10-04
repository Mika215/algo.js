
/**
 * The factorial of a number is the function that multiplies the number by every natural number below it.
 * Natural numbers are a part of the number system, including all the positive integers from 1 to infinity. Natural numbers are also called counting numbers because they do not include zero or negative numbers. 
 * They are a part of real numbers including only the positive integers, but not zero, fractions, decimals, and negative numbers.
 */
const readlineSync = require("readline-sync");



    let userInput = readlineSync.question('Enter any positive integer number: ');
    while(userInput%1!==0 || userInput<1){
        userInput=readlineSync.question(`Invalid!Input is not a positive integer\nPlease Enter only positive integer number: `)
    }
   
const factorial=(number)=>{
    for(let i=number-1;i>=1;i--){
        number=number*i;
    }
    return `The factorial value is: ${number}`
}
console.log(factorial(userInput));
