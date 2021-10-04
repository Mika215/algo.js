console.log(`--a program that creates a duplicate of a given array--`)


const cloneArray=(array)=>{
    let clonedArray=JSON.parse(JSON.stringify(array));
    return clonedArray;
}

console.log(cloneArray([9,2,7,4,5]));