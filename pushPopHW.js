const arr = [1, 2, 3, 4];

const push = (arr, ...args) => {
  return arr.concat(...args);
};

const pop = (arr, number = 1) => {
  return arr.filter((val, idx) => idx <= arr.length - number - 1);
};

const unshift = (arr, ...args) => {
  return args.concat(arr);
};

const shift = (arr, number = 1) => {
  return arr.filter((val, idx) => idx >= number);
};

console.log(push(arr, 5, 6), "and origin arr is ", arr);
console.log(pop(arr), "and origin arr is ", arr);
console.log(pop(arr, 2), "and origin arr is ", arr);
console.log(unshift(arr, 0));
console.log(unshift(arr, 7, 8));
console.log(shift(arr), "and origin arr is ", arr);
console.log(shift(arr, 2), "and origin arr is ", arr);
