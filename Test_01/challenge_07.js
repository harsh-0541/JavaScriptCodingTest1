function summarizeJsBasicsResults(checks) {
    return {
        total: checks.length,
        passed: checks.filter(item => item.toLowerCase().includes("pass")).length,
        failed: checks.filter(item => item.toLowerCase().includes("fail")).length,
        skipped: checks.filter(item => item.toLowerCase().includes("skip")).length,
    };
}

// Case 1
console.log(summarizeJsBasicsResults(["login-pass", "api-fail", "profile-skip"]));
// { total: 3, passed: 1, failed: 1, skipped: 1 }

// Case 2
console.log(summarizeJsBasicsResults([]));
// { total: 0, passed: 0, failed: 0, skipped: 0 }

// Case 3
console.log(summarizeJsBasicsResults(["a-pass", "b-pass"]));
// { total: 2, passed: 2, failed: 0, skipped: 0 }