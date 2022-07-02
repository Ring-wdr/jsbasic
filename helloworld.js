console.log('hello world');
//변수: 선언 + 식별자 + 타입 + 값 + scope
//식별자: 구분하는 이름 $시작 가능
let a2 = 1; //oo
//let 2a = 1; 불가능
a = 1; // primitive
//ref, value
let s = 'xxxxx'; //&100에 xxxx이 그대로 들어가 있음
let S = new String('xxxxx'); //&200에 &300(주소)가 저장 -> &300에 저장
console.log(s, S);
let N = Number(200);
console.log(typeof S, typeof s);
console.log(NaN == NaN);
s = 'yyyyy' //&101
S = {id:5} //&200 -> &301 or else
N = Number(300);
//obj != json
// const x = `my name is ${S}`; //개행 사용가능
// console.log(x);

const sy1 = Symbol('sy');
const sy2 = Symbol('sy');
console.log(sy1, sy1 == sy2, sy1.description === sy2.description);

const b1 = 1;
console.log(b1, !b1, !!b1);
const b2 = Boolean(1);
console.log(b1, b2, b1 == b2);

var x5;
console.log(x5);
///undefined vs null 메모리 주소 할당 x or o

//call by val or ref
let aa = 1;
let bb = aa;
aa = 2;
console.log(bb);

let a3 = {id: 1};
let b3 = a3;
a3.id = 2;
console.log(b3.id);

//coercion 형 변환
// i = 100;
// i.toString();

let u = 'hong';
u.age = 30; //obj로 형변환
console.log(u.age, u); // 30이 찍히지 않음 undefined

u = 7
console.log(u);

// console.log(i);
// let i = 1; //선언 이전 사용하면 안됨

// console.log(x);
// var x = 1; // 이미 등록되어 올라감

console.log(x11); // (가)
// console.log(y11); // (나)error
var x11 = (y11 = 10 * 20); // let이 됨
console.log(x11, y11);

// console.log(xxxx);
// xxxx = 4;
x = 5;
console.log(3 - -x);
console.log(-10 * -x * -2);

//예약어: var var  xx
//객체: class가 로드 되었을 때
var j = {id: 2};
//instance 메모리가 할당되었을때 인스턴스화(실행 단계에서)
//obj vs instance
//리터럴: 값을 표현하는 방법
//값을 할당(assign) ... =: 할당 연산자

//바인딩: 연결이 되어있다 this.
//bind vs assign: link vs set

// func vs method 혼자서 존재 o or x
//실행 컨텍스트 js engine memory영역 JVM