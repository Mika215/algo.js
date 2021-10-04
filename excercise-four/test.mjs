export const multiRand =(arr)=> {
    let randomNumber;
    for (let i=arr.length-1;i>0;i--){
        //the Math.floor method avoids a decimal number while randomising the sort
        randomNumber= Math.floor(Math.random()*(i+1));
        //we declare a temp variable to help us easily swap the previous array position against the randomNumber
        temp=arr[i];
        arr[i]=arr[randomNumber];
        arr[randomNumber]=temp;
    }
    return arr;
};