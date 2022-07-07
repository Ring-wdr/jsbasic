// closure explain by eXCont
let i = 0;
if (1){
    i = 10;
    console.log('dfdfd');
}
//i = 1일때 밑 출력에서 0을 기대하지만 10이 나옴. 전역변수 최대한 피해야한다...
console.log(i);

{
    let j = "dfdfdfd" // 5mb
    //미디어 파일 같은 경우 블록 스코프를 활용해서 메모리 누수를 피한다.
}

f = () => {
    let i = 1;
    {
        let i = 2;
        console.log(i);
    }
    console.log(i);
}

f();




// func hoisting
var gg = 1;
let bb = 2;
function f1() {
  var gg = 11;
  let bb = 22;
  console.log('f1>', gg, bb); // gg, bb?
  f2();  // callable? yes:: since func also hoists.
}

function f2() {
  console.log('f2>', gg, bb); // gg'''?
}

f1();

function varFn() {
    var v = 1;
    {
      var v = 2, vv = 3;
      console.log(v, vv);
    }
    console.log(v, vv); // 2, 3 
  }
  
  
  function letFn() {
    let l = 1;
    {
    //   let l = 2; ll = 3; 아래가 정석
      let l = 2;
      let ll = 3;
      console.log(l, ll); // 2, 3
    }
    console.log(l, ll); // 1
  }
  
  varFn()
//   letFn()

// closure
// 모든 함수형 언어가 가지고 있는 가장 중요한 특성!
// 스코프의 속성을 활용한 상위/외부 식별자를 접근. (은닉성과 스코프 체인[scope chain] 제어)
// scope chain이 연결된 곳이 내가 갈 수 있는 곳이다.

let fn;
{
  const privateUser = { id: 1, name: 'Hong' };
  fn = function() { // fn = () = > {}
    return privateUser;
  }
}
const hong = fn();
hong.age = 30; //privateUser.age = 30;
console.log(hong);

// on Java
// class C {
//     private String pu;
//     String getPu(){
//         return this.pu;
//     }
// }

function getFn() {
    const pv = 5; // private variable
    return function(n) { // 내부함수(:외부에서 pv 접근)
      return pv + n;
    }
  }
  
  const defVal = 100;
  const add5Fn = getFn();
  console.log(add5Fn(30) + defVal); // 135


// optional chaining

const obj = null;
console.log('obj.id:', obj?.id);

const x = '';
const cmt = x || 'bb';
console.log(cmt);
const cmt2 = x ?? 'bb';
console.log(cmt2);
const cmt3 = x && 'bb';
console.log('comment: ', cmt3);