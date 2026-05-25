function normalizeJsBasicsLabel(label) {

    const normalized = label.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    return "js-basic-" + normalized;

}