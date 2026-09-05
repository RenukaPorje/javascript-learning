//example 1

function reportResult(status, durationMs) {
  console.log(`[${this.suiteName}] ${status} in ${durationMs}ms`);
}

const backendSuite = { suiteName: "API Suite" };

reportResult.call(backendSuite, "passed", 120); //also, showing how to use call(), next to apply(), to see how it assigns the arguments to the parameters of the function
reportResult.apply(backendSuite, ["passed", 120]);

//if they do the job, why need apply() at all?
//example 2

function logStep(stepName, status, durationMs) {
  console.log(`${this.testCaseID} | ${stepName} | ${status} | ${durationMs}ms`);
}

const loginTest = { testCaseID: "TC101" };

const stepRows = [
  // each row is already shaped like logStep's parameter list
  ["Enter username", "passed", 90],
  ["Enter password", "passed", 75],
  ["Click submit", "failed", 310],
];

stepRows.forEach((row) => {
  logStep.apply(loginTest, row); // row unpacks into stepName/status/durationMs; loginTest becomes this.
});

//Real life usage: During Data-driven testing, we dont always know beforehand the number of parameters that will be needed,and passed to a function.
//In such cases, we can use apply() to pass the parameters as an array.

//independent excercise

console.log("----------");

function reportEndpoint(endpointName, statusCode, responseTimeMs) {
  console.log(
    `${this.env} | ${endpointName} | ${statusCode} | ${responseTimeMs}ms`,
  );
}

const stagingEnv = { env: "Staging" };
const productionEnv = { env: "Production" };

const stagingRows = [
  ["GET /api/users", 200, 120],
  ["POST /api/login", 401, 75],
  ["GET /api/dashboard", 500, 310],
];

const productionRows = [
  ["PUT /api/users/1", 200, 90],
  ["DELETE /api/users/1", 200, 60],
];

stagingRows.forEach((row) => {
  reportEndpoint.apply(stagingEnv, row); // row unpacks into endpointName/statusCode/responseTimeMs; stagingEnv becomes this.
});

productionRows.forEach((row) => {
  reportEndpoint.apply(productionEnv, row); // row unpacks into endpointName/statusCode/responseTimeMs; productionEnv becomes this.
});
