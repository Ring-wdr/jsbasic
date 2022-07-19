const WEEKS = ["일", "월", "화", "수", "목", "금", "토"];

const weekControl = function (obj) {
  this.widx = -1;
  this.obj = obj;
};

const korControl = new weekControl("aa");
const mathControl = new weekControl("dd");

console.log(korControl.obj);
// $btn1.addEventListener("click", weekControl($sp1));
