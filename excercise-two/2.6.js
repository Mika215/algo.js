const readlineSync = require("readline-sync");

let userInput=readlineSync.question("enter a number between 1-7 => ");
userNumber=Number(userInput);

if (userNumber===1){
    console.log(userInput+" => its Monday get to work!");
}
else if(userNumber===2){
    console.log(userInput+" => its Tuesday");
}
 else if(userNumber===3){
    console.log(userInput+" => its Wednesday");
}
else if (userNumber===4){
    console.log(userInput+" => its Thursday");
}
else if (userNumber===5){
    console.log(userInput+" => Waaaauuhhh! Its Friday !");
}
else if (userNumber===6){
    console.log(userInput+" => its Saturday - Party time!");
}
else if (userNumber===7){
    console.log(userInput+" => its Sunday relax and regain your energy back!");
}
else{
    console.log(userInput+" => Invalide entry!\nEnter only numbers from 1-7");
}