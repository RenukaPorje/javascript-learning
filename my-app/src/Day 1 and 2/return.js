
//Return statement 
const checkAge = (age) => {
  if (age < 18) {
    return "Not eligible";
  }
  console.log("This line never runs for age < 18");
  return "Eligible";
};

console.log(checkAge(15));

//no arguments passed to the function
const validateSeverity = (severity) => {
  if (severity === "critical" || severity === "high" || severity === "medium" || severity === "low") {
    return ("Severity: " + severity);
  }
    return "No severity provided";
}

console.log(validateSeverity());

console.log(validateSeverity("medium"));


//No Return Statement

const logMessage = (msg) => {
  console.log(msg);
};

const result = logMessage("Test started");
console.log(result);



//early return pattern
const checkAccessClean = (isLoggedIn) => {
  if (!isLoggedIn) {
    return "Access denied";
  }
  return "Access granted";
};

console.log(checkAccessClean(true));
console.log(checkAccessClean(false));


//independent excercise
const checkStockAvailable = (quantity) => {
    if (quantity ===0){
        return "Out of stock";
    }
    return "In stock";
}

console.log(checkStockAvailable(0));
console.log(checkStockAvailable(5));