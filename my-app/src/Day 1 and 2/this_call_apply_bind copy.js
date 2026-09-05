const tester = { name: "Renuka" };

function greet() {
  console.log("Hi, I'm " + this.name);
}

greet.call(tester); // "run greet() right now, and treat tester as this"

//call() and apply() are very similar, but apply() takes an array of arguments instead of a list of arguments.

function greetSecond(city, role) {
  console.log("Hi, I'm " + this.name + ", a " + role + " based in " + city);
}

greetSecond.call(tester, "Dublin", "QA Engineer"); // arguments passed individually
greetSecond.apply(tester, ["Dublin", "QA Engineer"]); // arguments passed as ONE array

function greetThird() {
  console.log("Hi, I'm " + this.name);
}

const boundGreet = greetThird.bind(tester); // does NOT print anything yet — just creates a new function
boundGreet(); // NOW it runs, with this permanently locked to tester

//Example 2
console.log("----------");
const testLogger = {
  prefix: "[QA]",
  log: function (message) {
    console.log(this.prefix + " " + message);
  },
};

function runAsyncTask(callback) {
  // simulates something calling your callback later, detached from testLogger
  callback("Task completed");
}

runAsyncTask(testLogger.log); // passing the method directly
runAsyncTask(testLogger.log.bind(testLogger)); // bind() applied before passing
