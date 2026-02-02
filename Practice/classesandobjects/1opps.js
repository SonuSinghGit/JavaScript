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

    this.greeting = (()=>{
        console.log(`Welcone: ${this.username}`)
    })

    return this
}

const userOne = new User("sonu",12,true) // new kaywords prevents to overriding value
const usertwo= new User("sunny",23,false) 
console.log(userOne.constructor);
// console.log(usertwo);
