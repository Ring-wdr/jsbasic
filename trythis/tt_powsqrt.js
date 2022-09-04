import {
  ARR as arr,
  calc,
  powSqrtByForEach,
  powSqrtByForOf,
  powSqrtByMap,
} from "../localdata.js";

// powSqrtByForOf(["a"]);
console.log(powSqrtByForOf(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByForEach(arr)); // [[1, 16, 81], [1, 2, 3]]
console.log(powSqrtByMap(arr)); // [[1, 16, 81], [1, 2, 3]]
