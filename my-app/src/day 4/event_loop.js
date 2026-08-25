console.log("1");

setTimeout(function () {
  console.log("2");
}, 0);

console.log("3");

setTimeout(function () {
  console.log("4");
}, 0);

console.log("5");

//independent ex

console.log("test suite starting");

setTimeout(function () {
  console.log("cleanup step 1");
}, 0);

console.log("running tests A");

setTimeout(function () {
  console.log("cleanup step 2");
}, 0);

console.log("running tests B");
