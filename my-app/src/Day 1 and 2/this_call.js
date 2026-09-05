function reportResult(status, durationMs) {
  console.log(`[${this.suiteName}] ${status} in ${durationMs}ms`);
}

const apiSuite = { suiteName: "API Suite" };
const uiSuite = { suiteName: "UI Suite" };

reportResult.call(apiSuite, "passed", 120);
reportResult.call(uiSuite, "failed", 340);

//independent excercise

console.log("----------");
function logStep(stepName, status) {
  console.log(`${this.testCaseID} | ${stepName} | ${status}`); // this.testCaseID will be replaced by the testCaseID of the object that is passed as this to logStep() using call()
}

const loginTest = { testCaseID: "TC101" };
const checkoutTest = { testCaseID: "TC102" };

logStep.call(loginTest, "Enter username", "passed"); //sending the object loginTest as this to logStep() using call()
logStep.call(loginTest, "Enter password", "failed");

logStep.call(checkoutTest, "Add item to cart", "failed"); //sending the object checkoutTest as this to logStep() using call()
