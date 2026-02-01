// objects literals
// const user ={
//     username:"hitesh",
//     logedincount:8,
//     signedin: true,

//     getuseDetails: function(){
//         // console.log("got user from db")
//         // console.log(`Username: ${this.username}`)
//         console.log(this) // read more about this keywords
//     }
// }
// console.log(user.username)
// console.log(user.getuseDetails())
// console.log(user)

//Important of new keywords(read more about this)

function User(username,loginCount,isLogedIn){
    this.username= username;
    this.loginCount = loginCount;
    this.isLogedIn = isLogedIn;
}
