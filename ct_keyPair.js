const keyPair2 = (arr, n) => {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] + arr[j] === n) return [i, j];
    }
  }
}; // O(n^2)

const keyPair = (arr, n) => {
  // {8 : 0, 7: 1, 3 :2 4: 3 5: 4} to be 9
  const diffIdx = {};
  /*
        n = 7, arr[1,2,3,4,5]
        i:      0   1   2   3   4
        val:    1   2   3   4   5
        diff:   6   5   4   3   2
        {6:0, 5:1, 4:2}
    */
  for (let i = 0; i < arr.length; i += 1) {
    const val = arr[i];
    const diff = n - val;
    if (diffIdx.hasOwnProperty(val)) {
      return [diffIdx[val], i];
    } else {
      diffIdx[diff] = i;
    }
  }
}; //O(mn)
console.log(keyPair([1, 2, 3, 4, 5], 6)); // [3, 4]

console.log(keyPair([1, 2, 3, 4, 5], 9)); // [3, 4]
console.log(keyPair([1, 4, 45, 6, 10, 8], 16)); // [3, 4]
console.log(keyPair([1, 2, 4, 3, 6], 10)); // [2, 4]
