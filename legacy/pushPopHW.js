const arr = [1, 2, 3, 4];

const push = (arr, ...args) => {
  return arr.concat(...args);
};

const pop = (arr, number = 1) => {
  if (number > arr.length) {
    console.log(
      "OutOfBoundError:: 2nd param must be lower than length of Array."
    );
    return [];
  }
  return arr.filter((_, idx) => idx < arr.length - number);
};

const unshift = (arr, ...args) => {
  return args.concat(arr);
};

const shift = (arr, number = 1) => {
  if (number > arr.length) {
    console.log(
      "OutOfBoundError:: 2nd param must be lower than length of Array."
    );
    return [];
  }
  return arr.filter((_, idx) => idx >= number);
};

console.log(push(arr, 5, 6), "and origin arr is ", arr);
console.log(pop(arr), "and origin arr is ", arr);
console.log(pop(arr, 2), "and origin arr is ", arr);
console.log(pop(arr, 5), "and origin arr is ", arr);
console.log(unshift(arr, 0));
console.log(unshift(arr, 7, 8));
console.log(shift(arr), "and origin arr is ", arr);
console.log(shift(arr, 2), "and origin arr is ", arr);
console.log(shift(arr, 6), "and origin arr is ", arr);
