
const bugSeverity  = "critical";

if (bugSeverity === "critical") {
    console.log("This bug needs immediate attention!");
} 
else if (bugSeverity === "high") {
    console.log("This bug should be prioritized.");
} 
else if (bugSeverity === "medium") {
    console.log("This bug can be addressed in the next sprint.");
} 
else if (bugSeverity === "low"){
    console.log("This bug can be fixed in the future.");
} 
else  {
    console.log("Invalid bug severity level.");
}

