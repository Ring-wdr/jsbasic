import { debounce, throttle } from "../../utils/timer-utils.js";

class Dummy {
  constructor() {
    this.date = new Date();
  }
}

const darr = [];
for (let i = 0; i < 100; i += 1) darr.push(new Dummy());

const dmap = new WeakMap(darr.map((da) => [da, da]));

darr.length = 2;

const set = new Set();
set.add(1);
set.add(2);
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const wset = new WeakSet();
wset.add(hong);
wset.add(kim);

const WEEKS = "일월화수목금토";

// 1. 가장 즉흥적
const getNextWeek1 = () => {
  let widx = -1;
  return () => {
    widx += 1;
    if (widx >= WEEKS.length) widx = 0;
    return WEEKS[widx];
  };
};

// 2. DOM 전달
const getNextWeek2 = (() => {
  return ($sp) => {
    const curr = $sp.innerText.trim().replace("요일", "");
    console.log($sp.innerText.trim(), curr, WEEKS.indexOf(curr));
    const currIdx = WEEKS.indexOf(curr);
    const w = currIdx + 1 >= WEEKS.length ? WEEKS[0] : WEEKS[currIdx + 1];
    $sp.innerText = `${w}요일`;
  };
})();

// 3. 현재 값을 전달
const getNextWeek3 = (() => {
  return (curr) => {
    const currIdx = WEEKS.indexOf(curr);
    return currIdx + 1 >= WEEKS.length ? WEEKS[0] : WEEKS[currIdx + 1];
  };
})();

// 4. Object 관리 (과목 전달)
const getNextWeek4 = (() => {
  const idxObj = {}; // {국어: -1, 수학: 0, 과학}
  return (sbj) => {
    if (!idxObj.hasOwnProperty(sbj)) {
      idxObj[sbj] = 0;
    } else {
      idxObj[sbj] += 1;
      if (idxObj[sbj] >= WEEKS.length) idxObj[sbj] = 0;
    }

    return WEEKS[idxObj[sbj]];
  };
})();

// 5. caller
const getNextWeek5 = (function () {
  const idxObj = {}; // {국어: -1, 수학: 0, 과학}
  return function wn() {
    const sbj = wn.caller.name; // caller
    // console.log('sbj=', sbj);
    if (!idxObj.hasOwnProperty(sbj)) {
      idxObj[sbj] = 0;
    } else {
      idxObj[sbj] += 1;
      if (idxObj[sbj] >= WEEKS.length) idxObj[sbj] = 0;
    }

    return WEEKS[idxObj[sbj]];
  };
})();

window.addEventListener("load", () => {
  const dbncStr = debounce((event) => {
    // console.log("dbncStr>>");
    console.log(new Date().toISOString(), "search>>", event.target.value);
  }, 500);

  document.getElementById("str").addEventListener("input", (evt) => {
    dbncStr(evt);
  });

  const $dummy = document.getElementById("dummy");

  const $btn1 = document.getElementById("btn1");
  const $sp1 = document.getElementById("sp1");
  const $btn2 = document.getElementById("btn2");
  const $sp2 = document.getElementById("sp2");

  const dbnc = debounce(() => {
    // console.log("dbnc>>");
    $sp1.innerText = getNextWeek4(1);
  }, 1000);

  const thrt = throttle(() => ($sp2.innerText = getNextWeek4(2)), 500);
  $btn1.addEventListener("click", function 국어(event) {
    dbnc();
  });

  $btn2.addEventListener("click", (event) => {
    thrt();
  });
});
