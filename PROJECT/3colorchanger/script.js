const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
// console.log(buttons)

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    //  console.log("event",e)
    //  console.log("target",e.target)
    if (e.target.id === "gray") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      if (e.target.id === "black") {
        body.style.color = "white";
      }
      body.style.backgroundColor = e.target.id;
    }
  });
});
