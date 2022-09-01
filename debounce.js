// debounce: 설정 시간동안 특정 이벤트 발생 방지
// 이벤트 발생을 보장해주는 쓰로틀링과 차이가 있다

const rand = (s, e) => Math.floor(s + (e - s + 1) * Math.random());

const debounceFn = (times, debounce) => {
  let acc = 0;
  let interval;
  const repeat = setInterval(
    (times) => {
      acc += ((interval = 1000 / times), interval);
      if (acc > 1000) {
        clearInterval(repeat);
        console.log(rand(1, 10));
        return;
      }
      interval > debounce && console.log(rand(1, 10));
    },
    interval,
    times
  );
};

debounceFn(5, 100);
