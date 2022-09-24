import { randTime } from "../utils/math-utils.js";

function propro(cb) {
  propro.prototype.then = (tcb) => {
    if (this.res) tcb(res);
    return this;
  };
  propro.prototype.catch = (ccb) => {
    // propro.prototype.catchFn = ccb;
    if (this.rej) tcb(rej);
    return this;
  };
  propro.prototype.finally = (fcb) => {
    setTimeout(() => {
      fcb();
    }, 2000);
    return this;
  };

  const resolve = (succ) => {
    this.state = "fulfilled";
    this.res = succ;
    // this.thenFn && this.thenFn(succ);
    // this.finallyFn && this.finallyFn(succ);
  };
  const reject = (err) => {
    this.state = "rejected";
    this.rej = err;
    // if (this.catchFn) {
    //   // console.log(err);
    //   this.catchFn(err);
    //   delete this.catchFn;
    // }
    // this.finallyFn && this.finallyFn(err);
  };
  cb(resolve, reject);

  if (new.target) this.state = "pending";
}

const p = new propro((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    if (now % 2 === 0) resolve(console.log("fulfill", now));
    else reject(new Error("어디로?"));
  }, 1000);
});

p.then((res) => {
  console.log("p.then.res11>>>", res);
  return randTime(1);
})
  // .catch((err) => console.error("err-11>>", err))
  // .catch((err) => console.error("err-22>>", err))
  // .then((res) => {
  //   console.log("p.then.res22>>>", res);
  //   return "FiNALLY";
  // })
  .then(console.log("p.then.res33!!!"));
// .then((res) => res || "TTT")
// .finally(() => console.log("finally-11"))
// .finally(() => console.log("finally-22"));
