function* gener() {
  const x = yield "첫 번째 수?";
  const y = yield "두 번째 수?";
  return x + y;
}
const it = gener();
console.log(it.next());
console.log(it.next(1));
console.log(it.next(2));
