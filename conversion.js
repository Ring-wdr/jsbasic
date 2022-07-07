const n = 100;
let s1 = n.toString();
let s2 = n + '';

console.log(s1, typeof s1, s2, typeof s2);
console.log(n.toString(2), n.toString(8), n.toString(16));

const binary = n.toString(2)
console.log(parseInt(binary, 2), parseFloat('32cm'), Number('3.2cm'))
//실무 Number를 씀

const n2 = Number(s1); //String
const n3 = new Number(s1); // new String()
console.log(n2, n3, typeof n2, typeof n3)

// const x = 5; console.log(typeof x, typeof !!x); // True False --> Truthy Falsy

const d1 = Date(); const d2 = new Date();
console.log(d1, d2, typeof d1, typeof d2)
console.log(d1.valueOf(), d2.valueOf())

console.log('sss' + 2 , 'sss' + {id: 1})
const u = {id : 1, name: 'hong'}
console.log(u.toString)

// s = {id: 1} + 2;   // 병합 연산자
// r = x + '30';      // 병합 연산자 // r = x + +'30'; === x + Number('30);
// q = x * '30';      // 산술 연산자
// console.log(s, typeof s, r, typeof r, q, typeof q); 

let a = 1, b = 2;
let c = (a++, b++);   // 쉼표 연산자 & 할당 연산자
console.log(a, b, c); // ?

//<a href="javascript:void(0)"> 보다 onclick이 나음

//truthy: 빈배열도 truthy(주소값이 있어서)
// falsy: undefined, null, nan, '', false

//단축평가: 실무에서 많이 쓰임
// if (f1() || f2())
const T = true, F = false; 
let x = 1;
// T가 true이므로 || 뒤에 x++를 안 거침
console.log(T || x++, F || x++, x);  // ?  
console.log(T && x++, F && x++, x); // ?

function fx(x = 0){
    return (x|| 0) * 0.1;
}
console.log( fx(null))

let aa = 0b1010, bb = 0b1100;         // cf. 8진수(0o), 16진수(0x)
console.log(aa & bb, aa | bb, aa ^ bb, ~bb); // 10진수 출력.  ~bb bb의 보수
console.log((aa & bb).toString(2), (aa | bb).toString(2), (aa ^ bb).toString(2), ~bb.toString(2)); //2진수로 출력하세요. 

const R = 1, W = 2, E = 4;         // 0b001, 0b010, 0b100
let auth = parseInt('011', 2);     // 0b011
const hasWriteAuth = auth & W;     // 011 & 010 ⇒ 010
const hasExeAuth = auth & E;     // 0b011
const hasReadAndExeAuth = auth & (R | E);     // 0b011
auth = auth ^ E;     // 실행권한 토글!   011 ^ 100 ⇒ 100

console.log(isNaN(Infinity), NaN === NaN)
console.log(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1))
console.log(Math.round(2.3)) // 정수만 나옴
console.log((0.234).toFixed(2)) // 정수만 나옴

// 그냥 잘라냄 vs 절삭
const f = -2.234;
console.log(Math.trunc(f) ,Math.floor(f));
console.log(0.1 + 0.2)
console.log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON)
console.log(2.4 % 1 === 0.4)
console.log((2.4 % 1 === 0.4 ) < Number.EPSILON)
console.log(Number.EPSILON.toString()) /// 입실론 출력

// for (let i = 1; i < 10; i += 1){
//     console.log("0."+i)
// }

for (let i = 0.1; i < 1; i += 0.1){
    console.log(i)
}

let a3 = 0.28
let b3 = 0.14
console.log("=====2번째 문제=====")
console.log("0."+Math.trunc(a3 * 100000 + b3 * 100000)) //round 쓰는게 낫다고 sof에 나와있다고 합니다.

floatRemove = (a, b) => {
    const len = a.toString().length > b.toString().length ? a.toString().length : b.toString().length 
    const po = Math.pow(10, len)
    return Math.trunc(a * po + b * po) / po
}
console.log(floatRemove(a3, b3))
const uu = {id: 1, name: 'hong', age: 29};   // object
// let {id, name : nm, addr} = uu;
// console.log(id, nm, addr);

let id, name; 
// {id, name} = u;
({id, name} = u);

console.log('id' in uu)
delete uu.name;
console.log('name' in uu)

//swap
let aaaa = 1; let bbbb = 2;
[aaaa, bbbb] = [bbbb, aaaa]; 

for(let prop in uu) console.log(prop); 
console.log(uu.hasOwnProperty('age'))

// ex1) 2 ~ 10 사이의 무리수를 소숫점 3자리까지 출력하시오. 
// // Math.sqrt()
// 2 1.414
// 3 1.732
// 5 2.2xx
// …
// 10 3.xxx

// for (let i = 1; i < 100; i++){
//     if ()
// }