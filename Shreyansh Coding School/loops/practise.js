//1. print numbers from 1 to 10 using for loop

// for(let i=1; i<=10;i++){
//     console.log(i)
// }

//2. Print numbers from 10 to 1 using a while loop

// let i= 10
// while(i>=1){
//     console.log(i);
//     i--
// }

//3. print even numbers from 1 to 20 using a foor loop

// for(let i=1; i<=20;i++){
//     if(i%2==0){
//         console.log(i)
//     }
// }

//4. print odd numbers from 1 to 15 using a while loop

// let i= 1
// while(i<=15){
//     if(i%2 !== 0){
//         console.log(i)
//     }
//     i++
// }

//5. print the multiplication of table of 5

// for(let i=1; i<=10; i++){
//     console.log(`multiplication of 5 is 5x${i}=`, i*5)
// }

//6. find the sum of numbers from 1 to 100 using a loop

// let sum = 0
// for(let i=1; i<=100;i++){
//      sum = sum +i ;
// }
//  console.log("sum of the number is:",sum)

// Another way
// let n = 100;
// let sum = (n * (n + 1)) / 2;

// console.log("Final Sum:", sum);

//7. Print All nubers between 1 to 50 that are divisible by 3

// for(let i=1; i<=50; i++){
//     if(i%3===0){
//         console.log(i)
//     }
// }

//8. Ask the user for a number and print whether each number from 1 to that number is even or odd.

// let val = prompt("give a numner");   // open inside html page for broser input
// for(let i=1; i<=val; i++){
//     if(i % 2 === 0){
//         console.log(`${i} is even`)
//     }
//     else{
//         console.log(`${i} is odd`)
//     }
// }

// 9 . Count how many numbers between 1 to 100 are divisible by both 3 and 5
let count = 0;
for(let i=1; i<=100; i++){
    if(i%3==0 && i%5==0){
        count++;
    }
}
console.log("count of numbers divisible by both 3 and 5 is:", count)