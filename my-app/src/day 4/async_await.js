/* function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("done waiting");
    }, ms);
  });
}

async function runTest() {
  console.log("start");
  const result = await delay(1000);
  console.log(result);
  console.log("end");
}

runTest();
console.log("this runs while runTest is paused");

// .then()/.catch() style — what you already know
delay(2000)
  .then(function (coffee) {
    console.log(coffee);
  })
  .catch(function (reason) {
    console.log("failed:", reason);
  });

// await style — same Promise, different syntax
async function getCoffee() {
  try {
    const coffee = await delay(2000);
    console.log(coffee);
  } catch (reason) {
    console.log("failed:", reason);
  }
}

*/

function validateTest(name) {
  return Promise.resolve(name + " is valid");
}

async function runFullTest() {
  console.log("A: starting test");
  const valid = await validateTest("login test");
  console.log("B:", valid);
}

runFullTest();
console.log("C: main script continues");

//independent ex

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
  const envStatus = await checkEnvironmentReady(status);
  console.log(envStatus);
  const smokeTest = await runSmokeTest(envStatus);
  console.log(smokeTest);
}

runCIStep("broken");

// new UnhandledPromiseRejection(reason) is what calls for a try and catch block. Since the case of promise
// being rejected remains unhandled- hence teh error - fixed in my-app/src/day 4/try_catch_finally.js
