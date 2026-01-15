// This code will run when the HTML is loaded
console.log("JavaScript file is linked successfully!");

const bulb = document.querySelector("#bulb");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
    console.log(bulb.src);
  if (bulb.src.match("off")) {
    bulb.src = "./bulb-onn.jpg";
    btn.innerHTML="Turn of"
  } else {
    bulb.src = "./bulb-off.jpg";
    btn.innerHTML="Turn On"
  }
  
});
