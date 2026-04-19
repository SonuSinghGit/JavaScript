// function test(...val){
   
//    const res = val.map((v) =>  v*2)
//      console.log(res)
// }

// test(3,34,45,5,5,65)

// Use rest parameter to accept any number of scores and returns a total
// function test(...value){
//       console.log(value)   [ 2, 33, 55, 45 ]
//           // Using Reduce
//       const result = value.reduce((acc,val)=>{
//            return acc+val
//       },0)
//          return result

//           // Using foreach loop
//          let total =0;
//           value.forEach((val)=>{
//             total = total + val;
//           })
//           return total;

      
// }
// const res =test(2,33,55,45)
// console.log(res);

// Pass a function into another function and execute it inside.

// function abcd(val){
//         val();
// }
// abcd(function(){
//       console.log("hello");
// })


//BMI Calculator
// function BMI( weight,height){
//     return weight/(height*height)
// }

// const res =BMI(63,1.7)
// console.log(Math.floor(res))

// Create a reusable discount calculator(hof)

function dicountCalculator(discount){
    return function (price){
        return price - price*(discount/100);
    }

}
let ten = dicountCalculator(10);
let twenty = dicountCalculator(20);

console.log("10 percent",ten(100))
console.log("20 percent",twenty(100))