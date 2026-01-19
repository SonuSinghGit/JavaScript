// objects
const tinderUser={
    id:"123abc",
    name:"sammy",
    isLoggedIn:false,
}
// console.log(tinderUser)

let key = Object.keys(tinderUser)
let value = Object.values(tinderUser)
console.log(key)
console.log(value)

key.map((key)=>{
     return [...key]
})
// console.log(key)
value.map((value)=>{
return value
})
// console.log(value)




// merge two objects
const obj1 ={1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3= Object.assign({},obj1,obj2) //merge in obj1
// console.log(obj3).
const obj4= {...obj1,...obj2} // modern way to merge 
// console.log(obj4) // same output as assign 