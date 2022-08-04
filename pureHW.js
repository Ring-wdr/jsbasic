arr = [1, 4, 9];

const powSqrtByForOf = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("param is not array type!!");
    return;
  }
  const powArr = [];
  const sqrtArr = [];

  for (let element of arr) {
    powArr.push(element * element);
    sqrtArr.push(Math.sqrt(element));
  }
  return [powArr, sqrtArr];
};

const powSqrtByForEach = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("param is not array type!!");
    return;
  }

  const powArr = [];
  const sqrtArr = [];

  arr.forEach((val, idx) => (powArr[idx] = val * val));
  arr.forEach((val, idx) => (sqrtArr[idx] = Math.sqrt(val)));

  return [powArr, sqrtArr];
};

const powSqrtByMap = (arr) => {
  if (!Array.isArray(arr)) {
    console.log("param is not array type!!");
    return;
  }

  return [
    arr.map((val, idx) => val * val),
    arr.map((val, idx) => Math.sqrt(val)),
  ];
};
console.log(powSqrtByForOf(arr));
console.log(powSqrtByForEach(arr));
console.log(powSqrtByMap(arr));
