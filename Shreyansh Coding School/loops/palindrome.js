let num= 121
let original = num;
let reverse= 0;


while(num>0){
    let digit = num%10 ; // last digit
    reverse= reverse *10 + digit;
    num= Math.floor(num/10);  // remove one digit
}

if(original === reverse){
    console.log("palindrom")
}else "not plindropm"