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
const st = new Stack([1, 2]);
const q = new Queue([1, 2]);
st.push(3);
q.enqueue(3);

st.print();
q.print();
