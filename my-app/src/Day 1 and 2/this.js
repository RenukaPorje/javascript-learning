const tester = {
  name: "Renuka",
  greet: function () {
    console.log(`Hi, I'm ${this.name}`);
  },
};

tester.greet();

const testSuite = {
  suiteName: "Login Tests",
  describe: function () {
    console.log(`Running suite: ${this.suiteName}`);
  },
};

testSuite.describe();


//indepedent ex.

const bugReport = {
  id: 78699,
  printId: function(){
    console.log(`Bug ID: ${this.id}`);
  }
}

bugReport.printId();

const testerThis = {
  name: "Renuka",
  greetRegular: function () {
    console.log(this.name);
  },
  greetArrow: () => {
    console.log(this.name);
  },
};

testerThis.greetRegular();
testerThis.greetArrow();

//this in arrow function
const config = {
  env: "staging",
  logEnvArrow: () => {
    console.log(this.env);
  },
};

config.logEnvArrow();

//independent exc.

const report = {
  status: "passed",
  printStatus: () => {
    console.log(this.status);
  }
}

report.printStatus();


// Regular function loses this in callbacks
const lostInCallback = {
  name: "Renuka",
  greet: function () {
    console.log(this.name);
  },
};

const detachedGreet = lostInCallback.greet;
detachedGreet();

//independent Ex.

const  logger = {
  prefix: "testing",
  logMsg: function(){
    console.log(this.prefix);
  },
};

const detachedLog = logger.logMsg;
detachedLog();