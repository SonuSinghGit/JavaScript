function usermessage(username){
    if(username===undefined)
    {
        console.log("please enter valid user name: ")
        return
    }

    return `${username} just logged in`

}

console.log(usermessage("sonu"))