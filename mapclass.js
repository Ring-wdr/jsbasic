const hrTeam = { id: 1, dname: "인사팀" };
const devTeam = { id: 2, dname: "개발팀" };
const depts = [hrTeam, devTeam];
const hong = { id: 1, name: "Hong", dept: 1 };
const kim = { id: 2, name: "Kim", dept: 2 };
const emps = [
  hong,
  kim,
  { id: 3, name: "Park", dept: 2 },
  { id: 4, name: "Choi", dept: 2 },
];

const deptMap = new Map();
const empDept = new Map();
depts.forEach((team) => deptMap.set(team.dname, team));

console.log(deptMap.get("인사팀"));

emps.forEach((emp) => empDept.set(emp, depts[emp.dept - 1]));

console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(2) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'

empDept.forEach((dept, emp) => {
  if (dept.id === 2) console.log(emp.name);
});
