/*
const apiResponse = {
  user: { name: "Renuka", role: "QA Engineer" },
  tests: [
    { id: 1, status: "PASS" },
    { id: 2, status: "FAIL" },
  ],
};

console.log(apiResponse.user.name);
console.log(apiResponse.tests[1].status);
console.log(apiResponse.user.email);
console.log(apiResponse.settings.theme);
*/

//independent
//Write an object called testSuiteResult with this shape: a suite (string, name of the suite),
// a summary object containing passed and failed (numbers), and a cases array containing at least two objects, each with name and status.

const testSuiteResult = {
  suite: "Login Tests",
  summary: {
    passed: 3,
    failed: 1,
  },
  cases: [
    { name: "Test Case 1", status: "PASS" },
    { name: "Test Case 2", status: "FAIL" },
  ],
};

console.log(testSuiteResult.suite);
console.log(testSuiteResult.summary.failed);
console.log(testSuiteResult.cases[1].status);
console.log(testSuiteResult.summary.defects);
console.log(testSuiteResult.regression.status);
