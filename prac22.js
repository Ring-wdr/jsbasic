// 과제
const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};

const copyObject = (obj) => {
    const newObj = {};
    for (let key of Reflect.ownKeys(kim)){
        newObj[key] = obj[key];
    }
    return newObj;
}

const newKim = copyObject(kim);
newKim.addr = "Daegu";
console.log(kim.addr !== newKim.addr);
// console.log(kim.addr, newKim.addr);
console.log(newKim)

//answer//
function copyObject2(obj){
    const copyObj = {};
    for (let k in obj){
        // console.log(k);
        copyObj[k] = obj[k];
    }
    return copyObj;
}
//answer//


// const copyObject = (obj) => {
//     const newObj = {};
//     const re = /\s*(?:,)\s*/;
//     const str = JSON.stringify(kim).replace(/{"}/gi,'');
//     for (let s of str.split(re)){
//         newObj[(s.split(':')[0])] = s.split(':')[1];
//     }
//     return newObj;
// }

// const str = JSON.stringify(obj);
// JSON.stringify(obj, null, '  '(indentation));
// const arr = str.replace('{','').replace().split(',');
// const arr = str.replace(/\{|\}/,'').split(',');
// for (let x of arr){
// }