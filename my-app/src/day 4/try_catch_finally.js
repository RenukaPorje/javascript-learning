//fixed from async and wiat independent ex: no catch --> giving unhandled exception
/*
function checkEnvironmentReady(status) {
  if (status == "configured") {
    return Promise.resolve("environment ready");
  } else {
    return Promise.reject("environment not configured");
  }
}

function runSmokeTest(env) {
  return Promise.resolve(env + "-> smoke test passed");
}

async function runCIStep(status) {
  try {
    const envStatus = await checkEnvironmentReady(status);
    console.log(envStatus);
    const smokeTest = await runSmokeTest(envStatus);
    console.log(smokeTest);
  } catch (reason) {
    console.log(
      "Environment check & smoke Test failed : " + status + " -> " + reason,
    );
  } finally {
    console.log("Environment check complete");
  }
}

runCIStep("broken");

*/
//independent ex

function runTestCase(caseName) {
  if (caseName !== "flaky test") {
    return Promise.resolve(caseName + " -> passed");
  } else return Promise.reject(caseName + " -> failed intermittently");
}

async function executeTestCase(caseName) {
  try {
    const runTest = await runTestCase(caseName);
    console.log(runTest);
  } catch (reason) {
    console.log("Failed : " + reason);
  } finally {
    console.log("test case complete: " + caseName);
  }
}

executeTestCase("Passing test");
executeTestCase("flaky test");
