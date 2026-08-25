const responseTimes = [120, 450, 80, 300];

const totalTime = responseTimes.reduce(function (acc, time) {
  return acc + time;
}, 0);
console.log(totalTime);

const broken = responseTimes.reduce(function (acc, time) {
  acc + time;
}, 0);
console.log(broken);

// Your CI pipeline just finished running the suite — here are each test's
// duration in milliseconds, and you need the total suite runtime for
// today's status update to the team.
const testDurations = [1200, 3400, 800, 2100, 1500];

const totalSuiteTime = testDurations.reduce(function (acc, duration) {
  return acc + duration;
}, 0);

console.log(totalSuiteTime); // total ms the whole run took

//independent excersise

const loadTestTimes = [1200, 3400, 800, 2100, 1500];

const slowestTestTime = loadTestTimes.reduce(function (acc, testTime) {
  return testTime > acc ? testTime : acc;
}, 0);

console.log(slowestTestTime); // slowest test time in ms

const timeSum = loadTestTimes.reduce(function (acc, testTime) {
  return acc + testTime;
}, 0);

console.log(timeSum); // total time of all tests in ms
