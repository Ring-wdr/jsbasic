// class와 Array 객체를 이용하여 Stack과 Queue를 구현하시오.
// 0은 나중에...!
class Stack {
  #stack;
  constructor(arr = []) {
    this.#stack = arr;
  }
  push(num) {
    this.#stack.push(num);
    return this;
  }
  pop() {
    return this.#stack.pop();
  }
}

class Queue {
  #queue;
  constructor(arr = []) {
    this.#queue = arr;
  }
  enqueue(num) {
    this.#queue.push(num);
    return this;
  }
  dequeue() {
    return this.#queue.shift();
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
