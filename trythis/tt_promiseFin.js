// import { randTime } from "../utils/math-utils.js";

const randTime = (val) =>
  new propro((res, rej) => {
    const state = Math.random() * 1000;
    console.log(val, state);
    setTimeout(() => {
      res(val);
    }, state);
  });
class propro {
  #tcb;
  #ccb;
  #value;

  constructor(cb) {
    this.state = "pending";
    cb(this.#resolve, this.#reject);
  }

  #runCb() {
    if (this.state === "fulfilled" && this.#tcb) {
      this.#tcb(this.#value);
      // this.state = "pending";
    }
    this.state === "rejected" && this.#ccb && this.#ccb(this.#value);
  }

  #resolve = (succ) => {
    if (this.state !== "pending") return;

    if (succ instanceof Promise || succ instanceof propro) {
      succ.then(this.#resolve, this.#reject);
      return;
    }
    this.#value = succ;
    this.state = "fulfilled";
    this.#runCb();
  };

  #reject = (err) => {
    if (this.state !== "pending") return;

    if (err instanceof Promise || err instanceof propro) {
      err.catch(this.#resolve, this.#reject);
      return;
    }
    this.#value = err;
    this.state = "rejected";
    this.#runCb();
  };

  then(tcb, ccb) {
    return new propro((resolve, reject) => {
      this.#tcb = (result) => {
        // res => res
        if (!tcb) {
          resolve(result);
          return;
        }

        try {
          resolve(tcb(result));
        } catch (error) {
          reject(error);
        }
      };

      this.#ccb = (result) => {
        // rej => rej
        if (!ccb) {
          reject(result);
          return;
        }

        try {
          resolve(ccb(result));
        } catch (error) {
          reject(error);
        }
      };

      this.#runCb();
    });
  }

  catch(cb) {
    return this.then(undefined, cb);
  }

  finally(cb) {
    return this.then((result) => {
      cb();
      return result;
    });
  }
}

const p = new propro((resolve, reject) => {
  setTimeout(() => {
    const now = Date.now();
    // if (now % 2 === 0) resolve(console.log('fulfill', now));
    if (now % 2 === 0) resolve(now);
    else reject(new Error("어디로?"));
  }, 1000);
});

p.then((res) => {
  console.log("p.then.res11>>>", res);
  return randTime(1);
})
  .catch((err) => console.error("err-11>>", err))
  .catch((err) => console.error("err-22>>", err))
  .then((res) => {
    console.log("p.then.res22>>>", res);
    return "FiNALLY";
  })
  .then(console.log("p.then.res33!!!"))
  .then((res) => res || "TTT")
  .finally(() => console.log("finally-11"))
  .finally(() => console.log("finally-22"));
