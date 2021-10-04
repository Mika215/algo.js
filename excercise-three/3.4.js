
console.log("-- a program that displays the minimum and maximum elements of a given array--")

// const readlineSync = require("readline-sync");
// let userArray = parseInt(readlineSync.question('Enter numbers sparated by comma:'));

//why is it too complicated to make the function work with the readlineSync - it normally works on the console
//console.log(minMax(userArray));
// let userArray=[10,-1,8,230,9];
module.exports = minMax =(array)=>{
    let minimum = Math.min(...array);
    let maximum = Math.max(...array);
    let minMaxReport= (`Minimum Number is: ${minimum}\nMaximum Number is: ${maximum}`);
    return minMaxReport;

}

// console.log(minMax(userArray));


