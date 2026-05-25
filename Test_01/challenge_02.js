function isValidJsBasicsIdentifier(identifier) {
    // Check if it's a non-empty string after trimming
    if (typeof identifier !== 'string' || identifier.trim() === '') {
        return false;
    }

    const trimmed = identifier.trim();

    // Check if it starts with a letter, underscore, or dollar sign
    // and remaining characters are letters, digits, underscore, or dollar sign
    const validPattern = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    if (!validPattern.test(trimmed)) {
        return false;
    }

    // Reject reserved words
    const reservedWords = ['let', 'const', 'var', 'class', 'function', 'return'];
    if (reservedWords.includes(trimmed)) {
        return false;
    }

    return true;
}