"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calandar = exports.WEEKS = void 0;
var WEEKS = "일월화수목금토";
exports.WEEKS = WEEKS;

var calandar = function calandar(year, month, day) {
  var cal = [Array(7), Array(7), Array(7), Array(7), Array(7), Array(7)];
  var monthDays = [0, 31, 28 + (year % 4 === 0 && 1), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var yearLeast = (year - 1) % 400;
  var startDay = (yearLeast + Math.trunc(yearLeast / 4) + Math.trunc(yearLeast / 100) * 5 + monthDays.filter(function (_, idx) {
    return idx < month;
  }).reduce(function (s, a) {
    return s + a;
  }) + 1) % 7;

  for (var i = 0; i < monthDays[month]; i += 1) {
    cal[Math.trunc((startDay + i) / 7)][Math.trunc((startDay + i) % 7)] = String(i + 1).padStart(2, "  ");
  }

  console.log("   ".concat(year, "\uB144 ").concat(month, "\uC6D4"));
  console.log(WEEKS.split("").map(function (w) {
    return "".concat(w, "\t");
  }).join(""));
  cal.forEach(function (week) {
    return console.log(week.join("\t"));
  });
};

exports.calandar = calandar;