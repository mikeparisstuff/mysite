var querystring = require("querystring"),
    fs = require("fs");

function home(response, request) {
    console.log("Request handler 'home' was called.");

    fs.readFile("../index.html", function read(err, data) {
        if (err) {
            throw err;
        }
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(data);
        response.end();
    });
}

exports.home = home;