/**
 * Created by prettyRain on 2018/12/24.
 * 连接数据库
 */
//引入包
var mongoose = require('mongoose');
//创建数据库连接
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/haha');
db.on('error',console.error.bind(console,'error'));
db.once('open',function(callback){
    console.log("数据库连接成功");
});

module.exports = db;