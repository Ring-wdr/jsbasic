# 날짜 문제

### 1. 1970년 1월 1일과 1970년 1월 2일의 차이를 초로 나타내시오.

```js
new Date(0).setDate(2) / 1000;
```

```js
// 날짜
const d2 = new Date(0).setDate(2);
console.log(d2); // 86400000
const d5 = new Date(0).setDate(5);
console.log("d5 - d2", d5 / d2 / 86400000);
```

### 2. 이 달의 날짜 5개를 무작위로 만들어 역순으로 정렬하시오.

```js
const rand = (s, e) => Math.floor(s + (e - s + 1) * Math.random());
const today = new Date();
const dates = [];

for (let i = 0; i < 5; i += 1) {
  const day = rand(1, 31);
  dates.push(new Date(today.getFullYear(), today.getMonth(), day));
}

console.log(dates.sort((a, b) => b - a));
```

### 3. 내년(2023년)의 오늘(8월 30일)의 요일을 출력하시오.

```js
const nextYear = new Date(today);
nextYear.setFullYear(today.getFullYear() + 1);
// console.log(today, nextYear, nextYear.getDay());
const WD = "일월화수목금토";
console.log(WD[nextYear.getDay()]); // 수요일
```

### 4. 오늘(8월 30일)로 부터 100일 후의 날짜는?

```js
const after100days = today.setDate(100 + today.getDate());
console.log(new Date(after100days)); // 2022 12 8
```
