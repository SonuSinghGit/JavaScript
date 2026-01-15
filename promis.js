let p = new Promise((resolve,reject)=>{
    console.log("hello")
    // resolve(20);
})
console.log("hello word");
setTimeout(function(){
    console.log("resolved in some time")
},2000)

console.log("my pro is resolved");
console.log(p);


// const p = new Promise((resolve,reject)=>{
//     console.log("this is my promiss");
//     console.log("hello word");
// setTimeout(function(){
//     console.log("resolved in some time")
// },(""))

   
// })
// console.log(p);
// p.then((value)=>{
//     console.log(value)
// })
// p.catch((error)=>{
//     console.log("error resolved")
// });

