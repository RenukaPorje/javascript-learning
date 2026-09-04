// simulating: preparing a test request body to send to an API
const requestPayload = { username: "renuka", retries: 3, active: true };

// stringify: this is what actually gets sent over the network as the request body
const requestBody = JSON.stringify(requestPayload);
console.log(requestBody);
console.log(typeof requestBody);

// simulating: parsing an API's raw text response back into usable data
const rawApiResponse =
  '{"status":200,"message":"login successful","attempts":1}';
const response = JSON.parse(rawApiResponse);
console.log(response.message);
console.log(typeof response);

//independent ex

console.log("Independent exercise");

//Write an object testRunResult with at least: a string field, a number field,
// a boolean field, and one function property (e.g., a method like logResult: function() {...}).
const testRunResult = {
  status: "passed",
  score: 95,
  isComplete: true,
  logResult: function () {
    console.log(`Test Result: ${this.status}, Score: ${this.score}`);
  },
};

const stringifiedResult = JSON.stringify(testRunResult);
console.log(stringifiedResult);
console.log(stringifiedResult.score); //This will be undefined because stringifiedResult is a string, not an object.
console.log(typeof stringifiedResult);
console.log(stringifiedResult.isComplete); //This will also be undefined for the same reason.
console.log(stringifiedResult.status); //This will also be undefined for the same reason.

//Write your own raw JSON string (a fake "config" with at least 3 fields),
// JSON.parse it back into an object, log one property directly, and log the typeof of the parsed result.

const rawConfig = '{"env":"production","version":1.2,"debug":false}';
const parsedConfig = JSON.parse(rawConfig);
console.log(parsedConfig.env); // This will log "production" because parsedConfig is now a JavaScript object, and we can access its properties directly.
console.log(typeof parsedConfig); // This will log "object" because parsedConfig is now a JavaScript object, not a string.
console.log(parsedConfig.version);
console.log(parsedConfig.debug);
