// Add "mango" at the end and "pineapple" at the beginning of the array;

// let fruits = ["Apple","Banana"];
// fruits.push("mango");
// fruits.unshift("pineapple")
// console.log(fruits)

// Extract only the middle 3 elements from this array

// let items = [1,2,33,45,56,78,88,34]
// const newArr = items.slice(2,5) //[33,45,56]
// console.log(newArr);

// sort this array alphabetically and then reverse it

// let  names = ["Zara","Arjun","Mira","Bhavya"];
// names.sort().reverse();
// console.log(names)

//Use filter() to keep numbers greater than 10

// let arr = [34,5,67,6,8,89,12,23];
// const res =arr.filter((val)=>{
//     return val>10;
// });
// console.log(res)

// USE .REDUCE() TO FIND THE SUM OF THIS ARRAY 
let arr = [10,20,30];
let result = arr.reduce((acc,val)=>{
    return acc+val;
},0);
console.log("sum of the array is:",result);