/* const users = [
  { name: "A", active: false },
  { name: "B", active: true },
  { name: "C", active: true },
];

const activeUser = users.find(function (user) {
  console.log("checking", user.name);
  return user.active;
});
console.log(activeUser);

const missing = users.find(function (user) {
  return user.name === "Z";
});

console.log(missing); 

*/

//independent practice

const testRuns = [
  { id: 1, status: "failed" },
  { id: 2, status: "passed" },
  { id: 3, status: "failed" },
  { id: 4, status: "passed" },
  { id: 5, status: "failed" },
];

const failedRuns = testRuns.find(function (run) {
  console.log("checking", run.id);
  return run.status === "failed";
});

console.log(failedRuns);

const invalidRun = testRuns.find(function (run) {
  return run.id === 100;
});

console.log(invalidRun);
console.log(testRuns);
