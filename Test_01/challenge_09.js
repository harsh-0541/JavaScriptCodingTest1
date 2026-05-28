function buildJsBasicsRunLabel(suiteName, environment, buildNumber) {
    const suite = suiteName.trim();
    const env = environment.trim().toLowerCase();
    const build = `build-${buildNumber}`;

    return [suite, env, build].join(" | ");
}

// Case 1
console.log(buildJsBasicsRunLabel(" Smoke Suite ", " STAGING ", 42));
// "Smoke Suite | staging | build-42"

// Case 2
console.log(buildJsBasicsRunLabel("Regression", "PROD", 7));
// "Regression | prod | build-7"