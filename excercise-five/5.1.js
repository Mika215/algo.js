

// let moviesServer ={
// };

// const readlineSync = require("readline-sync");

// let name=  moviesServer.Name=readlineSync.question('Tittle: ');
// let proYear= moviesServer.ProductionYear=readlineSync.question('Production Year: ');
// let cast=moviesServer.NamesOfCastMembers=readlineSync.question('Cast: ');
// const askTvSerie =()=>{
 

//     return moviesServer;

// } 
// console.log(askTvSerie(`${name}\n${proYear}\n${cast}`));


const readlineSync = require("readline-sync");



const movies=[];

const  askTvSerie =()=>{
    let movie1={
        id:"movie1",
        title:readlineSync.question("Tittle: "),
        productionYear:readlineSync.question("Production Year: "),
        cast:[readlineSync.question("List of cast: ")]
        
    }
    let movie2={
        id:"movie2",
        title:readlineSync.question("Tittle: "),
        productionYear:readlineSync.question("Production Year: "),
        cast:[readlineSync.question("List of cast: ")]
        
    }
    // movie1.cast=movie1.cast.split("");
    // movie2.cast=movie2.cast.split("")
    
    movies.push(movie1);
    movies.push(movie2);
    
    return movies;
    
}

console.log(askTvSerie());
