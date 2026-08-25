const isLoggedIn = true;
const hasAdminAccess = false;

console.log(isLoggedIn && hasAdminAccess);
console.log(isLoggedIn || hasAdminAccess);
console.log(!hasAdminAccess);

const isTestEnvironmentStable = true;
const hasValidCredentials = false;

const safeStatus = "Safe to run tests.";
const unsafeStatus = "Not safe to run tests.";

if (isTestEnvironmentStable && hasValidCredentials) {
    console.log(safeStatus);
}
else {
    console.log(unsafeStatus);
}