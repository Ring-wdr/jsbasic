let s = 0,
  e = Number.MAX_VALUE;
let mid, result;
while (s <= e) {
  console.log("s: ", s, " e: ", e);
  //   mid = s + parseInt((e - s) / 2);
  mid = Math.trunc(s / 2) + Math.trunc(e / 2) + (s & e & 1);
  console.log("mid: ", mid);
  if (Number.isSafeInteger(mid)) {
    result = mid;
    s = mid + 1;
  } else {
    e = mid - 1;
  }
}

console.log(result);
