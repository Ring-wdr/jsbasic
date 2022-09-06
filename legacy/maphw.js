const array1 = [1, 4, 9, 16];
array1[5] = 36;
// pass a function to map
// const map1 = array1.map(x => x * 2);
// console.log(map1);

const mapFn = (arr, f) => {
  const mapArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (typeof f(arr[i]) === typeof arr[i]) mapArr[i] = f(arr[i]);
  }
  return mapArr;
};

const filterFn = (arr, f) => {
  const filterArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (f(arr[i])) filterArr.push(arr[i]);
  }
  return filterArr;
};

const findFn = (arr, f) => {
  const findArr = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (f(arr[i])) {
      findArr.push(arr[i]);
      return findArr;
    }
  }
};
const mapByFn1 = mapFn(array1, (x) => x * 2);
const mapByFn2 = mapFn("hello", (x) => x);

const filterByFn1 = filterFn(array1, (x) => x % 2 == 0);
const findByFn1 = findFn(array1, (x) => x % 2 == 0);

console.log(mapByFn1);
console.log(mapByFn2);
console.log(filterByFn1);
console.log(findByFn1);
// console.log(mapByFn1.constructor.name);

// expected output: Array [2, 8, 18, 32]
const kconstray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];

const reformattedArray = mapFn(kconstray, function (obj) {
  const rObj = {};
  rObj[obj.key] = obj.value;
  return rObj;
});

console.log(reformattedArray);
console.log(mapFn(["1", "2", "3"], Number));
