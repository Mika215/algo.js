
// const readlineSync = require("readline-sync");
// let userInput= parseInt(readlineSync.question(`Enter numbers separated by comma`));
// let userNumber=userInput.split(",");

// let numberArray=[];
// const arrayToNumber= ([arr])=>{
//     for (let i = 0; i < arr.length; i++)
//     numberArray.push(parseInt(arr[i]));

// }


console.log(`--a program that will add all the elements of an array--`);

const readlineSync=require('readline-sync')  ;
const userInput=readlineSync.question("Enter numbers separated by comma: ");
let stringArray=userInput.split(',');
stringArray=arrayToNumber(stringArray)




const addNumber=(arr)=>{
      let sum=0;
      for(let i=0;i <arr.length; i++){
          let current=arr[i];
          sum+=current;
      }
      return sum;
  }
console.log(userArray);
  console.log(addNumber(userArray));

//   console.log(addNumber([1, 2, 3, 4, 5])) // => 15
//   console.log(addNumber([100, 101, 102])) // => 303





