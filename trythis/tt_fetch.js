import fetch from "node-fetch";
import co from "co";
const sampleUrl = "https://jsonplaceholder.typicode.com/users/1";

// fetch(sampleUrl)
//   .then((res) => res.json())
//   .then((user) => console.log(user.name));

function* genFetch(url, fromFn) {
  const res = yield fetch(url);
  const user = yield res.json();
  return console.log(fromFn, ">>>", user.name);
}

co(genFetch, "https://jsonplaceholder.typicode.com/users/2", "co");
/*
const g = fetchGen(sampleUrl);
// console.log(g);
const nextResult = g.next();

console.log(nextResult);
nextResult.value.then((res) => {
  const nr2 = g.next(res);

  //   console.log(nr2);
  nr2.value.then((res2) => console.log("res2>>", res2));
  //   console.log("res>>>>>", res);
});
*/
