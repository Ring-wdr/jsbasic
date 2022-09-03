// debounce: 설정 시간동안 특정 이벤트 발생 방지
// 이벤트 발생을 보장해주는 쓰로틀링과 차이가 있다

const rand = (s, e) => {
  console.log(Math.floor(s + (e - s + 1) * Math.random()));
};

const debounce = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(cb, delay, ...args);
  };
};
const throttle = (cb, delay) => {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

// 단순 호출
// for (let i = 0; i < 20; i += 1) {
//   console.log(rand(1, 10));
// }

const dbnc = debounce(rand, 1000);
// const trtl = throttle(rand, 1000);
let cnt = 0;
const intl = setInterval(() => {
  cnt += 1;
  dbnc(1, 10);
  cnt >= 20 && clearInterval(intl);
}, 100);
