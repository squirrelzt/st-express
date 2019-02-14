const express = require('express');
const path = require('path');

const app = module.exports = express();
// 导入路由
const routers = require('./routers/routers')(app);

// 设置ejs模板引擎
app.set('view engine', 'ejs');
// __dirname当前路径
app.set('views', path.join(__dirname, 'views'));

// 使用public文件夹
app.use(express.static(__dirname + '/public'));

if (!module.parent) {
    app.listen(3000);
    console.log("listening on 3000")
}
