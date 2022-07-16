const kim = {
	nid: 3,
    xx: null,
	addr: 'Pusan',
    //
    arr: [1,2,3, {item: 'mushroom'}, [10, 20,[30,40]]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
    add : function add () {
        return 1;
    }
};


// console.log(Object.keys(kim));
// console.log(kim['oo']);
// const deepCopyObject = function deep(obj) {
//     const newObj = {};
//     for (let key of Object.keys(obj)){
//         if (typeof obj[key] === 'object') deep(obj[key]);
//         newObj[key] = obj[key];
//     }
//     return newObj;
// } 

// const copyArray = function (arr) {
//     const results = [];
//     for(let element of arr){
//         if (Array.isArray(element)) results.push(copyArray(element));
//         else if (typeof element === 'object') results.push(deepCopyObject(element));
//         else results.push(element);
//     }
//     return results;
// }

// const deepCopyObject = function deep(obj) {
//     const newObj = {};
//     // for (let key of Object.keys(obj)){
//     for (let key in obj){
//         if (Array.isArray(obj[key])){
//             // newObj[key] = copyArray(obj[key]); ///[...obj[key]];
//             newObj[key] = copyArray(obj[key]);
//         }
//         else if (typeof obj[key] === 'object' && obj[key] !== null){
//             newObj[key] = deep(obj[key]);
//         }
//         else{
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }

const dcObj = function dc(oldObj) {
    // console.log(oldObj, "is", typeof oldObj);
    const newObj = Array.isArray(oldObj) ? [] : {};
    // if (Array.isArray(oldObj)) newObj = [];
    // else newObj = {};
    for (let key in oldObj){//call by ref
        if (typeof oldObj[key] === 'object'){
            newObj[key] = dc(oldObj[key]);
        } //call by value
        else {// console.log(key ,"type: ", typeof  oldObj[key]);
            newObj[key] = oldObj[key];
        }
    }
    return newObj;
}

// console.log(Array.isArray(kim) ? '[]' : '{}');
// return;
const newKim = dcObj(kim);

// for (let kk in newKim) console.log(kk);
// console.log(newKim);
// return;
// const newKim = deepCopyObject(kim);
// console.log(kim);
// return;
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
newKim.arr[0] = 100;
newKim.arr[3].item = 'surek';
newKim.arr[4][0] = 30;
newKim.add = () => 0;
console.log(kim.addr , newKim.addr, "\n",
kim.oo.name , newKim.oo.name,"\n",
kim.oo.addr.city , newKim.oo.addr.city,"\n",
kim.arr[0] , newKim.arr[0],"\n",
kim.arr[3], newKim.arr[3], "\n"
,kim.arr[4][0], newKim.arr[4][0], "\n",
kim.add(), newKim.add()); // true, true, true면 통과!
// console.log(JSON.stringify(newKim));
return;

const factorial = function loop(num) {
    if (num === 1) return 1;
    return num * loop(num - 1);
}
console.log(factorial(4));

const deepEquals = function isEqual(obj) {
    for (let key in obj){

    }
}

