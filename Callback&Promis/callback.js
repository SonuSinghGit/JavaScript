// Senario

// 1. Register
// 2. Send Welcome Email
// 3. Login
// 4. Get User Data
// 5.Display User data

function Register(callback) {
  setTimeout(() => {
    console.log("register end");
    callback();
  }, 3000);
}

function SendEmail(callback) {
  setTimeout(() => {
    console.log("send email end");
    callback();
  }, 1000);
}

function Login() {
  setTimeout(() => {
    console.log("login end ");
  }, 1000);
}

function GetData() {
  setTimeout(() => {
    console.log("Get data end");
  }, 1000);
}

function DisplayData() {
  setTimeout(() => {
    console.log("display data");
  }, 2000);
}

Register(function () {
  SendEmail(function () {
    Login();
    GetData();
    DisplayData();
  });
});

console.log("Other Applicaton Data work here ...!!");
