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

// const deptMap = new Map();
// const empDept = new Map();
// depts.forEach((team) => deptMap.set(team.dname, team));
// emps.forEach((emp) => empDept.set(emp, depts[emp.dept - 1]));

const deptMap = new Map(depts.map((d) => [d.dname, d]));
// const empDept = new Map(emps.map((e) => [e, depts[e.dept - 1]]));

const deptIDMap = new Map(depts.map((d) => [d.id, d]));
// const empDept = new Map(emps.map((e) => [e, deptIDMap.get(e.dept)])); // map.get: O(1)
const empDept = new Map(
  emps.map((e) => {
    const d = deptIDMap.get(e.dept);
    return [(delete e.dept, e), d];
    // return [{id: e.id, name: e.name}, deptIDMap.get(e.dept)]
  })
);
console.log(deptMap); // Map(2) { '인사팀' => { id: 1, dname: '인사팀' }, '개발팀' => { id: 2, dname: '개발팀' } }
console.log(empDept); // Map(2) { { id: 1, name: 'Hong' } => { id: 1, dname: '인사팀' }, { id: 2, name: 'Kim' } => { id: 2, dname: '개발팀' } }

console.log(empDept.get(kim).dname); // '개발팀'

// empDept.forEach((dept, emp) => {
//   if (dept.id === 2) console.log(emp.name);
// });

const devEmpNames = [...empDept]
  // .filter((ed) => ed[1].dname === devTeam.dname)
  .filter(([, dept]) => dept.dname === devTeam.dname)
  // .map(ed => ed[0].name);
  .map(([emp]) => emp.name);
console.log(devEmpNames.join(", "));
