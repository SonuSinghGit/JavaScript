// for loop
for (let i = 0; i <=10; i++) {
    const element = i;
    if(element ===5){
        // continue;
        break;
    }
    // console.log(element);
    
}
// console.log(element) // error element can not be accessible because of scope

for(let i=0; i<=10;i++){
    // console.log(`Outer loop : ${i}`)
    for(let j=0; j<=10; j++){
    //    console.log(`innner loop value: ${j} : outer loop value: ${i}`)
    // console.log(i + "*" + j + ` = `+ i*j);  // table print

    }
}


const myArray = ["flash", "abad", "asdsf"];
for(let i=0; i<myArray.length;i++){
    const element= myArray[i];
    // console.log(element)
}

// WHILE AND DO WHILE LOOP
let index= 0
while (index<=10) {
    // console.log(`value od index is: ${index}`)
    index= index+2
}
const myarray = [23,23,43];
let arr = 0
while (arr < myarray.length) {
    // console.log(`value is ${myarray[arr]}`)
    arr = arr + 1;
        
}

// FOREACH LOOP

const coding = ["c","c++","php","java","python","cpp"];

const res=coding.forEach((value)=>{
    // console.log(value)
    return value;   // undefined(foreach not return any value that why map use)
})
// console.log(res)


// interesting

function printMe(item){
    // console.log(item)
}
coding.forEach(printMe)

// coding.forEach((value,index,arr)=>{
//        console.log(value,index,arr)
// })

// how to iterate array of objects through for loop

const myCoding= [
    {
        languageName: "javascript",
        fileName:"js"
    },
     {
        languageName: "java",
        fileName:"java"
    },
     {
        languageName: "python",
        fileName:"py"
    },
]

myCoding.forEach( (value)=>{
        console.log(value.languageName , value.fileName);
})