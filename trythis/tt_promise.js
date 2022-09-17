const depthFn = (depth = 1) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`depth${depth}`, new Date());
      if (depth < 3) {
        res(depth + 1);
      } else rej(new Error("Already 3-depth"));
    }, depth * 1000);
  });

const randTime = (val) =>
  new Promise((res, rej) => {
    const state = Math.random() * 1000;
    console.log(val, state);
    setTimeout(() => {
      res(val);
    }, state);
  });

const terminal = (num) => {
  if (num == 1) {
    depthFn()
      .then(depthFn)
      .then(depthFn)
      .catch((err) => console.log(err));

    console.log("START", new Date());
  } else if (num == 2) {
    [1, 2, 3, 4, 5].forEach((a) => randTime(a).then(console.log));
  }
};

terminal(process.argv[2]);
