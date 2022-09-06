const reduce = (arr, f, initValue) => {
  if (!Array.isArray(arr)) return initValue;
  let i = 0;
  let ret = initValue ?? ((i += 1), arr[0]);
  //   if (!initValue && initValue !== "") {
  //     ret = arr[0];
  //     i += 1;
  //   }
  for (; i < arr.length; i += 1) {
    ret = f(ret, arr[i]);
  }
  return ret;
};

//testcase
const assertReduce = (arr, f, initValue, expVal) => {
  const myReduce = reduce(arr, f, initValue);
  console.log(
    arr,
    `${f}, ${initValue} ==> ${myReduce} :  ${myReduce === expVal && "통"}`
  );
};
console.time("Total");
console.time("1st");
assertReduce([1, 2, 3], (a, b) => a + b, 0, 6);
console.timeEnd("1st");
assertReduce([1, 2, 3, 4, 5], (a, b) => a * b, 1, 120);
assertReduce([1, 2, 3, 4, 5], (a, b) => a + b, "", "12345");
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, null));
// console.log(reduce([2, 2, 2], (a, b) => a * b));
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!
assertReduce([3, 3, 3], (a, b) => a * b, 0, 0);
assertReduce([3, 4], (a, b) => a, undefined, 3);
assertReduce(null, (a, b) => a * b, 0, 0);
console.timeEnd("Total");
