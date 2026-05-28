function mergeJsBasicsConfig(base, overrides) {
    const merged = { ...base, ...overrides };

    if (merged.retries === undefined) {
        merged.retries = 0;
    }

    return merged;
}

// Case 1
console.log(mergeJsBasicsConfig({ retries: 1, env: "dev" }, { retries: 3 }));
// { retries: 3, env: "dev" }

// Case 2
console.log(mergeJsBasicsConfig({ env: "qa" }, { timeout: 5000 }));
// { env: "qa", timeout: 5000, retries: 0 }

// Case 3
console.log(mergeJsBasicsConfig({ env: "dev", retries: 2 }, { env: "stage" }));
// { env: "stage", retries: 2 }