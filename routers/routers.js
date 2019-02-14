// http请求解析中间件
const bodyParser = require('body-parser');

module.exports = function (app) {

// 解析application/json格式
    app.use(bodyParser.json());
// 解析二进制格式
    app.use(bodyParser.raw());
// 解析文本格式
    app.use(bodyParser.text());
// 解析application/x-www-form-urlencoded文本格式
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get('/', function(req, res){
        // res.send("login success");
        res.render('login', {title: 'node express'});
    });

    app.post('/login', function (req, res) {
        console.log(req.body['username']);
        console.log(req.body['password'])
        res.send('login success');
    });
}