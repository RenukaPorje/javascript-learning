const test = { name: "checkout flow", "test id": 7, status: "PASS" };

console.log(test.name);
console.log(test["test id"]);

let field = "status";
console.log(test[field]);

field = "test id";
console.log(test[field]);

//independent excercise

const bugReport = {
  title: "Login button not working",
  severity: "high",
  "reported by": "QA team",
};

console.log(bugReport.title);

console.log(bugReport["reported by"]);

let field2 = "severity";
console.log(bugReport[field2]);

let field3 = "reported by";
console.log(bugReport[field3]);
