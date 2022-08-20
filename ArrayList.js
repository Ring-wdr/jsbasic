class Collection {
  #arr;
  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : [...args];
  }
  push(val) {
    this.#arr.push(val);
  }
  pop() {
    this.#arr.pop();
  }
  shift() {
    this.#arr.shift();
  }
  clear() {
    this.#arr.length = 0;
  }
  get isEmpty() {
    return !this.#arr.length;
  }
  get length() {
    return this.#arr.length;
  }
  get peek() {
    if (this.constructor.name === "Stack") return this.#arr[this.length - 1];
    if (this.constructor.name === "ArrayList")
      return this.#arr[this.length - 1];
    return this.#arr[0];
  }

  print(cb) {
    if (cb) cb([...this.#arr].reverse());
  }
  *[Symbol.iterator]() {
    let idx = 0;
    while (this.#arr[idx]) {
      yield this.#arr[idx];
      idx += 1;
    }
  }

  get _arr() {
    return this.#arr;
  }
  set _arr(arr) {
    this.#arr = arr;
  }
}

class ArrayList extends Collection {
  static listToArray(arrayList) {
    if (arrayList.constructor.name === "ArrayList") return [...arrayList];
    const arr = [];
    ArrayList.recursive(arrayList, arr);
    return arr;
  }
  static arrayToList(arr) {
    // return {
    //   value: arr[0],
    //   rest: ArrayList.arrayToList(arr.slice(1)),
    // };
    return (function _al(i = 0) {
      if (i === arr.length) return;
      return {
        value: arr[i],
        rest: _al(i + 1),
      };
    })();
  }
  static recursive(obj, arr) {
    arr.push(obj.value);
    if (!obj.rest) return;
    this.recursive(obj.rest, arr);
  }

  #arrayList;
  constructor(arrayList = {}) {
    super();
    if (!Array.isArray(arrayList)) {
      this.#arrayListRecursive(arrayList);
      // ArrayList.recursive(arrayList, this._arr);
      this.#arrayList = arrayList;
    } else {
      this.#arrayList = {};
      for (const element of arrayList) {
        this.add(element);
      }
    }
  }
  #arrayListRecursive(obj) {
    super.push(obj);
    if (!obj.rest) return;
    this.#arrayListRecursive(obj.rest);
  }

  add(value, addIdx = super.length) {
    // super.peek.rest = { value };
    // super.push(super.peek.rest);

    if (!this.#arrayList.value) {
      this.#arrayList = { value };
      this._arr[0] = this.#arrayList;
    } else {
      this._arr = [
        ...this._arr.slice(0, addIdx),
        0,
        ...this._arr.slice(addIdx),
      ];
      this._arr[addIdx - 1].rest = this._arr[addIdx + 1]
        ? { value, rest: this._arr[addIdx + 1] }
        : { value };
      this._arr[addIdx] = this._arr[addIdx - 1].rest;
    }
  }

  print() {
    console.log(
      `ArrayList(${this.size()}) ` + JSON.stringify(this.#arrayList, null, 2)
    );
  }
  remove(value) {
    const idx = this._arr.findIndex((val) => val.value === value);
    if (idx === 0) {
      this.#arrayList = this._arr[idx + 1];
      this.shift();
    } else {
      this._arr[idx - 1].rest = this._arr[idx + 1];
      this._arr = [...this._arr.slice(0, idx), ...this._arr.slice(idx + 1)];
    }
    if (idx === this.size) delete this.peek.rest;
  }

  set(idx, value) {
    this._arr[idx].value = value;
  }

  get(idx) {
    return this._arr[idx].value;
  }

  size() {
    return super.length;
  }
  indexOf(value) {
    return this._arr.findIndex((val) => val.value === value);
  }
  contains(value) {
    return this._arr.findIndex((val) => val.value === value) !== -1;
  }
  toArray() {
    return this._arr.map((obj) => obj.value);
  }
  clear() {
    super.clear();
    this.#arrayList = {};
  }

  *[Symbol.iterator]() {
    let idx = 0;
    while (this._arr[idx]) {
      yield this._arr[idx].value;
      idx += 1;
    }
  }
  iterator() {
    return this[Symbol.iterator]();
  }
  get peek() {
    return super.peek.value;
  }
}

const alist = new ArrayList({ value: 1, rest: { value: 2 } });

alist.add(3);
alist.print();
alist.remove(2);
alist.print();
alist.add(22, 1); // { value: 1, rest: { value: 22, rest: { value: 3 } } }
alist.add(33, 1);

alist.set(1, 300);
alist.print();
console.log(alist.get(2), alist.size());
console.log(alist.indexOf(300)); // 1
console.log(alist.contains(300), alist.contains(301)); //  // 1
console.log(alist.isEmpty, alist.peek); //false, 3
console.log(alist.contains(301)); // 1
console.log(alist.toArray());
const it2 = alist.iterator();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}

// alist.clear();
// alist.print();
// // console.log([...[].slice(0, 1), 0, ...[].slice(0, 1)]);

const alByArray = new ArrayList([1, 2]);
alByArray.print();
console.log(ArrayList.listToArray(alByArray));
console.log(ArrayList.listToArray({ value: 1, rest: { value: 2 } }));
