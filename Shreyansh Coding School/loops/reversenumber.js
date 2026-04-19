
// let num = 1234;
// let reverse = 0;

// while(num>0){
//     let digit = num%10 // get last digit
//     reverse = reverse * 10 + digit;
//     num= Math.floor(num/10); // ek digit hata do, har bar 10 se divide karne par ek digit hat jata h
// }
// console.log("Reverse Number Are",reverse);


// REVERSE A STRING 

let str = "sonu kumar";
let reverse = "";

for(let i=str.length-1; i>=0; i--){
    reverse +=str[i]; 
}

console.log(reverse)
