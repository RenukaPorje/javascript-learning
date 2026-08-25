const testerName = "Renuka";

let bugCount = 3;

const isTestingComplete = true;

bugCount += 2;

const isBugCountCorrect = bugCount ===5;
console.log(isBugCountCorrect); // Output: true

let eUrl;
console.log(eUrl); // Output: undefined
console.log(typeof eUrl); // Output: undefined

let finalMessage = `${testerName} found ${bugCount} bugs in the application.`;
console.log(finalMessage); // Output: Renuka found 5 bugs in the application.