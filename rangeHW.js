const getRange = (begin, end, interval) => {
  const result = [];
  let nextElement = begin;
  if (interval === 0) {
    console.log("input interval!!!");
  }
  if (end === undefined) {
    result.length = begin;
    for (let idx = 0; idx < begin; idx += 1) {
      result[idx] = idx + 1;
    }
  } else if (begin === end) {
    result[0] = [begin];
  } else if (begin < end) {
    if (interval === undefined) {
      interval = 1;
    }
    for (let idx = 0; nextElement <= end; nextElement += interval) {
      result[idx] = nextElement;
      idx += 1;
    }
  } else if (begin > end) {
    if (interval === undefined) {
      interval = -1;
    }
    for (let idx = 0; nextElement >= end; nextElement += interval) {
      result[idx] = nextElement;
      idx += 1;
    }
  }
  return result;
};

const consoleArr = (...arr) => {
  const [x, y, z] = [...arr];
  //   console.log("begin from " + x + " and end at " + y);
  console.log(getRange(x, y, z));
};

consoleArr(1, 10, 1); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
consoleArr(1, 10, 2); // [1, 3, 5, 7, 9]
consoleArr(1, 10); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
consoleArr(10, 1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
consoleArr(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
consoleArr(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
consoleArr(5); // [1, 2, 3, 4, 5]
consoleArr(100);

// console.log([1, 2, 3, 4, 5, 6]);
