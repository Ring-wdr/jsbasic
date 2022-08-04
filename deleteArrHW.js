const arr = [1, 2, 3, 4];

const deleteArray = (arr, ...args) => {
  return arr.filter((_, idx) => !args.find((val, _) => val === idx));
};

console.log(deleteArray(arr, 2));
console.log(deleteArray(arr, 1, 3));

const users = [
  { id: 1, name: "Hong" },
  { id: 2, name: "Kim" },
  { id: 3, name: "Lee" },
];

const deleteObjectArray = (arr, param1, param2) => {
  if (!param2) return deleteArray(arr, param1);
  else {
    return arr.filter((val, _) => val[`${param1}`] !== param2);
  }
};

console.log(deleteObjectArray(users, 2));
console.log(deleteObjectArray(users, "id", 2));
console.log(deleteObjectArray(users, "name", "Lee"));
