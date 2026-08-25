/* const bug = { id: 12, severity: "high", assignee: "Renuka" };

console.log(Object.keys(bug));
console.log(Object.values(bug));
console.log(Object.keys(bug).length);
console.log(Object.entries(bug)[1]);
*/

//independent excercise

const testConfig = {
  environment: "staging",
  browser: "chrome",
  "retry count": 3,
  headless: true,
};

console.log(Object.keys(testConfig));
console.log(Object.values(testConfig));
console.log(Object.keys(testConfig).length);

Object.entries(testConfig).forEach(function (entry) {
  console.log(entry[0], ":", entry[1]);
});
