/* //prediction check
console.log("-----");
console.log("independent ex");

async function createTestResult(requestData) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(requestData),
  });
  console.log("status:", response.status);
  const data = await response.json();
  console.log(data);
}

createTestResult({ testName: "Login Test", status: "passed" }); */

//independent ex

console.log("independent ex");

/* Write an async function checkPost(id) that:

fetches https://jsonplaceholder.typicode.com/posts/ + id
checks response.ok — if true, parses the body with .json() and logs it; 
if false, logs something like "Request failed with status: " 
+ response.status (don't bother parsing the body in the failure case)

Call checkPost(1) and checkPost(99999) sequentially (wrap both in an async function with await, 
same fix as before, to avoid interleaving). Run it, paste real output. */

async function checkPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  if (response.ok) {
    // true only for 200–299
    const data = await response.json(); // parsing the body is its own async step
    console.log(data);
  } else {
    // response.ok is false for 404, 500, etc.
    console.log("Request failed with status: " + response.status);
  }
}

async function main() {
  // the main() function is async, so it can use await inside its body.
  await checkPost(1);
  console.log("---");
  await checkPost(99999);
}
main(); // It is called without await, because we don't need to wait for it to finish before continuing.
