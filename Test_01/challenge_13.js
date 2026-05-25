function checkJsBasicsReadinessGate(flag1, flag2, flag3) {
    // Check if ALL three flags are strictly boolean true
    if (flag1 === true && flag2 === true && flag3 === true) {
        return "READY";
    } else {
        return "BLOCKED";
    }
}