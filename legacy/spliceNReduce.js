// const dual = [1, 4, 9, 16];
// powSqrtThreePow
// const pow = (ele, cnt = 2) => {
//   return Array(cnt)
//     .fill(ele)
//     .reduce((s, a) => s * a);
// };

// const sqrt = (ele, float = 0.5) => {
//   return Array(ele)
//     .fill(0)
//     .map((_, i) => i + 1)
//     .find((val) => val ** (1 / float) === ele);
// };
// console.log(
//   arr
//     .map((val) => pow(val))
//     .map((val) => sqrt(val, 0.5))
//     .map((val) => pow(val, 3))
// );
const arr = [1, 2, 3, 4, 5];
console.log("-----powSqrt pure function-------");

console.log(
  arr
    .reduce((s, a) => [...s, a ** 2], [])
    .reduce((s, a) => [...s, a ** 0.5], [])
    .reduce((s, a) => [...s, a ** 3], [])
);

const pow = (a) => a ** 2;
const pow3 = (a) => a ** 3;

const calc = (arr, cb) => {
  const result = [];
  for (let a of arr) result.push(cb(a));
};

// const ax = [pow].reduce((ret, fn) => calc(ret, fn), arr);
// console.log(ax);

const ax2 = [pow, Math.sqrt, pow3].reduce(
  (ret, fn) => ret.map((a) => fn(a)),
  arr
);
console.log(ax2);

console.log("-----splice pure function-------");
//splice
const splice = (arr, start, deleteCount = arr.length - 1, ...items) => {
  const tempArr = [];
  tempArr.push(
    ...arr.slice(0, start),
    ...items,
    ...arr.slice(start + deleteCount)
  );
  return tempArr;
};

const a1 = splice(arr, 1, 3); // a1 = [1, 5]
const a2 = splice(a1, 1, 0, 2, 3, 4); // a2 = [1, 2, 3, 4, 5]
const a3 = splice(a2, 2); // a3 = [1, 2]
const a4 = splice(a3, 1, 1, 3, 4, 5); // a4 = [1, 3, 4, 5]
const a5 = splice(a4, 2, 2, 7, 8, 9);
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

const splice2 = (arr, idx, delCnt = arr.length - 1, ...insertions) => [
  ...arr.slice(0, start),
  ...insertions,
  ...arr.slice(start + deleteCount),
];
