class TestCase {
  constructor(name) {
    this.name = name;
    this.status = "not run";
  }

  markPassed() {
    this.status = "passed";
    return this.name + " -> " + this.status;
  }

  markFailed() {
    this.status = "failed";
    return this.name + " -> " + this.status;
  }

  getSummary() {
    return "Summary: " + this.name + " is " + this.status;
  }
}

const test1 = new TestCase("Login test");
const test2 = new TestCase("Logout test");

console.log(test1.markPassed());
console.log(test2.markFailed());
console.log(test1.getSummary());
console.log(test2.getSummary());
