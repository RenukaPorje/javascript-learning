/* Independent exercise (Chunk D) — Day 2 unprompted integration exercise, corrected version:

Write a function evaluateTestRun with two parameters, in this exact order: passRate (a number, default value 100) as the first parameter, 
and onComplete (a callback function) as the second, required parameter.

Inside evaluateTestRun, use a guard clause: if passRate is less than 80, call onComplete("Build failed") and return immediately. 
Otherwise, call onComplete("Build passed").

Separately, write two small callback functions of your own:

logResult(message) — just prints message as-is.
logResultLoud(message) — prints message converted to uppercase.

Call evaluateTestRun three times:

With a passRate below 80, using logResult as the callback.
With a passRate of 80 or above, using logResultLoud as the callback.
To test the default: explicitly pass undefined as the first argument — evaluateTestRun(undefined, logResult) 
— since passRate is not the last parameter, you can't omit it entirely while still supplying onComplete; 
you must pass undefined explicitly to trigger the default.
*/

function evaluateTestRun(passRate = 100, onComplete) {
  if (passRate < 80) {
    onComplete("Build failed");
    return;
  } else {
    onComplete("Build passed");
  }
}
function logResult(message) {
  console.log(message);
}
function logResultLoud(message) {
  console.log(message.toUpperCase());
}

evaluateTestRun(79, logResult);
evaluateTestRun(81, logResultLoud);
evaluateTestRun(undefined, logResult);
