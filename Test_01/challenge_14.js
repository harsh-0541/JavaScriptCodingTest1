function buildJsBasicsChecklist(tasks) {
    const result = [];
    let counter = 1;

    for (let task of tasks) {
        const trimmed = task.trim();

        // Skip blank values
        if (trimmed === '') {
            continue;
        }

        // Add numbered item with " - TODO"
        result.push(`${counter}. ${trimmed} - TODO`);
        counter++;
    }

    return result;
}