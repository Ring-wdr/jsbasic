const user = {
    '': 1,
    ' ': 1,
    123: 1,
    true: 1,
    'id': 1,
    id: 2,
    // `name`: 'Hong',
    [`name`]: 'Hong',
    [Symbol()]: 'dd',
    'my-friends': ['Han', 'Kim'], // OK?
    // 0y: '000',       // OK?
    y0: 000,
    getInfo: () => `${this.id}-${this.name}`,       // OK?
    getInfo() { return `${this.id}-${this.name}`; } // OK?
}
// console.log(user, user.getInfo());
console.log(Object.keys(user)); //Symbol이 안나온다
console.log(Reflect.ownKeys(user));
console.log(user?.idd + 1);
user.addr = 'seoul';
console.log(user?.addr);
console.log('addr' in user, user.hasOwnProperty('addr')); 
delete user.addr;
console.log(user?.addr);

//computete property
user[`${user.id}'s name`] = `Mr. ${user.name}`;
console.log(user["2's name"])

const s = Symbol();
user[s] = 'xxxx';

console.log(Object.keys(user));
console.log(user[s]);

user.firstName = 'kildong';
user.lastName = 'Kang';
// user.fullName = `${user.firstName} ${user.lastName}`;
user.fullName = function () { //user속에 정의되기 때문에 user가 상위 스코프
    return `${this.firstName} ${this.lastName}`;
} 
console.log('fn:', user.fullName());
user.fullName2 = () => { //user속에 정의되기 때문에 user가 상위 스코프
    return `${this.firstName} ${this.lastName}`;
} 
console.log('fn:', user.fullName());

let {id, name:nm} = user;
console.log(id, nm);
nm = 'Kim';
const kim = {id, nm, age:29};
// const kim = {id: id, nm:nm, age:29};
console.log(kim);

//static method 기본으로 사용 가능
// user.addr = 'pusan';
// console.log(Object.getOwnPropertyDescriptor(user, 'addr'));
Object.defineProperty(user, 'age', {value: 39, writable: false});
console.log(user.age);
user.age = 222; // 안 먹힘
// console.log(user.age);
for (let x of Object.entries(user)) console.log(`${x[0]}: ${x[1]}`);

const park = Object.fromEntries([
    ['id', 7],
    ['nm', 'park'],
]);

// const newUser1 = Object.assign({}, park);
// const newUser1 = new Obj // ES5
const newUser1 = {...user};
newUser1.id = 5;
console.log(newUser1);

Object.preventExtensions(user); // , 삭제, 읽기, 쓰기, 재정의
Object.seal(user);              // 읽기, 쓰기
Object.freeze(user);            // 쓰기
console.log(Object.getOwnPropertyDescriptors(user,'age'));

user.id = 100;
console.log(user.id);//에러는 안뜨는데 안 바뀜

park.arr = [1,2,3];
console.log(park.arr);
Object.freeze(park);
park.arr[1] = 200;
console.log(park.arr);