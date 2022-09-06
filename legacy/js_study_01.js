//1번 문제

for (let i = 2; i < 11; i++){
    let temp = Math.sqrt(i)
    let intOrNot = false;
    for (let j = 2; j * j < 11; j++){
        if (j * j == i){
            intOrNot = true;
        }
    }
    if (!intOrNot) console.log(i, temp.toFixed(3));
}

console.log();

const today = new Date();

getDate = (date) => {
    let days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일','토요일'];
    let sentense = `오늘은 ${days[date]}입니다.`;
    console.log(sentense);
}
getDate(today.getDay());


// switch (today.getDay()){
//     case 0:
//         console.log(`오늘 날씨는 일요일입니다.`);
//         return;
//     case 1:
//         console.log(`오늘 날씨는 월요일입니다.`);
//         return;
//     case 2:
//         console.log(`오늘 날씨는 화요일입니다.`);
//         return;
//     case 3:
//         console.log(`오늘 날씨는 수요일입니다.`);
//         return;
//     case 4:
//         console.log(`오늘 날씨는 목요일입니다.`);
//         return;
//     case 5:
//         console.log(`오늘 날씨는 금요일입니다.`);
//         return;
//     case 6:
//         console.log(`오늘 날씨는 토요일입니다.`);
//         return;
// }
/// in 수업
// for(let i = 2; i < 10; i += 1){
//     const r = Math.sqrt(i).toFixed(3);
//     if ((r - parseInt(r)))
//     console.log(i, r);
// }

const weekNum = today.getDay();
console.log(`오늘은 ${'일월화수목금토'.charAt(weekNum)}요일 입니다.`);
console.log(`오늘은 ${'일월화수목금토'.charAt(new Date().getDay())}요일 입니다.`);
// new Date를 묶지 않아도 line 단위로 컴파일된다