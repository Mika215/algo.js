
console.log("-- a Program that returns a random integer between 1 and 10.It displays the result each time it is run--")

/**
 * A Program that returns a random integer between 1-10.
 *  @param {} it doesn't take anything as a parameter 
 * @return {Number}  a random number between 1-10.
 */



let randomNumber;
const rand10=()=>{
    randomNumber=Math.floor(Math.random()*10 +1)
    return randomNumber;
}

console.log(rand10(randomNumber));




