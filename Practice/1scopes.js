function one(){
    const username = "sonu"

    function two(){
        const website = "you tube"
        console.log(username)
    }
    // console.log(website)

    // two();
}

// one()

// +++++++++++++++++ interesting +++++++++++++++

console.log(addOne(9)) // we can call it before initialization. because we can't hold this function inside a variable.
function addOne(num){
    return num + 1
}


console.log(addTwo(12)) // we can not call this before intialization.  
const addTwo = function(num){
    return num + 2;
}