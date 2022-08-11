const arr = [1, 3, 4, 2, 5, 8, 6, 7, 9];

const rangeSum = (start, end) => {
  const accArr = [0, arr[0]];
  for (let i = 1; i < arr.length; i++) {
    accArr.push(arr[i] + accArr[i]);
  }
  return accArr[end + 1] - accArr[start];
};

const rangeSum2 = (start, end) => {
  return arr.slice(start, end + 1).reduce((s, a) => s + a);
};

// console.log(rangeSum2(2, 5));
// console.log(rangeSum2(3, 5)); // 15
// console.log(rangeSum2(1, 4)); // 14
// console.log(rangeSum2(5, 8)); // 30
// console.time("reduce");
// console.log(rangeSum2(6, 8)); // 22
// console.timeEnd("reduce");
// console.log(rangeSum2(2, 8)); // 41
// console.log(rangeSum2(4, 4)); // 5

console.log(rangeSum(2, 5)); // 19
console.log(rangeSum(3, 5)); // 15
console.log(rangeSum(1, 4)); // 14
console.log(rangeSum(5, 8)); // 30
console.time("acc");
console.log(rangeSum(6, 8)); // 22
console.timeEnd("acc");
console.log(rangeSum(2, 8)); // 41
console.log(rangeSum(4, 4)); // 5
