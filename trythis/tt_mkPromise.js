function MyPromise(cb) {
  const promise = { state: "pending" };
  let first, second;
  const resolve = (input) => {
    console.log("resolve", input);
    promise.state = "resolve";
    first = input;
  };
  const reject = (input) => {
    console.log("reject", input);
    promise.state = "reject";
    second = input;
  };
  cb(resolve, reject);
  return promise;
}
// console.log(
//   MyPromise((res, rej) => {
//     res(1);
//     rej(2);
//   })
// );

const p = MyPromise((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const now = Date.now();
//     if (now % 2 === 0) resolve(console.log("fulfill", now));
//     else reject(new Error("어디로?"));
//   }, 1000);
// });

console.log("111>>", p);
setTimeout(() => console.log("222>>", p), 2000);
