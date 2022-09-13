"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "assertEqual", {
  enumerable: true,
  get: function get() {
    return _testUtils.assertArray;
  }
});
exports.splice = exports.range = void 0;

var _testUtils = require("./test-utils.js");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var range = function range(start, end, step) {
  var _end, _step;

  if (start !== end && (end - start) * step < 0) return [];
  var tmp = start;
  end = (_end = end) !== null && _end !== void 0 ? _end : start >= 0 ? (start = start > 0 ? 1 : 0, tmp) : -1;
  step = (_step = step) !== null && _step !== void 0 ? _step : start >= end ? -1 : 1;
  var result = [start];

  var until = function until(x) {
    return step !== 0 && start !== end && (start > end ? x >= end : x <= end);
  };

  for (var i = start + step; until(i); i += step) {
    result.push(i);
  }

  return result;
};

exports.range = range;

var splice = function splice(arr, idx) {
  var delCnt = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;

  for (var _len = arguments.length, insertions = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    insertions[_key - 3] = arguments[_key];
  }

  return [].concat(_toConsumableArray(arr.slice(0, idx)), insertions, _toConsumableArray(arr.slice(idx + delCnt)));
};

exports.splice = splice;