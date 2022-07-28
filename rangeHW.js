const getRange = (begin, end, interval = begin > end ? -1 : 1) => {
  // number < undefined always return false.
  //args가 정수인 경우 그대로 사용해도 순수 함수 ok
  const result = [];
  // if end is empty
  // end ?? ((end = begin), (begin = 1));
  const temp = begin;
  end = end ?? ((begin = 1), temp); //
  // interval treat
  // if (interval === undefined) {
  // interval = begin < end ? 1 : -1;
  // } else
  // if (interval === 0) {
  //   console.log("interval 0 is not allowed!!!");
  //   return result;
  // } else
  if ((end !== begin && interval === 0) || (end - begin) * interval < 0) {
    console.log("Wrong parameter!!!");
    return result;
  }

  const cnt = parseInt((end - begin) / interval) + 1;
  // const cnt = (end - begin) % interval + 1;

  const recursive = (cnt) => {
    if (cnt === 0) return;
    result.push(begin);
    begin += interval;
    return recursive(cnt - 1);
  };

  recursive(cnt);

  return result;
};
//ver2. 수정사항
//1. setInterval 수정
//2. if 줄이기
//3. 함수 내 함수 사용이 가독성이 떨어진다는 의견
// const printArrPrev = (...arr) => {
//   // const [x, y, z] = [...arr];
//   //   console.log("begin from " + x + " and end at " + y);
//   console.time("timecount");
//   console.log(getRange(...arr));
//   console.timeEnd("timecount");
// };

const printArr = (...arr) => {
  // const [x, y, z] = [...arr];
  //   console.log("begin from " + x + " and end at " + y);
  console.time("timecount");
  console.log(getRange(...arr));
  console.timeEnd("timecount");
};

// printArr(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// printArr(1, 10, 2); // [1, 3, 5, 7, 9]
// printArr(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// printArr(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// printArr(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// printArr(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
// printArr(5); // [1, 2, 3, 4, 5]
// printArr(100);
// printArr(1, 10, -3); // start smaller than end but interval is minus
// printArr(1, 10, 0);
// printArr(10, 10);
// printArr(1, 10, -1);/
// console.log([1, 2, 3, 4, 5, 6]);
printArr(-5); // need to be fixed
printArr(5, 5);
// printArr(5, 5, 0);
printArr(5, 5, -1);
printArr(5, 1, 1);
printArr(1, 5, -1);
printArr(1, 5, 6);
// printArr(1, 5, "");// next time
// const assertRange = (begin, end, interval, val) => {
//   if (begin === undefined) {
//     console.log("There's no input data.");
//   } else if (end === undefined) {
//     console.log("Please input validation arr");
//   } else if (interval === undefined) {
//     const result = getRange(begin);
//   } else if (val === undefined) {
//     const result = getRange(begin, end);
//   } else {
//     const result = getRange(begin, end, interval);
//   }
// };
