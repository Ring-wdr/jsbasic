const arr = [1, 2, 3, 4];

// delete by spreaded idx
// const deleteArray = (arr, ...args) => {
//   return arr.filter((_, idx) => !args.find((val, _) => val === idx));
// };

const deleteArray = (arr, start, end) => {
  if (end < start) {
    console.log("error");
    return [];
  }
  return arr.filter((_, idx) => idx < start || idx >= (end ?? arr.length));
};

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3)); //[1, 4]

const arr2 = [1, 2, 3, 4, 5, 10, 9, 8, 7, 6];
// console.log(arr2.findLastIndex((a, i) => i == 3));
console.log(deleteArray(arr2, 1));

const users = [
  // { id: 0, name: "Park" },
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (arr, param1, param2) => {
  if (param2 !== 0 && !param2) return arr.filter((_, idx) => idx !== param1);
  return arr.filter((val) => val[`${param1}`] !== param2);
};

console.log(deleteObjectArray(users, 2));
console.log(deleteObjectArray(users, "id", 2));
console.log(deleteObjectArray(users, "name", "Lee"));
// console.log(deleteObjectArray(users, "id", 0));
