console.log("-=-==-=-=-=-=--");

const printInfo = function (name) {
  console.log(`ID is ${this.id}, Name is ${name}.`);
};

const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };

printInfo(kim.name);
printInfo.call(kim);
printInfo.call(hong, hong.name);
// printInfo.apply(kim, kim.name);
printInfo.apply(hong, [hong.name]);
printInfo.apply(hong, [...hong.name]); // ?

const printOne = printInfo.bind(hong);
printOne("Park");

const printHong = printInfo.bind(hong);
printHong("Kil-dong");

// const declareFn = function(name) {
//         // if, 'use strict'?
//         this.name = name;
//         console.log(this, new.target, this.name, name);
// }
// const arrowFn = (name) => {
//         this.name = name;
//         console.log(this, new.target, this.name, name);
// }
// declareFn.call(hong, 'Lee');
// arrowFn.apply(kim, ['king']);

console.log("-=-==-=-=-=-=--");
// let widx = -1;
// const getNextWeek = () => {
//   widx += 1; // side-effect!
//   if (widx >= weeks.length) widx = 0;
//   return `${weeks[widx]}요일`;
// };

// let cnt = 0;
// const intl = setInterval(() => {
//   // widx += 2; // side-effect!
//   console.log("call", cnt, getNextWeek());
//   if ((cnt += 1) === 8) clearInterval(intl);
// }, 1000);

const getWeekFn = function (index = 0) {
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  let widx = index - 1;
  const getNextWeek = () => {
    widx += 1;
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
  };
  const intl = setInterval(() => {
    console.log("call", widx + 1, getNextWeek());
    if (widx === 6) clearInterval(intl);
  }, 100);
  return intl;
};

getWeekFn();

// getWeekFn(3);
