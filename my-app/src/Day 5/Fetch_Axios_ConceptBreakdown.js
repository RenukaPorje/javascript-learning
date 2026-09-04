async function getPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  console.log("status:", response.status);
  console.log("ok:", response.ok); // true only for 200–299
  const data = await response.json(); // SECOND await — parsing the body is its own async step
  console.log(data);
}

getPost(1); // a real post — should succeed normally
getPost(99999); // doesn't exist — expect a 404, but does fetch's Promise actually reject?

//since the first getPost() call is still in progress, this second call will run concurrently.
// The first call will log its results when it finishes, and the second call will log its results when it finishes. They may finish in either order, depending on network timing.
//Or the second call may finish first, and log its results before the first call finishes. The order of the logs is not guaranteed, because both calls are asynchronous and run concurrently.

//In the next example, both calls are awaited at the call site, so the second call will not start until the first call has finished and returned its result.
// The second call will log its results after the first call has finished. The order of the logs is guaranteed, because
// both calls are awaited at the call site, so they run sequentially.

async function getPost(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
  );
  console.log("status:", response.status);
  console.log("ok:", response.ok); // true only for 200–299
  const data = await response.json(); // SECOND await — parsing the body is its own async step
  console.log(data);
}

async function main() {
  await getPost(1); // a real post — should succeed normally
  console.log("---");
  await getPost(99999); // doesn't exist — expect a 404
}
main(); // the main() function is async, so it can use await inside its body.
// It is called without await, because we don't need to wait for it to finish before continuing.
// The main() function will run in the background, and will log its results when it finishes.
