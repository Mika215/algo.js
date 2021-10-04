//importing functions from another modules is imposible with the methode export/import
//however using the modle.exports and require i was able to use my remote functions
//the downside is that unlike the export/import methode i couldn't take only the functions.
//it just brings everything else in that file including console logs which are not related to the function.

const readlineSync = require("readline-sync");
let userInput = readlineSync.question([
  "Enter any numbers separated by comma: ",
]);
let arrayOfNumbers = userInput.split(",");

const getAverage = require("../excercise-three/3.2.js");
const minMax = require("../excercise-three/3.4.js");
const multiRand = require("./4.3.js");

const combinerFunc = (arr) => {
  let average = console.log(`Average: ${getAverage(arrayOfNumbers)}`);
  let miniAndMax = console.log(minMax(arrayOfNumbers));
  let arrayShuffle = console.log(`Shuffled order of Numbers:
    ${multiRand(arrayOfNumbers)}`);
};

console.log(combinerFunc());
