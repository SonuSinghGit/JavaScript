function loggedInMessage(userName = "sam") {
  if (!userName) {
    console.log("please enter username");
    return;
  }

  return `${userName} just Logged In`;
}
const message = loggedInMessage();
// console.log(message)

function calculateCardPrice(...num1) {
  return num1;
}
const res = calculateCardPrice(344, 56, 454, 655);
// console.log(res);
const mappedValue = res.map((value) => {
  // console.log(value). wrong array always return a new array
  return value * 2;
});
// console.log("mappped value :", mappedValue);

// passed an object inside FUNCTION

const user = {
  name: "sonu",
  price: 400,
  age: 23,
};

function handleUser(getUser) {
  return `User Name is: ${getUser.name} and Price is : ${getUser.price}`;
}
// console.log(handleUser(user)) another way to pass below
console.log(handleUser({
    name:"sonu",
    price:300
}))

// PASSED AN ARRAY INSIDE A FUNCTION

const myArray = [122,344,343,455]

function handleArray(getArray){
    return getArray[2]
}
// console.log(handleArray(myArray)) another way to pass below syntax
console.log(handleArray(
    [344,4545,45,65]
))
