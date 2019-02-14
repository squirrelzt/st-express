var express = require("express");
var http = require("http");
var app = express();
var path = require('path');

// 设置ejs模板引擎
app.set('view engine', 'ejs');
// __dirname当前路径
app.set('views', path.join(__dirname, 'views'));

app.get("/", function(request, response) {
    response.redirect("/hello");
});

app.get('/hello', function (request, response) {
   response.end('hello express response');
});

// 重定向
app.get('/baidu', function (request, response) {
    response.redirect("http://www.baidu.com");
});

app.get('/qq', function (request, response) {
    response.redirect(301, "http://www.qq.com");
});

// 发送文件
app.get('/sendimg', function (request, response) {
    // response.header('Content-Type', 'image/jpeg');
    // 不能使用/../public/images/alipay.jpg
    response.sendFile(path.resolve(__dirname + '/../public/images/alipay.jpg'));
});

// 渲染页面
app.get("/render", function(request, response) {
    response.render(path.resolve(__dirname + '/../views/login'), {title: 'node express'});
});

http.createServer(app).listen(3000);
console.log("listening on 3000")