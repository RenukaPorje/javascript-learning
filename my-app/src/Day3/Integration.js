const testRunResults = [
  { name: "login test", status: "PASS", duration: 320 },
  { name: "checkout test", status: "FAIL", duration: 890, retries: 2 },
  { name: "search test", status: "PASS", duration: 150 },
  { name: "payment test", status: "FAIL", duration: 540 },
  { name: "logout test", status: "PASS", duration: 90 },
];

//filter
const failedTests = testRunResults.filter(function (testRunResult) {
  console.log("Checking: ", testRunResult);
  return testRunResult.status === "FAIL";
});
console.log(failedTests);

//map

const failedNames = failedTests.map(function (failedTest) {
  console.log("Checking: ", failedTest);
  return failedTest.name;
});
console.log(failedNames);

//reduce
const totalFailedDuration = failedTests.reduce(function (totalD, failedTest) {
  return (totalD += failedTest.duration);
}, 0);

console.log(totalFailedDuration);

//copy : spread

const durationSort = [...failedTests];

const sortedDesc = durationSort.sort(function (test1, test2) {
  /* console.log(test1);
  console.log(test2);
  */
  return test2.duration - test1.duration;
});

console.log(durationSort);
/*
const [sortedTest1, sortedTest2] = [...sortedDesc];
console.log(sortedTest1);

const { name, duration } = sortedTest1;
console.log(duration);

console.log(`Slowest failure: "${sortedTest1.name}" at ${duration}ms`);
*/

const { name, duration } = sortedDesc[0];
console.log(`Slowest failure: "${name}" at ${duration}ms`);

//redeuce to get total retries
const totalRetries = failedTests.reduce(function (totalR, failedTest) {
  console.log(failedTest);
  return (totalR += failedTest.retries ?? 0);
}, 0);

console.log(totalRetries);

//summary object
const suiteName = { suite: "checkout flow" };

const finalReport = {
  totalFailed: failedTests.length,
  totalFailedDuration: totalFailedDuration,
  totalRetries: totalRetries,
};

const FinalSummary = { ...suiteName, ...finalReport };

console.log(FinalSummary);
