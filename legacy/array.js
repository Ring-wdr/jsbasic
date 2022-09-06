// obj      vs      array //
// {}               []    //
// property         index //
////////////////////////////

const a = [1, 2],
  obj = {};
for (const [key, value] of Object.entries(a)) obj[key] = value;
// cf.
// Array.prototype.push.apply(obj, a); // 유사 배열 객체
// console.log("abc".indexOf("b")); //=>>>>ex
// cf.
Array.prototype.push.call(obj, ...a);
console.log(obj);

// a.length = 3;
// console.log(a);
console.log(a.sort((a, b) => b - a)); // 순수 함수 아님
// :자바스크립트 배열은 비균질적(nonhomogeneous)이며, [1,'2', {dfdf:1}, () => {} ]
// 다른 배열/객체(함수)등 어떤 타입도 가능!
// :촘촘한(dense, 고정 크기)가 아니다.
// 검색: dense[O(1)], sparse[O(n)]
//  즉, 희소 배열(sparse array) 자료 구조이다.
//cf dense array =>
const a2 = [1, "abc", { id: 1, name: "hong" }];
//          if sparse   if dense
//0: 8b     100-107     100-107
//1: 9b     108-117     108-115 -> Object(refer)
//2: 52b    118-        116-

// List l = new List([1,2,3]);
//{value:1 , rest: {value:2, rest:{value:3}}} // LinkedList

// reduce, splice 조심

//++ c++와 js의 arr 차이
// functional lang => need more safe(like finance)

//Array.from(arr) == [...arr]
// ex)1 ~ 5
const ar44 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(ar44);

for (let idx of ar44.keys()) console.log(idx);

const ar55 = [...Array(5)].map((a, i) => i + 1);
console.log([...Array(5)]);
// 새로운 개념에 대해서 다양한 방법으로 찍어보기

const ar6 = ["ab,cd".split(",")];
// vs
const ar7 = [..."ab,cd".split(",")];
// 스프레드 연산자는 class 연산자들 보다 연산 우선순위가 낮다
// split은 부담스러운 연산...
console.log("------------");
const queue = [];
queue.unshift(1); // q = [1, ...queue]
queue.unshift(2, 3); // [2,3, ...queue]
console.log(queue);
const curr = queue.pop();
console.log(curr);
console.log(queue);
console.log(queue.shift());
console.log(queue);
