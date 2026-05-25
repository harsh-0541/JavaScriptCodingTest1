function calculateJsBasicsWeightedScore(passed, failed, skipped) {
    return (passed * 2) + (failed * -1) + (skipped * 0);
}