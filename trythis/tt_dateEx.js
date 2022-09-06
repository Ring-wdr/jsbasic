import { rand } from "../utils/math-utils.js";
import { WEEKS } from "../utils/date-utils.js";

const d1 = new Date(1970, 0, 1); // Thu Jan 01 1970 00:00:00 GMT+0900 (한국 표준시)
const d2 = new Date(0); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)
const d3 = new Date(1970, 0, 1, 9); // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

console.log(d2.toLocaleString());
console.log(d2.toUTCString());
////
console.log("============================");
//1.
console.log((new Date(1970, 0, 2) - new Date(1970, 0, 1)) / 1000);

// 5개 날짜 구해서 역순으로 정렬
const reverseArr = Array(5)
  .fill(0)
  .map(() => new Date(2022, 7, rand(2, 31)))
  .sort((a, b) => b - a);
console.log(reverseArr);

//20230830
console.log(`${WEEKS[new Date(2023, 7, 30).getDay()]}요일`);

//20220830 + 100
const today = new Date();
console.log(new Date(today.setDate(today.getDate() + 100)).toDateString());
