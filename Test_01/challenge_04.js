function getJsBasicsKeywordMeaning(term) {
    const keywordMap = {
        node: "runtime",
        v8: "engine",
        npm: "package-manager",
        javascript: "language",
        ecmascript: "standard",
        browser: "environment",
    };

    const normalized = term.trim().toLowerCase();

    return keywordMap[normalized] ?? "unknown";
}

// Test Cases
console.log(getJsBasicsKeywordMeaning("NODE"));        // "runtime"
console.log(getJsBasicsKeywordMeaning(" v8 "));        // "engine"
console.log(getJsBasicsKeywordMeaning("npm"));         // "package-manager"
console.log(getJsBasicsKeywordMeaning("not-a-topic")); // "unknown"