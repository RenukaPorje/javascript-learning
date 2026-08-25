let testCount = 0;

const incrementCount = () => {
  testCount = testCount + 1;
};

incrementCount();
incrementCount();
console.log(testCount);

//independent excercise

let bugCounter = 0;

const functionLog = () => {
    bugCounter += 1;
}

functionLog();
functionLog();
functionLog();

console.log(bugCounter);
