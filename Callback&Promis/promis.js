// Senario

// 1. Register
// 2. Send Welcome Email
// 3. Login
// 4. Get User Data
// 5.Display User data

function Register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //    return reject("Error While Register")
       console.log("register end");
      resolve();
    }, 3000);
  });
}

function SendEmail() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
       return reject("Error While Send Email")
        console.log("send email end");
    
  }, 6000);
})
 
}

function Login() {
    return new Promise((resolve,reject)=>{
 setTimeout(() => {
    console.log("login end ");
    resolve();
  }, 1000);
    })
 
}

function GetData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
    console.log("Get data end");
    resolve();
  }, 3000);
    })
  
}

function DisplayData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
        console.log("display data");
        resolve();
  }, 2000);
    })
 
}

// Register(function () {
//   SendEmail(function () {
//     Login(function () {
//       GetData(function () {
//         DisplayData();
//       });
//     });
//   });
// });

//PROMIS
// Register()
// .then(SendEmail)
// .then(Login)
// .then(GetData)
// .then(DisplayData)
// .catch((error)=>{
//     console.log("Error:",error)

// })

// ASYNC AND AWAIT

 async function authenticate(){
    await Register();
    await SendEmail();
    await Login();
    await GetData();
    await DisplayData();

}

authenticate()
.then(()=>{
    console.log("All Work done..!")
})
.catch((error)=>{
    console.log("Error:", error)
})

console.log("Other Applicaton Data work here ...!!");
