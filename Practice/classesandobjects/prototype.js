// let myName= "sonu        "
// let title = "  singh   "

// console.log(myName.trueLength)

let myhero = ["thor","spiderman"];

let heroPower = {
    thor:"hammer",
    spiderman:"sling",


    getSpiderPower: function(){
        console.log(`spiderpower is: ${this.spiderman}`);
    }
}


// INHERITANCE

const User ={
    name:"sonu",
    email:"google@gmail.com"
}

const Teacher = {
    makeVideo : true
}
const TeacherSupport = {
    isAvailable : true
}
const TASupport = {
    makeAssignment : "Js Assignment",
    fullTime:true,
    __proto__:TeacherSupport
}

Teacher.__proto__= User;

// modern syntax
Object.setPrototypeOf(TASupport,Teacher)