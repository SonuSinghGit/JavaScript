//rest

// function addnum(a,b,c,...othert){
//     console.log(othert);//8,9
//     const res = a+b+c;
//     return res;    
// }
// const result = addnum(3,4,5,8,9);
// console.log(result);


//spread operator 
const names =['sonu','aman','atul'];

function getname(num1,num2,num3){
    console.log(num1,num2,num3);
}
getname(...names);
