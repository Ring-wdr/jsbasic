class SuperStackQ {
  constructor(arr = []) {
    this.privateArr = arr;
    this.length = arr.length;
  }
  clear() {
    this.privateArr = [];
    this.length = 0;
  }
  isEmpty() {
    return !this.privateArr.length;
  }
  peek() {
    return this.privateArr[this.privateArr.length - 1];
  }
  toArray() {
    return this.privateArr;
  }
  print() {
    this.privateArr.map((a) => console.log(a));
  }
}

class Stack extends SuperStackQ {
  push(num) {
    this.privateArr.push(num);
    this.length += 1;
    return this;
  }
  pop() {
    if (this.length) this.length -= 1;
    return this.privateArr.pop();
  }
}

class Queue extends SuperStackQ {
  enqueue(num) {
    this.privateArr.push(num);
    this.length += 1;
    return this;
  }
  dequeue() {
    if (this.length) this.length -= 1;
    return this.privateArr.shift();
  }
}
// ex1) Stack (DeepDive. 512)
const stack = new Stack(); // or new Stack([1,2]);
stack.push(3).push(4); // 추가하기
console.log(stack.pop(), stack.pop()); // 마지막에 추가된 하나 꺼내기

const stack2 = new Stack([1, 2]);
console.log(stack2.pop(), stack2.pop());
// ex2) Queue (DeepDive. 515)
const queue = new Queue();
queue.enqueue(3).enqueue(4); // 추가하기
console.log(queue.dequeue(), queue.dequeue()); // 추가한지 가장 오래된 - 먼저 들어간 - 하나 꺼내기

// clear test
console.log("clear test: ");
stack.push(3).push(3).push(3);
stack.clear();
console.log(stack.pop());

queue.enqueue(3).enqueue(3).enqueue(3);
queue.clear();
console.log(queue.dequeue());
console.log("");

// isEmpty test
console.log("length test");
stack.push(3).push(3).push(3);
console.log(stack.isEmpty());
stack.clear();
console.log(stack.isEmpty());

queue.enqueue(3).enqueue(3).enqueue(3);
console.log(queue.isEmpty());
queue.clear();
console.log(queue.isEmpty());
console.log("");

// peek test
console.log("peek test");
stack.push(3).push(4).push(5);
console.log(stack.peek(), stack.peek(), stack.peek());
queue.enqueue(5).enqueue(4).enqueue(3);
console.log(queue.peek(), queue.peek(), queue.peek());
// stack.clear();
// queue.clear();
console.log("");

//toArray()
console.log("toArray test");
console.log(stack.toArray());
console.log(queue.toArray());

//print()
console.log("\nPrint test");
stack.print();
queue.print();

//length
console.log("\nlength test");
console.log(stack.length);
console.log(queue.length);
