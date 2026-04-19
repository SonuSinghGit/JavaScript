
//functions and parameters
// function dance(val){
//     console.log(`${val} nach raha hai..!`)
// }
// dance("ghoda");
// dance("dog")

// function abcd(val){
//     return 12 + val;
// }

// let val = abcd(23);
// console.log(val)

//Closures -> ek function jo return kare ek aur function. aur return hone wala function hamesha use karega parent fun ka koi variable.
function abcd(){
    let a= 10;
    return function(){
        console.log(a);
    }

}
// abcd()() //call 
let res= abcd()
res()  // another way to call