import { LINE2 } from "./localdata.js";
class Subway {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  *[Symbol.iterator]() {
    let idx = LINE2.indexOf(this.start) - 1;
    let done = false;
    while (!done) {
      idx = idx === LINE2.length - 1 ? 0 : idx + 1;
      done = done || LINE2[idx] == this.end;
      yield LINE2[idx];
    }
  }
}

const routes = new Subway("문래", "신림");
const it1 = routes[Symbol.iterator]();
console.log([...routes]); // [ '문래', '대림', '구로디지털단지', '신대방', '신림' ]
// while (true) {
//   const x = it1.next();
//   console.log(x);
//   if (x.done) break;
// }

const routes2 = new Subway("구로디지털단지", "성수");
console.log([...routes2]); // ['구로디지털단지', '신대방', ..., '성수']
const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
