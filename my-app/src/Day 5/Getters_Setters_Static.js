class TestSuite {
  constructor(name, totalTests) {
    // Runs once, automatically, every time you do `new TestSuite(...)`.
    // Sets up THIS instance's own starting values.
    this.name = name;
    this.totalTests = totalTests;

    // Underscore prefix = convention for "this is the real stored value,
    // don't touch it directly — go through the getter/setter instead."
    this._passCount = 0;

    // STATIC property: lives on the CLASS itself (TestSuite), not on
    // any one instance. Every instance created adds 1 to this SAME
    // shared counter — it's not reset per instance like this.name is.
    TestSuite.totalSuitesCreated = (TestSuite.totalSuitesCreated || 0) + 1;
  }

  // GETTER: lets you write `suite1.passRate` (looks like reading a plain
  // property, no parentheses) but it actually RUNS this function every
  // time, calculating a fresh value from other properties.
  // Earns its place because passRate is never stored anywhere directly —
  // it only exists as a live calculation.
  get passRate() {
    return (this._passCount / this.totalTests) * 100 + "%";
  }

  // SETTER: lets you write `suite1.passCount = 7` (looks like plain
  // assignment) but it actually RUNS this function first, which can
  // reject bad values before anything gets stored.
  // Earns its place because it enforces a real rule (can't be negative,
  // can't exceed totalTests) that plain assignment could never enforce.
  set passCount(value) {
    if (value < 0 || value > this.totalTests) {
      throw new Error("passCount must be between 0 and totalTests");
    }
    this._passCount = value; // only reaches here if the value passed validation
  }

  // STATIC METHOD: called on the CLASS itself — TestSuite.getTotalSuites() —
  // never on an instance (suite1.getTotalSuites() would NOT work).
  // Makes sense as static because "total suites ever created" isn't a
  // property of any single suite — it belongs to the whole class.
  static getTotalSuites() {
    return TestSuite.totalSuitesCreated;
  }
}

const suite1 = new TestSuite("Login Suite", 10);
suite1.passCount = 7;        // triggers the SETTER — validates 7, then stores it
console.log(suite1.passRate); // triggers the GETTER — calculates (7/10)*100 + "%" → "70%"

const suite2 = new TestSuite("Checkout Suite", 5);
console.log(TestSuite.getTotalSuites()); // reads the shared static counter → 2