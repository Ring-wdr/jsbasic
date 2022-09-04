import { ARR, calc } from "../localdata.js";
/*
 → 배열의 각 요소를 제곱
 → 배열 각 요소의 제곱근
 → 배열의 각 요소를 세제곱
 */

const pow = (a) => a ** 2;
const pow3 = (a) => a ** 3;

const ax = [pow, Math.sqrt, pow3].reduce((ret, fn) => calc(ret, fn), ARR);
const ax2 = [pow, Math.sqrt, pow3].reduce(
  (ret, fn) => ret.map((a) => fn(a)),
  ARR
);
console.log(ax);
console.log(ax2);
