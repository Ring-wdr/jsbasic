const LINE2 = "";
const ARR = [1, 2, 3, 4, 5];
const calc = (arr, cb) => {
  const result = [];
  for (let a of arr) {
    result.push(cb(a));
  }

  return result;
};

const powSqrtByForOf = (arr) => {
  if (!Array.isArray(arr) || arr.some((a) => !Number.isInteger(a)))
    throw new Error("정수 배열만 허용됩니다!");

  const arrPow = calc(arr, (a) => a ** 2);
  const arrSqrt = calc(arr, Math.sqrt);

  return [arrPow, arrSqrt];
};

const powSqrtByForOf2 = (arr) => {
  const arrPow = [];
  const arrSqrt = [];
  for (let a of arr) {
    arrPow.push(a ** 2);
    arrSqrt.push(Math.sqrt(a));
  }

  return [arrPow, arrSqrt];
};

const powSqrtByForEach = (arr) => {
  const arrPow = Array(arr.length).fill(0);
  const arrSqrt = [];
  arr.forEach((a, i) => {
    arrPow[i] = a ** 2;
    arrSqrt[i] = Math.sqrt(a);
  });

  return [arrPow, arrSqrt];
};

const powSqrtByMap = (arr) => [
  [...arr.map((a) => a ** 2)],
  [...arr.map(Math.sqrt)],
];

const push = (arr, ...args) => [...arr, ...args];
const pop = (arr, cnt = 1) => arr.filter((_, i) => i < arr.length - cnt);

const shift = (arr, cnt = 1) => arr.filter((_, i) => i >= cnt);
const unshift = (arr, ...args) => [...args, ...arr];

const deleteArray = (arr, start, end = arr.length) => {
  const isDeleteRange = (x) => x < start || x >= end;
  return arr.filter((_, i) => isDeleteRange(i));
};

const USERS = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (arr, keyOrIndex, value) => {
  const isDeleteByIndex = typeof keyOrIndex === "number";
  return arr.filter((obj, i) =>
    isDeleteByIndex ? i !== keyOrIndex : obj[keyOrIndex] !== value
  );
};

const splice = (arr, idx, delCnt = arr.length - 1, ...insertions) => [
  ...arr.slice(0, idx),
  ...insertions,
  ...arr.slice(idx + delCnt),
];
export {
  LINE2,
  USERS,
  ARR,
  calc,
  powSqrtByForEach,
  powSqrtByForOf,
  powSqrtByForOf2,
  powSqrtByMap,
  push,
  pop,
  shift,
  unshift,
  deleteArray,
  deleteObjectArray,
  splice,
};
