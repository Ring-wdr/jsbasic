// try this first page:
arr = [1, 4, 9];

const calc = (arr, cb) => {
  const result = [];
  for (let a of arr) {
    result.push(cb(a));
  }
  return result;
};

const powSqrtByForOf = (arr) => {
  // if (!Array.isArray(arr) || arr.every((a) => Number.isInteger(a))) {
  if (!Array.isArray(arr) || arr.some((a) => !Number.isInteger(a))) {
    // isNaN.Number(a)
    throw new Error("Only Integer array is allowed!!");
  }
  const arrPow = calc(arr, (a) => a ** 2);
  const arrSqrt = calc(arr, Math.sqrt);
  return [arrPow, arrSqrt];
};

const powSqrtByForEach = (arr) => {
  const arrPow = Array(arr.length).fill(0);
  const arrSqrt = []; // 동적이라 크게 차이 없음
  arr.forEach((val, idx) => {
    arrPow[idx] = val ** 2;
    arrSqrt[idx] = Math.sqrt(val);
  });

  return [arrPow, arrSqrt];
};

const powSqrtByMap = (arr) => {
  return [arr.map((val, _) => val * val), arr.map(Math.sqrt)];
};

console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));

/// second page

const push = (arr, ...args) => [...arr, ...args];

const pop = (arr, cnt = 1) => arr.filter((_, i) => i < arr.length - cnt);

const shift = (arr, cnt = 1) => arr.filter((_, i) => i >= cnt);

const unshift = (arr, ...args) => [...args, ...arr];

// third page

const deleteArray = (arr, start, end = arr.length) => {
  return arr.filter((_, i) => i < start || i >= end);
};

const deleteObjectArray = (arr, keyOrIdx, value) => {
  // if (typeof keyOrIdx === 'number') return arr.filter((_,i) => i !== keyOrIdx);
  // arr.filter((obj,_) => obj[keyOrIdx] !== value);
  const isIdx = typeof keyOrIdx === "number";
  arr.filter((obj, idx) =>
    isIdx ? idx !== keyOrIdx : obj[keyOrIdx] !== value
  );
};

// reverse ans

const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = (arr) =>
  arr.map((_, i) => {
    arr[arr.length - 1 - i];
  });
makeReverseArray(a11);

const reverseArray = (arr) => {
  const maxIdx = arr.length;
  for (let i = 0; i < parseInt(arr.length / 2); i += 1) {
    [arr[i], arr[maxIdx - i - i]] = [arr[maxIdx - i - i], arr[i]];
  }
};
