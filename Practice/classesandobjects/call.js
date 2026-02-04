function SetUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username,email,password){
    SetUsername.call(this.username)

    this.email = email,
    this.password = password;
}
const obj = new createUser("username","sonu@gmail.com","123467")
console.log(obj);