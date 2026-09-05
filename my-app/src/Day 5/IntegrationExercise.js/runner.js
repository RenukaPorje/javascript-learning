import getDefaultConfig, { expected_status } from "./checkConfig.js";

class ApiCheck {
  static totalChecks = 0; // static property to keep track of the total number of checks, outside the constructor, so it is shared across all instances of the class
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.settings = structuredClone(getDefaultConfig.defaults);

    ApiCheck.totalChecks++;
  }

  //getter
  get description() {
    return `${this.endpoint} (timeout ${this.settings.timeout} ms)`;
  }

  async run() {
    const response = await fetch(getDefaultConfig.baseUrl + this.endpoint);
    if (!response.ok) {
      console.log(`Request failed with status: ${response.status}`);
      return null;
    } else {
      const jsonBody = await response.json();
      return { status: response.status, body: jsonBody };
    }
  }
}

class AuthApiCheck extends ApiCheck {
  constructor(endpoint, token) {
    super(endpoint);
    this.token = token;
  }

  async run() {
    console.log(`Authorised request with token: ${this.token}`);
    return await super.run();
  }
}

const check1 = new ApiCheck("/posts/1");
const check2 = new AuthApiCheck("/posts/2", "abc123-def456");

const result1 = await check1.run();
const result2 = await check2.run();

console.log(check1.description);
console.log(`Status match: ${result1.status === expected_status}`);
console.log(`Title: ${result1.body.title}`);
console.log(check2.description);
console.log(`Status match: ${result2.status === expected_status}`);
console.log(`Title: ${result2.body.title}`);

check1.settings.timeout = 9999;
console.log(`Original Timeout: ${getDefaultConfig.defaults.timeout}`); // should still say 5000
console.log(`Same object? : ${check1.settings === getDefaultConfig.defaults}`); // should say false
// === gives false because check1.settings is a deep copy of getDefaultConfig.defaults, so they are two separate objects in memory, even though they have the same contents.

console.log(`total checks: ${ApiCheck.totalChecks}`); // should say 2, because we created two instances of ApiCheck (one of which is a subclass instance, but it still counts as an instance of ApiCheck    )
