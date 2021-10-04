
console.log("--A Program that takes the length and width of a rectangle and returns back its surface.--");
//para

/**
 * A Program that takes the length and width of a given rectangle and returns back its surface(length multiplied by width)
 * @param  {Number} length The length of a given rectangle
 * @param  {Number} width The width of a given rectangle
 * @return {Number}      The surface area of the given rectangle(Length*Width)
 */

const readlineSync = require("readline-sync");

//however this program has a bug.It disregards the decimal numbers and it calculates as if only an integer numbers was passed.
//for instance if you pass 0.75x2.5 it returns 0
//on the other hand if you pass 15.5x12.7 it returns only the integer part(180);
const length=parseInt(readlineSync.question('Enter length:'));
const width=parseInt(readlineSync.question('Enter width:'));

const calcSurface = (length,width)=>{
   
    const surfaceArea=length*width;
    return `The surface area of length: ${length} x Width: ${width} is => ${surfaceArea}`

}

console.log(calcSurface(length,width));