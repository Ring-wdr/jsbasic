const rand = (s, e) => s + Math.floor((e - s + 1) * Math.random());
const randTime = (val) =>
  new Promise((res, rej) => {
    const state = Math.random() * 1000;
    console.log(val, state);
    setTimeout(() => {
      res(val);
    }, state);
  });
export { rand, randTime };
