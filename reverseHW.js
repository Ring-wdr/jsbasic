//memo FE쪽으로 깊이 할 사람 - 'Thymeleaf', 'JSTL' template engine

const a11 = [1, 2, 3, 4, 5];

const makeReverseArray = (arr) => {
  const maxIdx = arr.length - 1;
  return arr.map((_, idx) => arr[maxIdx - idx]);
};

console.log("reversed a11: ", makeReverseArray(a11));
console.log("original a11: ", a11);

const a12 = [1, 2, 3];

const reverseArray = (arr) => {
  // const maxIdx = arr.length;
  // array length는 array의 프로퍼티로 존재
  // let temp; // 3 / 2 = 1.4999999
  const loop = parseInt(arr.length / 2);
  for (let i = 0; i < loop; i++) {
    [arr[i], arr[arr.length - i - 1]] = [arr[arr.length - i - 1], arr[i]];
    // primitive일때는 생성시 부담이 적다. 변수 스코프가 적다.(!)
    // but arr.length = 1_000_000 * 8 => 8mb ... 요즘은 큰 부담이 아님
    // Thus, if temp is primitive const ok, else if temp is obj use outer scope.
    // const temp = arr[i];
    // arr[i] = arr[arr.length - i - 1];
    // arr[arr.length - i - 1] = temp;
  }
};

reverseArray(a12);
console.log(a12);

// const makeReverseArray2 = (arr) => {
//   const maxIdx = arr.length;
//   const result = [];
//   let tmp = parseInt(maxIdx / 2);
//   if (maxIdx % 2 != 0) {
//     result.push(arr[tmp]);
//   }
//   while (tmp-- != 0) {
//     result.unshift(arr[maxIdx - 1 - tmp]);
//     result.push(arr[tmp]);
//   }
//   return result;
// };
// console.log(makeReverseArray2(a11));
// console.log(makeReverseArray2(a12));
