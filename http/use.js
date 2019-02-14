const express = require("express");
const http = require("http");

const app = express();

app.use(function(request, response, next) {
    if (request.url == "/") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Welcome to the homepage!\n");
    } else {
        next();
    }
});

app.use(function(request, response, next) {
    if (request.url == "/about") {
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.end("Welcome to the about!\n");
    } else {
        next();
    }
});

app.use(function(request, response) {
    response.writeHead(404, { "Content-Type": "text/plain" });
    response.end("404 error!\n");
});

http.createServer(app).listen(3000);
console.log("listening on 3000");
