const reportBug = (title, severity) => {
  console.log(`Title: ${title}`);
  console.log(`Severity: ${severity}`);
};

reportBug("Login fails", "critical");

reportBug("critical", "Login fails");

const formatBugReport = (id, title, assignee) => {
    return (`Bug ID: ${id}, Title: ${title}, Assigned to: ${assignee}`);
}

console.log(formatBugReport(15874, "Value discrepancy", "tester_1"));

console.log(formatBugReport("tester_1", 15874, "Value discrepancy"));