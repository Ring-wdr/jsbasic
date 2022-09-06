const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const [year, month, day = 0] = line.split(" ");
  const drawCalander = (year, month, day) => {
    const calander = [
      Array(7),
      Array(7),
      Array(7),
      Array(7),
      Array(7),
      Array(7),
    ];
    const monthDays = [
      0,
      31,
      28 + (year % 4 === 0 && 1),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    const yearLeast = (year - 1) % 400;
    const startDay =
      (yearLeast +
        Math.trunc(yearLeast / 4) +
        Math.trunc(yearLeast / 100) * 5 +
        monthDays.filter((_, idx) => idx < month).reduce((s, a) => s + a) +
        1) %
      7;
    const weekdays = "일월화수목금토";
    for (let i = 0; i < monthDays[month]; i += 1) {
      calander[Math.trunc((startDay + i) / 7)][Math.trunc((startDay + i) % 7)] =
        String(i + 1).padStart(2, "  ");
    }
    console.log(`   ${year}년 ${month}월`);
    console.log(
      "일월화수목금토"
        .split("")
        .map((w) => `${w}\t`)
        .join("")
    );
    calander.forEach((week) => console.log(week.join("\t")));
  };

  drawCalander(year, month, day);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
