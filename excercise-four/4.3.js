console.log("--This program shuffles the order of the numbers inside an array--")

const readlineSync = require("readline-sync");
//i can't find the best solution where i can convert the user input separated by comma in to an arrayof numbers
// let userArray=[1,2,3,4,5,6,7,8,9,10];
//  userInput=parseInt(readlineSync.question('enter any numbers between 1 - 10\nenter stop or hit the enter button to finish'));
// let userArray = userInput.split(',');
module.exports = multiRand =(arr)=> {
    let randomNumber;
    for (let i=arr.length-1;i>0;i--){
        //the Math.floor method avoids a decimal number while randomising the sort
        randomNumber= Math.floor(Math.random()*(i+1));
        //we declare a temp variable to help us easily swap the previous array position against the randomNumber
        temp=arr[i];
        arr[i]=arr[randomNumber];
        arr[randomNumber]=temp;
    }
    return arr;
};
// console.log(multiRand(userArray));
