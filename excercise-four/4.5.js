/**
 * This function `calcDistance` takes the coordinates of two different points A and B in a 2D space. 
 * and it return the distance between those two points.
 * 
 * @param {Number} distance1x a number representing the distance of the x position within distance1.
 * @param {Number} distance1y a number representing the distance of the y position within distance 1.
 * @param {Number} distance2x a number representing the distance of the x position within distance 2.
 * @param {Number} distance2y a number representing the distance of the y position within distance 2.
 * @returns {Number} distance in a 2D space. -a number which represents the distance between these two given points.   
 */
 const readlineSync = require("readline-sync");
let userInput = readlineSync.question('Enter the four position numbers\ndistance1x,distance1y,distance2x,distance2y separated by comma: ');
let userArray=userInput.split(',');



 const calcDistance = ([distance1x,distance1y,distance2x,distance2y])=>{
     xDifference=distance1x-distance2x;
     yDifference=distance1y-distance2y;

     return Math.sqrt(xDifference*xDifference + yDifference*yDifference);

 }
 console.log(`The distance in 2D for ${[userArray]} is:`);
 console.log(calcDistance(userArray));