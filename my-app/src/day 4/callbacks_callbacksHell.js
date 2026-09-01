console.log("test starting");

setTimeout(function () {
  console.log("step A (slow)");
}, 200);

setTimeout(function () {
  console.log("step B (fast)");
}, 50);

console.log("test setup complete");

//independent ex

console.log("checking server status");

setTimeout(function () {
  console.log("Server is up");
}, 300);

setTimeout(function () {
  console.log("health check complete");
}, 100);

console.log("request sent");
