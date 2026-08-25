const queue = ["testA", "testB", "testC", "testD"];

queue.push("testE");
console.log(queue);

const last = queue.pop();
console.log(last);
console.log(queue);

queue.splice(1, 2);
console.log(queue);

//independent practice

const pendingTests = ["test1", "test2", "test3", "test4"];
pendingTests.push("Test5");
const removedTest = pendingTests.pop();
console.log(removedTest);
pendingTests.splice(0, 1);
console.log(pendingTests);
pendingTests.splice(1, 0, "Test6");
console.log(pendingTests);
