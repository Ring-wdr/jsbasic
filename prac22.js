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


// const copyObject = (obj) => {
//     const newObj = {};
//     const re = /\s*(?:,)\s*/;
//     const str = JSON.stringify(kim).replace(/[{"}]/gi,'');
//     for (let s of str.split(re)){
//         newObj[(s.split(':')[0])] = s.split(':')[1];
//     }
//     return newObj;
// }