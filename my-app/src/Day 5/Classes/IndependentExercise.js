class BugReport {
  constructor(title) {
    this.title = title;
    this.severity = "unassigned";
  }

  setSeverity(level) {
    this.severity = level;
    return this.severity + " impact on the system's functionality";
  }

  getDetails() {
    return this.title + " | severity: " + this.severity;
  }
}

const bugID456 = new bugReport("Incorrect Field name");
const bugID741 = new bugReport("Missing dropdown values");

console.log(bugID456.setSeverity("Low"));
console.log(bugID456.getDetails());

console.log(bugID741.setSeverity("High"));
console.log(bugID741.getDetails());
