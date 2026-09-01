function setupEnvironment(shouldSucceed) {
  return new Promise((resolve, reject) => {
    if (shouldSucceed) {
      return resolve("environment ready");
    } else {
      return reject("environment setup failed");
    }
  });
}

function runTestCase(name, shouldSucceed) {
  return new Promise((resolve, reject) => {
    if (shouldSucceed) {
      return resolve(name + " passed");
    } else {
      return reject(name + " failed");
    }
  });
}

async function runSuite(shouldSucceed) {
  try {
    const setupEnvResult = await setupEnvironment(shouldSucceed);
    console.log("Set up passed", setupEnvResult);
  } catch (err) {
    throw new Error("Test suite aborted: setup failed", { cause: err });
  } finally {
    console.log("cleanup: releasing resources");
  }

  try {
    const testRunResult = await Promise.allSettled([
      runTestCase("Login Test", true),
      runTestCase("Add to cart", false),
      runTestCase("View vouchers/coupons", false),
    ]);
    console.log("Test Run results: ", testRunResult);
  } catch (err) {
    throw new Error("Test run failed", { cause: err });
  }
}

await runSuite(true);

try {
  await runSuite(false);
} catch (err) {
  console.log(err);
}
