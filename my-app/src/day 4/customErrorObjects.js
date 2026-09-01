function parseApiResponse(response) {
  if (!response.success) {
    throw new Error("API returned an error response");
  }
  return response.data;
}

function fetchTestResults(response) {
  try {
    return parseApiResponse(response);
  } catch (err) {
    throw new Error("Failed to fetch test results", { cause: err });
  }
}

try {
  fetchTestResults({ success: false });
} catch (finalError) {
  console.log(finalError.message);
  console.log(finalError.name);
  console.log(finalError.cause.message);
  console.log(finalError.cause.name);
}

//independet ex

console.log("Independent excercise");

function openBrowserSession(sessionId) {
  if (!sessionId) {
    throw new Error("browser failed to launch");
  }
  return sessionId.data;
}

function runUiTest(sessionId) {
  try {
    return openBrowserSession(sessionId);
  } catch (err) {
    throw new Error("UI test setup failed", { cause: err });
  }
}

try {
  runUiTest(null);
} catch (finalErr) {
  console.log(finalErr.name);
  console.log(finalErr.message);
  console.log(finalErr.cause.name);
  console.log(finalErr.cause.message);
}
