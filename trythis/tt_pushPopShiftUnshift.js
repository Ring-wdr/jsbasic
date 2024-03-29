import {
  ARR as arr,
  USERS as users,
  push,
  pop,
  unshift,
  shift,
  deleteArray,
  deleteObjectArray,
} from "../localdata.js";

console.log(push(arr, 5, 6)); // [1, 2, 3, 4, 5, 6]
console.log(pop(arr)); // [1, 2, 3]
console.log(pop(arr, 2)); // 2개 팝! ⇒ [1, 2]
console.log(unshift(arr, 0)); // [0, 1, 2, 3, 4]
console.log(unshift(arr, 7, 8)); // [7, 8, 1, 2, 3, 4]
console.log(shift(arr)); // [2, 3, 4]
console.log(shift(arr, 2)); // [3, 4]
console.log(arr); // [1, 2, 3, 4]

console.log("===========================================");

console.log(deleteArray(arr, 2)); // [1, 2]
console.log(deleteArray(arr, 1, 3)); // [1, 4]

console.log(deleteObjectArray(users, 2)); // Hong, Kim
console.log(deleteObjectArray(users, "id", 2)); // Hong, Lee
console.log(deleteObjectArray(users, "name", "Lee")); // Hong, Kim
