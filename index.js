var express = require('express');
var path = require('path');

var app = module.exports = express();
const bodyParser = require('body-parser');

// 设置ejs模板引擎
app.set('view engine', 'ejs');
// __dirname当前路径
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('/public'));
app.use(bodyParser.json());
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

if (!module.parent) {
    app.listen(3000);
    console.log("listening on 3000")
}
