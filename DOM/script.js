// This code will run when the HTML is loaded
console.log("JavaScript file is linked successfully!");


//  const head= document.getElementById("heading")
//  console.log(head)

//Get element by tag name 

// const head = document.getElementsByTagName("h1")
// console.log(head[1]) // Hello world

const res= document.querySelector('.first')
res.innerHTML= "JAva Script is A Dynamic language"
res.style.color="red"
// console.log(res)

// const result= document.createElement("h1")
// result.innerText="This is the HEading Create by JAvascript only"
// const parent= document.querySelector(".parent")
// parent.appendChild(result)

//DOM EVENT

const btn = document.querySelector("#btn")
const heading = document.querySelector("#heading");

btn.addEventListener("click",function(event){
    heading.style.color="red";
    heading.style.fontSize="60px"
    console.log("Button Clicked",event);
})


