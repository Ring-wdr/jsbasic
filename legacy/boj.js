const fs = require("fs");
// import fs from "fs";
const input = fs.readFileSync("/dev/stdin").toString().split(" ");
let a = parseInt(input[0]);
// let a = 26;

let vari = a,
  cnt = 0,
  first,
  second;
do {
  first = parseInt(vari / 10);
  second = vari % 10;
  vari = ((first + second) % 10) + second * 10;
  cnt += 1;
} while (vari !== a);
console.log(cnt);
