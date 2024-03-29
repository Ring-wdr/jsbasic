import { ARR } from "../localdata.js";
const makeReverseArray = (arr) => arr.map((a, i) => arr[arr.length - 1 - i]);

console.log("makeReverseArray==>", makeReverseArray(ARR)); // [5, 4, 3, 2, 1] 반환, ARR은 변함 없음!!

const reverseArray = (arr) => {
  const maxIdx = arr.length - 1;
  for (let i = 0; i < parseInt(arr.length / 2); i += 1) {
    // const tmp = arr[i];
    // arr[i] = arr[maxIdx - i];
    // arr[maxIdx - i] = tmp;           O(n) -> O(1/2N) : O(mn)

    [arr[i], arr[maxIdx - i]] = [arr[maxIdx - i], arr[i]];
  }
};
reverseArray(ARR); // [5, 4, 3, 2, 1] 반환, ARR도 이 값으로 변경됨!
//                     1 2 3   4  5
console.log("ARR==>", ARR);
