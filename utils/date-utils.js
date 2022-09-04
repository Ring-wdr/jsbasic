const WEEKS = "일월화수목금토";

const calandar = (year, month, day) => {
  const cal = [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)];
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
  for (let i = 0; i < monthDays[month]; i += 1) {
    cal[Math.trunc((startDay + i) / 7)][Math.trunc((startDay + i) % 7)] =
      String(i + 1).padStart(2, "  ");
  }
  console.log(`   ${year}년 ${month}월`);
  console.log(
    WEEKS.split("")
      .map((w) => `${w}\t`)
      .join("")
  );
  cal.forEach((week) => console.log(week.join("\t")));
};

// console.log(calandar(2022, 8));

export { WEEKS, calandar };
