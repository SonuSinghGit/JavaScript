function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

// let employee = {
//     details: function (role, experience) {
//         return this.name + " " + this.id + role + experience;
//     }
// }

// // Objects declaration
// let emp1 = {
//     name: "A",
//     id: "123",
// }
// let emp2 = {
//     name: "B",
//     id: "456",
// }
// let x = employee.details.call(emp2, " Manager ", "4 years");
// console.log(x);
