var express = require("express");
var http = require("http");
var app = express();

// set 设置变量值
app.set("views", __dirname + "/views");

app.set("view engine", "jade");

// 所有请求都经过all方法,*标示对所有路径有效
app.all("*", function(request, response, next) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    console.log('all begin ......')
    next();
});

app.get("/", function(request, response) {
    response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
    response.end("Welcome to the about page!");
});

// url中带参数
app.get("/hello/:who", function(req, res) {
    res.end("Hello, " + req.params.who + ".");
});

// url中参数可选
app.get('/hi/:who?',function(req,res) {
    if(req.params.who) {
        res.end("Hello, " + req.params.who + ".");
    } else {
        res.end("Hello, squirrel.");
    }
});

app.get("*", function(request, response) {
    response.end("404!");
});

http.createServer(app).listen(3000);
console.log("listening on 3000")