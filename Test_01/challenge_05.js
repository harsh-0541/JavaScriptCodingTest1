function filterSupportedJsBasicsTopics(topics) {
    // Canonical keys + their aliases
    const aliasMap = {
        node: "node",
        runtime: "node",      // alias → canonical
        v8: "v8",
        engine: "v8",         // alias → canonical
        npm: "npm",
        "package-manager": "npm", // alias → canonical
    };

    const seen = new Set();
    const result = [];

    for (const topic of topics) {
        const normalized = topic.trim().toLowerCase();
        const canonical = aliasMap[normalized];

        if (canonical && !seen.has(canonical)) {
            seen.add(canonical);
            result.push(canonical);
        }
    }

    return result;
}

// Example 1
console.log(filterSupportedJsBasicsTopics(["NODE", " v8 ", "unknown"]));
// Output: ["node", "v8"]

// Example 2
console.log(filterSupportedJsBasicsTopics(["node", "runtime", "node"]));
// Output: ["node"]