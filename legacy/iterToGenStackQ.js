// iter to gen

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
    return this.#arr[0];
  }

  print(cb) {
    if (cb) cb([...this.#arr].reverse());
  }

  //   [Symbol.iterator]() {
  //     let idx = -1;
  //     return {
  //       next: () => {
  //         idx += 1;
  //         return { value: this.#arr[idx], done: !this.#arr[idx] };
  //       },
  //     };
  //   }

  *[Symbol.iterator]() {
    let idx = 0;
    while (this.#arr[idx]) {
      yield this.#arr[idx];
      idx += 1;
    }
  }
}
class Stack extends Collection {
  print() {
    super.print((arr) => console.log("STACK>> \n", arr.join("\n ")));
  }
}
class Queue extends Collection {
  enqueue(val) {
    super.push(val);
  }
  dequeue() {
    return super.shift();
  }
  print() {
    super.print((arr) => console.log("Queue>> \n", arr.join(" > ")));
  }
}

const stack = new Stack([1, 2]);
const queue = new Queue([1, 2]);
stack.push(3);
queue.enqueue(3);

console.log([...stack], [...queue]);
for (const s of stack) console.log(s);
for (const q of queue) console.log(q);

// // stack.print();
// // queue.print();

const it2 = stack[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
