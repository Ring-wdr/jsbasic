# 달력 만들기

제 개인 풀이는 아래에 수록하였습니다.

### 수업 코드

```js
const inputDate = "2022-09";
const dt = new Date(`${inputDate}-01`);
const month = Number(inputDate.substring(5));
const week = dt.getDay();

const days = Array(week).fill(0);

while (dt.getMonth() === month - 1) {
  days.push(dt.getDate());
  dt.setDate(dt.getDate() + 1);
}

console.log(`${"\t".repeat(2)}     ${inputDate}`);
console.log("");
console.log(
  "일월화수목금토"
    .split("")
    .map((w) => `${w}\t`)
    .join("")
);

console.log(
  days
    .map((d, i) => {
      let delim = (i + 1) % 7 === 0 ? "\n" : "\t";
      d = d === 0 ? "" : d < 10 ? ` ${d}` : d;
      return `${d}${delim}`;
    })
    .join("")
);
```
