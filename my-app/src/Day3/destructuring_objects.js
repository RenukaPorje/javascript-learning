const bug = { id: 12, severity: "high", assignee: "Renuka" };

const { assignee, id } = bug;
console.log(assignee);
console.log(id);

const { severity: level } = bug;
console.log(level);

const { priority = "unassigned" } = bug;
console.log(priority);

// In the above example, we have an object called bug with properties id, severity, and assignee. We use destructuring to extract the values of assignee and id into separate variables. We also rename the severity property to level using destructuring. Finally, we provide a default value for the priority property, which is not present in the bug object.

//Independennt exercise
const testCase = { testId: 101, title: "Login Test", owner: "Alice" };
const { title, testId } = testCase;
console.log(title);
console.log(testId);

const { owner: assignedTo } = testCase;
console.log(assignedTo);

const { testPriority = "medium" } = testCase;
console.log(testPriority);
