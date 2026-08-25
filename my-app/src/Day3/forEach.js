const results = ["PASS", "FAIL", "PASS"];

results.forEach(function (result, index) {
  console.log(index, result);
});

const returned = results.forEach(function (result) {
  return result;
});
console.log(returned);

//independent excercise

const bugSeverities = ["low", "medium", "critical", "high", "critical"];
bugSeverities.forEach(function (severity, index) {
  console.log(`${index} : ${severity}`);
});

let criticalCount = 0;
bugSeverities.forEach(function (severity) {
  if (severity === "critical") {
    criticalCount += 1;
  }
});

console.log(criticalCount);
