const LINE2 = [
  "신도림",
  "성수",
  "신설동",
  "용두",
  "신답",
  "용답",
  "시청",
  "충정로",
  "아현",
  "이대",
  "신촌",
  "공항철도",
  "홍대입구",
  "합정",
  "당산",
  "영등포구청",
  "문래",
  "대림",
  "구로디지털단지",
  "신대방",
  "신림",
  "봉천",
  "서울대입구",
  "낙성대",
  "사당",
  "방배",
  "서초",
  "교대",
  "강남",
  "역삼",
  "선릉",
  "삼성",
  "종합운동장",
  "신천",
  "잠실",
  "잠실나루",
  "강변",
  "구의",
  "건대입구",
  "뚝섬",
  "한양대",
  "분당선",
  "왕십리",
  "상왕십리",
  "신당",
  "동대문역사문화공원",
  "을지로4가",
  "을지로3가",
  "을지로입구",
];

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
