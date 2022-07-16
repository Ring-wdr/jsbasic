// 함수 반복되는 코드를 묶자(없애자)
// 하나의 문장으로 실행되는 문의 묶음
// 코드를 쉽게 읽도록 하는 것이 목적

hello = () => {
    console.log('hello, world');
}

objj ={fn: hello}// fn이 메서드 처럼 됨
// hello();
objj.fn();
//매개변수
// printFnReturnValue(fn) {
//     console.log(fn());
// }
function f(n) {
	// if (n.hasOwnProperty('id')) n.id += 1;
    if (typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
    //type obj && 해당 주소에 id라는 property가 있는가
	else n += 1;

}

let n = 10;
let nobj = { id: 10 };
f(n);       // typeof number, 순수함수: 같은 값을 줬을때 같은 결과. && No side effect
f(nobj);   //memory-address 전달, 비순수함수
console.log(n, nobj);

//매개변수 destructuring
const user = {id: 1, name:'Hong'}
function fd1(id, name){
    console.log(`id is ${id}, Name is ${name}`);
}
fd1(user.id, user.name);
///////////////////////////////////////////////
function fd2({id, name}) {
    console.log(`id is ${id}, Name is ${name}`);
}
fd2(user);
////////////////////////////////////////////////
function fd3([name, id]){
    console.log(`id is ${id}, Name is ${name}`);
}
const arr = [2, 'kim'];
fd3(arr) //순서가 바뀌면 안됨

//overriding 함수형 언어에서는 안 되서 이름 같으면 같은 함수가 된다.
// function f(a) { return a + 100; };
// function f(a, b) { return a + b; };
//선언식: window에 자리 잡음
console.log(f(10), f(10, 20)); // 에러 못잡음

// const f = (a) => { return a + 100; };
const ff = (a, b = 100) => { return a + b; }; // 밑에거 지양할것
// const ff = (a, b) => { return a + b || 100; };//not good
console.log(ff(10), ff(10, 20)); // 에러 못잡음 

//선언식 vs 표현식
//1. 불필요한 전역 함수를 못 만들도록...!
//2. windows vs declarative(dec 쪽이 더 빠름)

//일반 함수 vs 익명함수
// function f() {...}  vs  function() {...}
// const f1 = function ff() {...}  함수 리터럴을 갖는 변수
// const f2 = function() {...}

//재귀 함수 ^^^^ : 일반 루프보다는 보통 3배가량 느림(depend on circumstance)
const f1 = function fff(isLast = false) {
    console.log('f1');
    if (!isLast) ff(true); // is  faster than f1(true);
};
const f2 = function () {console.log('f2')};
console.log('-==============-');
f1(); f2();
// fff(); // not defined//

// 즉시 실행 함수: 불필요한 전역 변수와 메모리 낭비를 줄일 수 있다.
// closure await 활용가능
(function(){
    const temp = '1';
    console.log('hello')
})();

const counter = (function() {
    let curr = 0;
    return {
        inc: () => {
            curr += 1;
        },
        getCurr: () => {
            return curr;
        }
    }
})();

// console.log(curr);
counter.inc();
console.log('curr=', counter.getCurr());

console.log('-=======================');
const counter2 = (function() {
    let curr = 0;
    return {
        inc (n = 1) {
            curr += n;
        },
        dec (n = 1) {
            curr -= n;
        },
        getCurr () {
            return curr;
        }
    }
})();
for (let j = 0; j < 4; j++) counter2.inc(20);
for (let i = 0; i < 3; i++) counter2.dec(i);
console.log('curr =', counter2.getCurr());


// const f3 = function () {console.log('f3')};
const f3 = () => console.log('f3');
const f4 = n => console.log('f4=',n);
const f5 = n => n * 2;
f4(3);
console.log('f5:', f5(3));

const namename = 'notHuman';
// arrow function
const obj = {
	name: 'ObjName',
	bark() {
		console.log('obj.bark=', this.name);
	},
	bark2: () => console.log('obj.bark2=', this),
};

obj.bark(); //this가 obj의 것
obj.bark2(); // this가 Object(해당 클래스의 부모 클래스)

//재귀함수 try this
// 1부터 100까지 재귀함수로 더하시오
console.log("-----------");
let tot = 0;
// for (let i = 1; i <= 100; i+=1){
//     tot += i;
// }
// console.log(tot);
const sum = function f1(start, end = 100) {
    if (start === end + 1) return tot;
    tot += start;
    return f1(start + 1, end);
}

console.log(sum(1, 100));

const kim = {
	nid: 3,
	addr: 'Pusan',
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

console.log(typeof kim.nid);
console.log(typeof kim.oo === 'object');


console.log(Object.keys(kim));
console.log(kim['oo']);
const deepCopyObject = function deep(obj) {
    const newObj = {};
    for (let key of Object.keys(obj)){
        if (typeof obj[key] === 'object') deep(obj[key]);
        newObj[key] = obj[key];
    }
    return newObj;
} 

const newKim = deepCopyObject(kim);
console.log(newKim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
console.log(kim.addr !== newKim.addr, 
kim.oo.name !== newKim.oo.name,
kim.oo.addr.city !== newKim.oo.addr.city); // true, true, true면 통과!

