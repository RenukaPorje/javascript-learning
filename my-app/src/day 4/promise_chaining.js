/* function checkStock(item) {
  return Promise.resolve(item + " in stock");
}
function reserveItem(status) {
  return Promise.resolve(status + " → reserved");
}

checkStock("laptop")
  .then(function (status) {
    return reserveItem(status);
  })
  .then(function (result) {
    console.log(result);
  });

checkStock("mouse").then(function (status) {
  console.log(status);
});

Promise.resolve("long")
  .then(function (val) {
    return Promise.resolve(val + "-step2");
  })
  .then(function (val) {
    console.log(val);
  });

Promise.resolve("short").then(function (val) {
  console.log(val);
});

*/
//independent ex

function validateTest(name) {
  return Promise.resolve(name + " is valid");
}

function runTest(status) {
  return Promise.resolve(status + " -> executed");
}

validateTest("login test")
  .then(function (valid) {
    return runTest(valid);
  })
  .then(function (result) {
    console.log(result);
  })

  .catch(function (error) {
    console.log("Failed:", error);
  });

validateTest("logout test").then(function (valid) {
  console.log(valid);
});
