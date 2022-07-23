const arr = [1, 2, 3];
// console.log(arr.reduce((a, b) => a + b, 0));
// to > reduce(arr, (a,b) => a + b, 0);

//1. index 관리를 통해 고차함수 구현 arr만 일단
const reduce = (arr, f, init) => {
  let result;
  if (init !== undefined) {
    result = init;
  } else {
    result = arr[0] !== 0 && f(arr[0], 0) == 0 ? 1 : 0;
  }
  for (let ele of arr) {
    result = f(result, ele);
  }
  return result;
};

const reduceFixed = (arr, f, index) => {
  // error 날리려면 Array.isArray(arr) 시 throw
  let result;
  let i = 0;
  result = index ?? ((i += 1), arr[0]);
  for (; i < arr.length; i++) {
    result = f(result, arr[i]);
  }
  return result;
};

const reduceTY = (arr, f, index) => {
  // error 날리려면 Array.isArray(arr) 시 throw
  let i = index ? 0 : 1;
  let curr = index ?? arr[0];
  for (; i < arr.length; i++) {
    curr = f(curr, arr[i]);
  }
  return curr;
};

console.log(reduce([0, 1, 2, 3], (a, b) => a + b, undefined));
console.log(reduce([0, 1, 2, 3], (a, b) => a + b, null));

console.log(reduceFixed([0, 1, 2, 3], (a, b) => a + b, undefined));
console.log(reduceFixed([0, 1, 2, 3], (a, b) => a + b, null));

console.log(reduceTY([0, 1, 2, 3], (a, b) => a + b, undefined));
console.log(reduceTY([0, 1, 2, 3], (a, b) => a + b, null));

// return;
console.log(reduce([0, 1, 2, 3], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1));
console.log(reduce([2, 2, 2], (a, b) => a * b));

objList = [
  { nm: "kim", age: 25 },
  { nm: "hong", age: 22 },
  { nm: "park", age: 30 },
  { nm: "choi", age: 50 },
];
console.log(reduce(["apple", "banana", "mint"], (a, b) => a + b, "park"));
// console.log(
//   reduce(
//     [1, 2, 3, 4, 5],
//     (acc, cur) => {
//       if (cur % 2) acc.push(cur);
//       return acc;
//     },
//     []
//   )
// );
console.log(reduce(objList, (a, b) => a * b.age, 20));
console.log(reduce(objList, (a, b) => a + b.nm, "ddd"));
//2. 재귀함수를 통해 고차함수 구현
