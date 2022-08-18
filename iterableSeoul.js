class Subway {
  #stations = [
    "신설동",
    "용두",
    "신답",
    "용답",
    "시청",
    "충정로",
    "아현",
    "이대",
    "신촌",
    "홍대입구",
    "합정",
    "당산",
    "영등포구청",
    "문래",
    "신도림",
    "대림",
    "구로디지털단지",
    "신대방",
    "신림",
    "봉천",
    "서울대입구",
    "낙성대",
    "사당",
    "방배",
    "서초",
    "교대",
    "강남",
    "역삼",
    "선릉",
    "삼성",
    "종합운동장",
    "신천",
    "잠실",
    "잠실나루",
    "강변",
    "구의",
    "건대입구",
    "성수",
    "뚝섬",
    "한양대",
    "분당선",
    "경의선",
    "왕십리",
    "상왕십리",
    "신당",
    "동대문역사문화공원",
    "을지로4가",
    "을지로3가",
    "을지로입구",
    "시청",
  ];
  #start;
  #end;

  constructor(start, end) {
    this.#start = start;
    this.#end = end;
  }
  set _start(string) {
    this.#start = string;
  }
  set _end(string) {
    this.#end = string;
  }

  get startIdx() {
    return this.#stations.findIndex((station) => station === this.#start);
  }
  // get endIdx() {
  //   return this.#stations.findIndex((station) => station === this.#end) + 1;
  // }
  [Symbol.iterator]() {
    let idx = this.startIdx - 1;
    const next = () => {
      idx = this.#stations[idx] !== this.#end ? idx + 1 : this.#stations.length;
      return {
        value: this.#stations[idx],
        done: !this.#stations[idx],
      };
    };
    return { next };
    // return this.#stations.slice(this.startIdx, this.endIdx).values();
    //범위를 정해두고 하지 말것...
  }

  print() {
    console.log(`${this.#start}역부터 ${this.#end}역까지의 총 역수는...`);
    console.log(`${this.endIdx - this.startIdx} 개입니다.`);
  }
}

const routes = new Subway("문래", "신림");
routes.print();
console.log([...routes]);

routes._end = "봉천";
console.log([...routes]);

routes._start = "당산";
console.log([...routes]);

console.log("====-=-==-=========");

const routes2 = new Subway("구로디지털단지", "성수");
routes2.print();
console.log([...routes2]);

// console.log("============================================");
// const it1 = routes[Symbol.iterator]();
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log(it1.next());
// console.log("============================================");

const it2 = routes2[Symbol.iterator]();
while (true) {
  const x = it2.next();
  console.log(x);
  if (x.done) break;
}
