/* console.log("1: start");

setTimeout(function () {
  console.log("2: timeout");
}, 0);

Promise.resolve("done").then(function (value) {
  console.log("3: promise -", value);
});

console.log("4: end");

*/

//indepent ex

console.log("Checking...");

setTimeout(function () {
  console.log("timeout done");
}, 0);

const checkLogin = new Promise(function (resolve, reject) {
  const isLoggedIn = false;
  if (isLoggedIn) {
    resolve("login successful");
  } else {
    reject("login failed");
  }
});

checkLogin
  .then(function (success) {
    console.log("User login status:", success);
  })

  .catch(function (error) {
    console.log("User login status:", error);
  });
