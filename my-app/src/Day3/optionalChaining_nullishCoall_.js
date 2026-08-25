/*
let retries = 0;
console.log(retries || 5);

const testRun = { suite: "login", settings: { retries: 0 } };

console.log(testRun.settings?.retries);
console.log(testRun.settings?.timeout);
console.log(testRun.metadata?.owner);

console.log(testRun.settings?.retries ?? 10);

*/

//independent practice
const testSettings = {
  options: {
    headless: false,
    retries: 0,
  },
};

console.log(testSettings.options?.timeout);
console.log(testSettings.advanced?.mode);
console.log(testSettings.options?.headless ?? true);
console.log(testSettings.options?.retries ?? 5);
