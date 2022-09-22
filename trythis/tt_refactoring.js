import { randTime } from "../utils/math-utils.js";
import { promiseFn } from "../utils/utils.js";

switch (parseInt(process.argv[2])) {
  case 1:
    const myFetch = () =>
      // new Promise((resolve, reject) =>
      fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    // );
    break;
  case 2:
    // let result;
    promiseFn().then((res) => {
      // result = res;
      otherFunction(res);
    });

    break;
  case 3:
    const getAllUsers = (sql) =>
      new Promise((resolve, reject) =>
        query.execute(sql, (err, rs) => {
          if (err) return reject(err);
          const results = [];
          while (rs.next()) {
            results.push(rs.getRow());
            !rs.next() && resolve(results);
          }
        })
      );
    break;
  case 4:
    try {
      randTime(1)
        // .then((res) => res)
        .then((res) => {
          console.log("res>>", res);
          throw new Error("XXX");
        })
        .catch((err) => {
          console.log("error!!!", err);
          throw err;
        });
    } catch (Err) {
      console.error("@@@@@@@Err>>", Err);
    }
    break;
  case 5:
    promiseFn().then(
      // 2개 인수 then
      (res) => validFn(res), // resolve
      handleError // reject
    );
    // .catch(handleError);

    break;
  default:
    console.log("usage: node tt_refactoring.js [[number]]");
}
