const original = { name: "Login Suite", config: { retries: 3 } };

const shallowCopy = { ...original };
shallowCopy.config.retries = 99; // mutates the SHARED nested object
console.log(original.config.retries); // affected, even though we only touched shallowCopy!

//so at this point the original.config.retries = 99
const deepCopy = structuredClone(original);
deepCopy.config.retries = 1;
console.log(original.config.retries); // NOT affected — truly independent

//independent ex

const baseTestConfig = {
  browser: "chromium",
  options: { headless: true, timeout: 30000 },
};

const shallowConfig = { ...baseTestConfig };
shallowConfig.options.headless = false;
console.log(baseTestConfig.options.headless);

const deepConfigCopy = structuredClone(baseTestConfig);
deepConfigCopy.options.timeout = 25760;
console.log(baseTestConfig.options.timeout);
