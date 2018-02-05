//Math 1 
function zeroNegativity(arr){ 
    for (i in arr){
        if (arr[i] < 0){
            return false;
        } else {
            return true;
        }
    }
}

//Math 2 
function isEven(num){
    if( num % 2 == 0){
        return true;
    } else {
        return false;
    }
}

//Math 3 
function howManyEven(arr){
    let count = 0; 
    for (i = 0; i< arr.length; i++){
        if(isEven(arr[i])) count++; 
    }
    return count;
}

//Math 4 
function createDummyArray(n){
    arr = []; 
    for (i = 0; i < n; i++){
        arr.push(Math.floor(Math.random()*9));
    }
    return arr;
}

//Math 5 
function randomChoice(arr){
    i = Math.floor(Math.random()*arr.length)
    return arr[i];
}

let n = 5
let num = 8 
let x = [-1, 4, -5, 8]
let y = [1,3,4,5]
let arr = [1,2,3,4,5,6,7,8]

console.log(zeroNegativity(x));
console.log(zeroNegativity(y));
console.log(isEven(num));
console.log(howManyEven(arr));
console.log(createDummyArray(n));
console.log(randomChoice(arr));