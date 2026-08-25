const reportBug = (title, severity) => {
  console.log(`Title: ${title}`);
  console.log(`Severity: ${severity}`);
};

reportBug("Login fails");
reportBug("Login fails", "critical", "extra info");