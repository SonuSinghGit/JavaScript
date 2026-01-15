console.log("JavaScript file is linked successfully!");

// const user={
//     name:"sonu",
//     age:22,
//     marks:89
// }

// const {name,age,marks}=user

// console.log(name)

// const data=["rakesh",30,"engineer"]
// const  [name,age,profession]=data;
// console.log(name)//rakesh

// Default Parameter

// const register=((name,password,image="iamag.wep")=>{
   
//     // const img= image || "test.png"
//    console.log(name,password,image)
// })

// register("sonu","234tghj","myimage.png");

//Spread ... opretor

// const lag= ["c","c++","java","javascript"]

// const newlan=["typescript",...lag,"node"]
// console.log(newlan)

const settings={
    volume:10,
    brightness:80
}

const newsetting={...settings}
console.log(newsetting)