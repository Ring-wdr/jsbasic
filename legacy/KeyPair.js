const keyPair = (arr, N) => {
  const sortedArr = arr
    .map((val, idx) => [val, idx])
    .sort((a, b) => a[0] - b[0]);
  let s = 0;
  let e = arr.length - 1;
  let temp;
  while (s < e) {
    temp = sortedArr[s][0] + sortedArr[e][0];
    if (temp == N) {
      return [sortedArr[s][1], sortedArr[e][1]];
    } else if (temp < N) {
      s += 1;
    } else {
      e -= 1;
    }
  }
};

const keyPair2 = (arr, N) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == N) return [i, j];
    }
  }
};
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
console.time("twopointer");
console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
console.timeEnd("twopointer");

console.log(keyPair2([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair2([1, 2, 4, 3, 6], 10)); // [2, 4]
console.time("twoforloop");
console.log(keyPair2([1, 2, 3, 4, 5], 9)); // [3, 4]
console.timeEnd("twoforloop");
