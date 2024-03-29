"use strict";

var _timerUtils = require("../utils/timer-utils.js");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dummy = /*#__PURE__*/_createClass(function Dummy() {
  _classCallCheck(this, Dummy);

  this.date = new Date();
});

var darr = [];

for (var i = 0; i < 100; i += 1) {
  darr.push(new Dummy());
}

var dmap = new WeakMap(darr.map(function (da) {
  return [da, da];
}));
darr.length = 2;
var set = new Set();
set.add(1);
set.add(2);
var hong = {
  id: 1,
  name: "Hong",
  dept: 1
};
var kim = {
  id: 2,
  name: "Kim",
  dept: 2
};
var wset = new WeakSet();
wset.add(hong);
wset.add(kim);
var WEEKS = "일월화수목금토"; // 1. 가장 즉흥적

var getNextWeek1 = function getNextWeek1() {
  var widx = -1;
  return function () {
    widx += 1;
    if (widx >= WEEKS.length) widx = 0;
    return WEEKS[widx];
  };
}; // 2. DOM 전달


var getNextWeek2 = function () {
  return function ($sp) {
    var curr = $sp.innerText.trim().replace("요일", "");
    console.log($sp.innerText.trim(), curr, WEEKS.indexOf(curr));
    var currIdx = WEEKS.indexOf(curr);
    var w = currIdx + 1 >= WEEKS.length ? WEEKS[0] : WEEKS[currIdx + 1];
    $sp.innerText = "".concat(w, "\uC694\uC77C");
  };
}(); // 3. 현재 값을 전달


var getNextWeek3 = function () {
  return function (curr) {
    var currIdx = WEEKS.indexOf(curr);
    return currIdx + 1 >= WEEKS.length ? WEEKS[0] : WEEKS[currIdx + 1];
  };
}(); // 4. Object 관리 (과목 전달)


var getNextWeek4 = function () {
  var idxObj = {}; // {국어: -1, 수학: 0, 과학}

  return function (sbj) {
    if (!idxObj.hasOwnProperty(sbj)) {
      idxObj[sbj] = 0;
    } else {
      idxObj[sbj] += 1;
      if (idxObj[sbj] >= WEEKS.length) idxObj[sbj] = 0;
    }

    return WEEKS[idxObj[sbj]];
  };
}(); // 5. caller


var getNextWeek5 = function () {
  var idxObj = {}; // {국어: -1, 수학: 0, 과학}

  return function wn() {
    var sbj = wn.caller.name; // caller
    // console.log('sbj=', sbj);

    if (!idxObj.hasOwnProperty(sbj)) {
      idxObj[sbj] = 0;
    } else {
      idxObj[sbj] += 1;
      if (idxObj[sbj] >= WEEKS.length) idxObj[sbj] = 0;
    }

    return WEEKS[idxObj[sbj]];
  };
}();

window.addEventListener("load", function () {
  var dbncStr = (0, _timerUtils.debounce)(function (event) {
    // console.log("dbncStr>>");
    console.log(new Date().toISOString(), "search>>", event.target.value);
  }, 500);
  document.getElementById("str").addEventListener("input", function (evt) {
    dbncStr(evt);
  });
  var $dummy = document.getElementById("dummy");
  var $btn1 = document.getElementById("btn1");
  var $sp1 = document.getElementById("sp1");
  var $btn2 = document.getElementById("btn2");
  var $sp2 = document.getElementById("sp2");
  var dbnc = (0, _timerUtils.debounce)(function () {
    // console.log("dbnc>>");
    $sp1.innerText = getNextWeek4(1);
  }, 1000);
  var thrt = (0, _timerUtils.throttle)(function () {
    return $sp2.innerText = getNextWeek4(2);
  }, 500);
  $btn1.addEventListener("click", function 국어(event) {
    dbnc();
  });
  $btn2.addEventListener("click", function (event) {
    thrt();
  });
});