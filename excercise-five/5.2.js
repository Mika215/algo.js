
let movie
const randomizeCast=(arr)=>{


    let  randomMovie;
    for (let i=arr.length-1;i>0;i--){
        //the Math.floor method avoids a decimal number while randomising the sort
         randomMovie= Math.floor(Math.random()*(i+1));
        //we declare a temp variable to help us easily swap the previous array position against the  randomMovie
        temp=arr[i];
        arr[i]=arr[ randomMovie];
        arr[ randomMovie]=temp;
    }
    return arr;
};