class Collection {
  #arr;
  constructor(...args) {
    // console.log(args, [...args], ...args);
    this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
    // console.log(this.#arr);
  }

  push(val) {
    this.#arr.push(val);
  }

  pop() {
    return this.#arr.pop();
  }

  shift() {
    return this.#arr.shift();
  }

  clear() {
    this.#arr.length = 0;
  }

  get peek() {
    if (this.constructor.name === "Stack") return this.#arr[this.length - 1];
    return this.#arr[0];
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  get length() {
    return this.#arr.length;
  }
  get(index) {
    return this.#arr[index];
  }

  indexOf(value) {
    return this.#arr.indexOf(value);
  }

  contains(value) {
    return this.#arr.indexOf(value) !== -1;
  }
  _splice(...args) {
    return this.#arr.splice(...args);
  }
  *[Symbol.iterator]() {
    for (let idx = 0; idx < this.#arr.length; idx += 1) {
      yield this.#arr[idx];
    }
  }

  iterator() {
    return this[Symbol.iterator]();
  }

  toArray() {
    return [...this.#arr];
  }

  print(cb) {
    if (cb) {
      cb([...this.#arr].reverse());
      return;
    }
    console.log("coll>>", this.#arr);
  }
}

class ArrayList extends Collection {
  static listToArray(lst) {
    const arr = [];
    let node = lst;
    while (node?.value) {
      arr.push(node.value);
      node = node.rest;
    }
    return arr;
  }
  static arrayToList(arr) {
    return arr.reduce((o, a, i) => ({ value: arr[i], rest: o }), undefined);
    //1
    // return {
    //   value: arr[0],
    //   rest: ArrayList.arrayToList(arr.slice(1)),
    // };//2
    // return (function _al(i = 0) {
    //   if (i === arr.length) return;
    //   return {
    //     value: arr[i],
    //     rest: _al(i + 1),
    //   };
    // })();
  }
  constructor(lstOrArr) {
    super(Array.isArray(lstOrArr) ? lstOrArr : ArrayList.listToArray(lstOrArr));
  }
  add(val, index) {
    if (index > 0) super._splice(index, 0, val);
    else this.push(val);
  }

  removeByIndex(index) {
    this._splice(index, 1);
  }

  remove(value) {
    this.removeByIndex(super.indexOf(value));
  }

  set(index, value) {
    this._splice(index, 0, value);
  }
  size() {
    return this.length;
  }
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } });
alist.add(3);
alist.remove(2); // { value: 1, rest: { value: 3 } }
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);
alist.print();
// alist.print(); // ArrayList(4) { value: 1, rest: { value: 33, rest: { value: 22, rest: { value: 3 } } } }
alist.set(1, 300); // { value: 1, rest: { value: 300, rest: { value: 22, rest: { value: 3 } } } }
console.log(alist.get(2));
console.log(alist.size()); // 22, 4
console.log(alist.indexOf(300)); // 1
console.log(alist.contains(300));
console.log(alist.contains(301)); // true, false
console.log(alist.isEmpty, alist.peek); // false, 3
console.log(alist.toArray()); // [1, 300, 22, 3]
alist.iterator().next(); // { value: 1, done: false }
alist.clear(); // all clear
console.log("------------------------");
console.log(ArrayList.listToArray({ value: 1, rest: { value: 2 } }));
console.log(ArrayList.arrayToList([1, 2]));
