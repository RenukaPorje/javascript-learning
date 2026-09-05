//example 1

function reportStatus() {
  console.log(`[${this.suiteName}] reporting`);
}

const apiSuite = { suiteName: "API Suite" };

const boundReport = reportStatus.bind(apiSuite);

boundReport();

try {
  reportStatus();
} catch (err) {
  console.log("original still follows normal rules:", err.message);
}

console.log(boundReport === reportStatus);

//example 2
const reporter = {
  suiteName: "Checkout Suite",
  logResult(status) {
    console.log(`[${this.suiteName}] ${status}`);
  },
};

function runTest(onComplete) {
  onComplete("passed");
}

try {
  runTest(reporter.logResult);
} catch (err) {
  console.log("A failed:", err.message);
}

runTest(reporter.logResult.bind(reporter));

const logPassed = reporter.logResult.bind(reporter, "passed");
logPassed();
logPassed("failed");

//independent exercise

console.log("----------");

const backendSuite = {
  suiteName: "Backend Suite",
  attemptStatus(attemptNumber) {
    console.log(`[${this.suiteName}] Attempt: ${attemptNumber}`);
  },
};

function retry(callbackFunction) {
  callbackFunction(1);
  callbackFunction(2);
}

try {
  retry(backendSuite.attemptStatus);
} catch (err) {
  console.log("B failed:", err.message);
}

const boundAttemptStatus = backendSuite.attemptStatus.bind(backendSuite);
retry(boundAttemptStatus);

retry(backendSuite.attemptStatus.bind(backendSuite, 5));


/* conclusion

call — runs now, this first, arguments listed individually.
apply — runs now, this first, arguments in one array.
bind — runs nothing; returns a new function with this locked. Original untouched.
*/