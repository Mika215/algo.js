console.log(`-- a program that calculates the average value of a given array.--`);



module.exports = getAverage = arr => arr.reduce((a,b) =>a+b,0)/arr.length;

// console.log(getAverage([1,2,3,4,5]));
// console.log(getAverage([100, 101, 102]));