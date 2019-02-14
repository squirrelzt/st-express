// Express框架底层使用的是http模块，http模块生成服务器
const http = require('http');

const app = http.createServer(function (request, response) {
   response.writeHead(200, {'Content-type': 'text/plain'});
   response.end('hello world http');
});

if (!module.parent) {
    app.listen(3000);
    console.log("listening on 3000");
}