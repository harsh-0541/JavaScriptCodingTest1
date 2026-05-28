function countPassingJsBasicsChecks(checks) {
    return checks.filter(item => item.toLowerCase().includes("pass")).length;
}

// Example 1
console.log(countPassingJsBasicsChecks(["login-pass", "api-fail", "logout-pass"]));
// Output: 2

// Example 2
console.log(countPassingJsBasicsChecks(["SETUP PASS", "CONFIG PASS"]));
// Output: 2