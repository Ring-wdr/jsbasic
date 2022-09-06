const a5 = [1, 5, 4, 11, 7];

a5.sort(); //[1,11,4,5,7]
a5.sort((a, b) => a - b); //[1,4,5,7,11]
a5.sort((a, b) => b - a); //[11,7,5,4,1]

// slice (순수)
const arr2 = [1, 2, 3, 4, 5];

arr2.slice(1, 3); //==
arr2.slice(1, -2); //==
arr2.slice(-4, -2);
// splice *(비순수, 금방 까먹어서 ㅎㅎㅋㅋㅈㅅ)
arr2.splice(1, 3); // [2,3,4] 삭제

// copyWithin(끼워 넣을 위치, 복사 시작 위치, 복사 종료 위치)
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); ///[1, 3, 4, 4]
