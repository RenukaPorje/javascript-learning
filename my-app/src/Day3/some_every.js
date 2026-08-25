/* 
const buildA = ["PASS", "PASS", "FAIL", "PASS"];
const buildB = ["PASS", "PASS", "PASS"];

const buildAClean = buildA.every(function (r) {
  return r === "PASS";
});
console.log(buildAClean);

const buildBClean = buildB.every(function (r) {
  return r === "PASS";
});
console.log(buildBClean);

const buildC = ["PASS", "PASS", "PASS", "PASS"];
const buildD = ["PASS", "FAIL", "PASS", "PASS"];

const buildCHasFailure = buildC.some(function (r) {
  return r === "FAIL";
});
console.log(buildCHasFailure);

const buildDHasFailure = buildD.some(function (r) {
  return r === "FAIL";
});
console.log(buildDHasFailure);

*/
//independent practice

const statusCodes = [200, 201, 202, 400, 404, 500];

const checkErrorExists = statusCodes.some(function (statusCode) {
  return statusCode >= 400;
});

console.log(checkErrorExists);

const checkAllSuccess = statusCodes.every(function (statusCode) {
  return statusCode >= 200 && statusCode < 300;
});

console.log(checkAllSuccess);

const cleanStatusCodes = [200, 201, 202, 204];

const anyErrors = cleanStatusCodes.some(function (statusCode) {
  return statusCode >= 400;
});

console.log(anyErrors);

const allSucesses = cleanStatusCodes.every(function (statusCode) {
  return statusCode >= 200 && statusCode < 300;
});

console.log(allSucesses);
