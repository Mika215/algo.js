const readlineSync = require("readline-sync");
console.log("--Guess the Number!--");
let randomNumber;
let randomiserGame = () => {
  randomNumber = Math.floor(Math.random() * 100 + 1);

  let userGuess = readlineSync.question("Guess which number: ");
  while (userGuess !== randomNumber) {
    if (userGuess < randomNumber) {
      console.log(`Too low`);
      userGuess = readlineSync.question("Guess the Number Again: ");
    } else if (userGuess > randomNumber) {
      console.log(`Too hiegh`);
      userGuess = readlineSync.question("Guess the Number Again: ");
    }
    continue;
  }
  console.log(`Waahoooo! Well guessed!\nGood Bye! `);
};

randomiserGame();
