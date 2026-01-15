// function usermessage(username){
//     if(username===undefined)
//     {
//         console.log("please enter valid user name: ")
//         return
//     }

//     return `${username} just logged in`

// }

// console.log(usermessage("sonu"))


function fact(n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= i;
    }
    return res;
}
console.log(fact(5));