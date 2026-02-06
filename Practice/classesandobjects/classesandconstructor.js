class User {
    constructor(username,email,password){
        this.username= username,
        this.email= email,
        this.password= password
    }

    encryptPassword(){
        return `${this.password}abc`   
    }
    convetIntoUpper(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("sonu","abc@gmail.com","12345");
console.log(chai.encryptPassword())
console.log(chai.convetIntoUpper())