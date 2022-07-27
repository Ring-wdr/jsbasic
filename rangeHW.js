const getRange = (begin, end, interval) => {
  const result = [];

  const forLoop = (param1, param2, param3) => {
    for (let idx = 0; param1 <= param2; idx += 1) {
      if (param3 > 0) {
        result[idx] = param1;
        param1 += param3;
      } else {
        result[idx] = param2;
        param2 += param3;
      }
    }
  };
  const setInterval = () => {
    if (interval === undefined) {
      interval = begin < end ? 1 : -1;
    }
    if ((interval < 0 && begin < end) || (begin > end && interval > 0)) {
      console.log("loop will overflow!!!");
      return false;
    }
    return true;
  };

  if (interval === 0) {
    console.log("interval 0 is not allowed!!!");
    return;
  }
  if (end === undefined) {
    result.length = begin;
    forLoop(1, begin, 1);
  } else if (begin <= end) {
    if (setInterval()) forLoop(begin, end, interval);
  } else if (begin > end) {
    if (setInterval()) forLoop(end, begin, interval);
  }
  return result;
};

const printArr = (...arr) => {
  // const [x, y, z] = [...arr];
  //   console.log("begin from " + x + " and end at " + y);
  console.time("timecount");
  console.log(getRange(...arr));
  console.timeEnd("timecount");
};

printArr(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
printArr(1, 10, 2); // [1, 3, 5, 7, 9]
printArr(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
printArr(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
printArr(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
printArr(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
printArr(5); // [1, 2, 3, 4, 5]
printArr(100);
// printArr(1, 10, -3); // start smaller than end but interval is minus
// printArr(1, 10, 0);

// console.log([1, 2, 3, 4, 5, 6]);
