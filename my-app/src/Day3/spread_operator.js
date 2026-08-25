const suiteA = ["smoke", "regression"];
const suiteB = ["sanity"];

const allSuites = [...suiteA, ...suiteB];
console.log(allSuites);

allSuites.push("e2e");
console.log(suiteA);

const settingsA = { retries: 1, browser: "chrome" };
const settingsB = { retries: 3 };
const merged = { ...settingsA, ...settingsB };
console.log(merged);

//independent exercise

const smokeTests = ["checkout", "payments", "order confirmation"];

const regressionTests = ["Login", "register", "logout"];

const allTests = [...smokeTests, ...regressionTests];

allTests.push("Add product");

console.log(allTests);
console.log(smokeTests);

const defaultConfig = { env: "staging", timeout: 5000 };
const envConfig = { timeout: 10000 };

const mergedConfig = { ...defaultConfig, ...envConfig };
console.log(mergedConfig);
