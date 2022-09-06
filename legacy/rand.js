const rand = (s, e) => Math.floor(s + (e - s + 1) * Math.random());

console.log(rand(1, 10));

const arr = Array(10).fill(0);

for (let i = 0; i < 1_000_000; i++) {
  arr[rand(0, 9)] += 1;
}

// arr.forEach((val, idx) => console.log(`${idx + 1}: ${val}`));
