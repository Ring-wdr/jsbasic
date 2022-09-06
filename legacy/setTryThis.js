const A = [1, 2, 3, 4, 5, 3];
const B = [1, 22, 3, 44, 5];
const C = [11, 222, 3, 4, 555];
// const A = new Set([1, 2, 3, 4, 5]);
// const B = new Set([1, 22, 3, 44, 5]);
// const C = new Set([11, 222, 3, 4, 555]);

// arr version
// const intersect = (arr1, arr2) => {
//   return arr1.filter((val) => arr2.find((val2) => val2 === val));
// };

// set version
const intersect = (arr, arr2) => {
  const [a, b] = arr.length < arr2.length ? [arr, arr2] : [arr2, arr];
  //   return [...set].filter((val) => set2.has(val));
  return new Set(a.filter((a) => b.includes(a)));
};

const diff = (arr, arr2) => {
  //   return [...set].filter((val) => !set2.has(val));
  return new Set(arr.filter((a) => !arr2.includes(a)));
};

const union = (arr, arr2) => {
  return new Set([...arr, ...arr2]);
};

const isSuperSet = (arr, arr2) => arr.every((a) => arr2.includes(a));
//   for (const ele of arr) if (!arr2.includes(ele)) return false;
//   return true;

console.log(intersect(A, B)); // [1, 3, 5]
console.log(intersect(A, C)); // [3, 4]

console.log("=====================");
console.log(diff(A, B)); // [1, 3, 5]
console.log(diff(B, A)); // [1, 3, 5]
console.log(diff(A, C)); // [3, 4]
console.log(diff(B, C)); // [3, 4]

console.log("=====================");
console.log(union(A, B)); // [1, 3, 5]
console.log(union(A, C)); // [3, 4]
// // (A, C); // [3, 4]
// // intersect(A, C); // [3, 4]
console.log("=====================");
console.log(isSuperSet([1, 2, 3], A)); // [1, 3, 5]
console.log(isSuperSet(A, C)); // [3, 4]
