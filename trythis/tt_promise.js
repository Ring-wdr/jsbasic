import { assertArray } from "../utils/test-utils.js";

const depthFn = (depth = 1) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      if (depth < 3) {
        res(depth + 1);
      } else rej(new Error("Already 3-depth"));
    }, depth * 1000);
  });

const randTime = (val) =>
  new Promise((res, rej) => {
    const state = Math.random() * 1000;
    console.log(val, state);
    setTimeout(() => {
      res(val);
    }, state);
  });

const promiseFn = (id = 1) =>
  new Promise((resolve, reject) => {
    console.log("id>>", id);
    if (id < 7) resolve(id + 1);
    else reject(new Error("어디로?" + id));
  });
/**
 * Creates a Promise that is resolved with an array of results when all of the provided Promises
 * resolve, or rejected when any Promise is rejected.
 * @param {Iterable<Promise>}values An iterable of Promises.
 * @returns A new Promise.
 */
function promissAll(values) {
  if (values.length === 0) return Promise.reject("array is empty");
  return new Promise((resolve, reject) => {
    const result = [];
    let cnt = values.length;
    values.forEach((prm, idx) => {
      prm
        .then((res, rej) => {
          result[idx] = res;
          cnt -= 1;
          cnt === 0 && resolve(result);
        })
        .catch(reject);
    });
  });
}

// async function apromissAll(values) {
//   if (values.length === 0) return Promise.reject("array is empty");
//   return new Promise((resolve, reject) => {
//     const result = [];
//     let cnt = values.length;
//     values.forEach(async (prm, idx) => {
//       try {
//         result[idx] = await prm;
//         cnt -= 1;
//         cnt === 0 && resolve(result);
//       } catch (err) {
//         reject(err);
//       }
//     });
//   });
// }

const promiseAll2 = async (promises) => {
  const results = [];
  console.time("asyncTest");
  for (const promi of promises) {
    results.push(await promi); //prom.then()
  }
  console.timeEnd("asyncTest");
  return results;
};

switch (parseInt(process.argv[2])) {
  case 1:
    depthFn()
      .then(depthFn)
      .then(depthFn)
      .catch((err) => console.log(err));

    console.log("START", new Date());
  case 2:
    [1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));
    break;
  case 3:
    promiseFn(1)
      .then((res) => {
        console.log("res1>>", res);
        promiseFn(res); // Need Return the Promise Object!!
      })
      .then((res) => {
        console.log("res2>>", res); // undefined
        // if (!res) throw new Error("No valid resolve!!");
        if (!res || res instanceof Promise)
          return Promise.reject("No valid resolve!!");
        else return promiseFn(res ?? 3);
      })
      .catch((err) => console.log("Error!!>>", err));
    break;
  case 4:
    const vals = [1, 2, 3];
    promissAll([randTime(1), randTime(2), randTime(3)]).then((arr) => {
      console.table(arr);
      assertArray(arr, vals);
    });
    promissAll([randTime(11), Promise.reject("RRR"), randTime(33)])
      .then((array) => {
        console.log("여긴 과연 호출될까?!");
      })
      .catch((error) => {
        console.log("reject!!!!!!>>", error);
      });
    break;
  case 5:
    promissAll([]).then(console.table).catch(console.error);
    break;
  case 6:
    promiseAll2([randTime(1), randTime(2), randTime(3)]).then((arr) => {
      console.table(arr);
      assertArray(arr, [1, 2, 3]);
    });
    // promiseAll2([randTime(11), Promise.reject("RRR"), randTime(33)])
    //   .then((array) => {
    //     console.log("여긴 과연 호출될까?!");
    //   })
    //   .catch((error) => {
    //     console.log("reject!!!!!!>>", error);
    //   });
    break;
  default:
    console.log("you put the wrong number on args:");
    console.log("usage: node tt_promise.js <<number>>");
}

// terminal();

export { randTime, promiseFn };
