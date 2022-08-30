// const moment = require("moment");
const moment = require("moment-timezone");

const today = moment();
console.log(today.format("LLLL"));
console.log(today.format("YYYY-MM-DD"));

moment.locale("ko");
const d802 = moment("2022-08-02");
console.log(d802.format("LLLL"));

const d0 = new Date(0);
moment(d0); // 1970년 1월 1일 목요일 오전 9:00
console.log(moment(d0).tz("America/Los_Angeles").format("LLL")); // 1969년 12월 31일 오후 4:00

console.log(moment().startOf("years"));
console.log(moment().endOf("years")); // 년도의 마지막일
console.log(moment().diff(moment("1973-10-05"), "M")); // 586
console.log(moment(new Date(0)).fromNow()); // 53년 전: 이거 때문에 moment씀
