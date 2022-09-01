const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const KR_TIME_DIFF = 9 * 60 * 60 * 1000;

rl.on("line", (line) => {
  // console.log("input: ", line);
  const [year, month, day = 0] = line.split(" ");
  const drawCalander = (year, month, day) => {
    const calander = [
      Array(7).fill("  "),
      Array(7).fill("  "),
      Array(7).fill("  "),
      Array(7).fill("  "),
      Array(7).fill("  "),
      Array(7).fill("  "),
    ];
    const dayCnt = new Date(year, month, 0).getDate();
    let week = 0;
    for (let i = 1; i <= dayCnt; i += 1) {
      const day = new Date(year, month - 1, i).getDay();
      week += day === 0 && 1;
      calander[week][day] = String(i).padStart(2, "  ");
    }
    console.log(`   ${year}년 ${month}월 달력`);
    console.log("일 월 화 수 목 금 토");
    calander.forEach((week) => console.log(week.join(" ")));
  };

  drawCalander(year, month, day);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});
