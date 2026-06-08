let statusCode = 401;

switch (statusCode) {
    case 200:
        console.log("Status Code: 200\n" +
            "Result: PASS - OK: " +
            "Request successful");
        break;

    case 201:
        console.log("Status Code: 201\n" +
            "Result: PASS - Created: " +
            "Resource created successfully");
        break;

    case 301:
        console.log("Status Code: 301\n" +
            "Result: WARNING - Moved Permanently: " +
            "URL has changed");
        break;

    case 400:
        console.log("Status Code: 400\n" +
            "Result: FAIL - Bad Request: " +
            "Check request payload");
        break;
    case 401:
        console.log("Status Code: 401\n" +
            "Result: FAIL - Unauthorized: " +
            "Check auth token");
        break;

    case 403:
        console.log("Status Code: 403\n" +
            "Result: FAIL - Forbidden: " +
            "Insufficient permissions");
        break;

    case 404:
        console.log("Status Code: 404\n" +
            "Result: FAIL - Not Found: " +
            "Check endpoint URL");
        break;

    case 500:
        console.log("Status Code: 500\n" +
            "Result: FAIL - Internal Server Error: " +
            "Backend issue");
        break;

    default:
        console.log("Status Code: " + statusCode +
            "\nResult: UNKNOWN - " +
            "Unhandled status code");
}