// const promisOne = new Promise((resolve, reject) => {

//   setTimeout(() => {
//     console.log("Async task is complete");
//      resolve();
//   }, 1000);
 
// });
// promisOne.then(()=>{
//     console.log("Promise consumed")
// })

// second approch 

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("promis two resolved")
//       resolve();
//     },2000)
// }).then(()=>{
//     console.log("promise is consumed");
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username:"sonu",email:"sonucse103@gmail.com"})
//         // resolve("resolved")
//     },2000)
// })
// promise3.then((username)=>{
//    console.log(username)
// })

// const promise4 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let eroor = false;
//         if(!eroor){
//             resolve({username:"sonu",email:"sonu@gmail.com"})
//         }else{
//             reject("Something went wrong")
//         }
//     },1000)
// })
// promise4.then((user)=>{
//     return user.username;
// })
// .then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("promise is wether fulfill or rejected")
// });


const promise5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username:"sonu",email:"sonu@gmail.com"})
        }else{
            reject('Error: something went wrong')
        }
    },1000)

});
async function consumedPromise(){
    const response = await promise5
    console.log(response)
}
consumedPromise()
