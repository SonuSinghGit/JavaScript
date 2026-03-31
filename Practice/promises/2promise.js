// promise race (the promise who is resolved first is returned)

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// Expected output: "two"

// PROMIS .ALL

// const p1 = Promise.resolve("First");
// const p2 = Promise.resolve("Second");
// const p3 = Promise.resolve("Third");

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// PROMISE .ALL SETTLED
// const p4 = Promise.resolve("Success 1");
// const p5 = Promise.reject("Failed 2");
// const p6 = Promise.resolve("Success 3");

// Promise.allSettled([p1, p2, p3])
//     .then((results) => {
//         console.log(results);
//     });

// const p7 = Promise.reject("Error 1");
// const p8 = Promise.resolve("Success 2");
// const p9 = Promise.resolve("Success 3");

// Promise.any([p1, p2, p3])
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err));