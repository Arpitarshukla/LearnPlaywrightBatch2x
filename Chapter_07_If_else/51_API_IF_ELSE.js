let statusCode = 200;   //in api, there are HTTP status code like eg- 403 forbidden there are status code ranges from 100-599.

if (statusCode === 200) {
    console.log("API is working fine!");
} else if (statuscode === 404) {
    console.log("API not found!");
} else {
    console.log("Not status code match!");
}
