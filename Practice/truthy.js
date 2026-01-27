// thuthy and falsy value

//FALSY VALUE

// false, 0, -0 , BigInt On , "" , null , undefined , NaN

//TRUTHY VALUE

// "0", 'false', " ", [] , {}, function(){}

// if we have an empty array then how we check it is an empty array

const myArray = [];
if(myArray.length === 0){
    console.log("Array is empty");
}

// if we have an empty object then how we check it is an empty object
// const myObj= {name:"sonu"}
const myObj = {}

if(Object.keys(myObj).length===0){
    console.log("Empty object")
}
// console.log(Object.keys(myObj))

// TERNIARY OPERATOR

// CONDITION ? TRUE : FALSE

const iceteaPrice = 100;

iceteaPrice <= 80 ? console.log("Less than 80") : 
console.log("more than 80");
