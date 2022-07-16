const obj = {
    name: 'ObjName',
    bark() { // good!(호출한 객체)
        console.log('bark=', this.name);
    },
    bark2: () => // bad!!
    console.log('bark2=', this.name, obj.name),
};

// good function
obj.bark();
// this of arrow function: super
obj.bark2();

const declareFn = function(name) { //함수 선언식
    // if, 'use strict'?
    this.name = name; // global
    // console.log(this, new.target, this.name, name);
}

declareFn('dfn');
console.log('outer.name', name); // global name
const dfn = new declareFn('D');
console.log('type of dfn=', typeof dfn);

const arrowFn = (name) => { // 화살표함수
    this.name = name;
    console.log(this, new.target, this.name, name);
}
arrowFn('afn');
console.log('outer.name', name); // global name
console.log(arrowFn)
// const afn = new arrowFn('A'); // 생성 불가


// browser의 globalthis와 node의 globalthis랑 다름
var g = 'ggg';
function f(){
    console.log(g, this.g, global.g);
}
f();