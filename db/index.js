// /**
//  ** @Description：
//  ** @Author：yt.gan<ganyutao@chinatelecom.cn>
//  ** @Date: 2019/10/21 15:57
//  **/
// const mongoose = require('mongoose');
// const DB_URL = 'mongodb://localhost:27017/ctyun';
//
//
// mongoose.connect(DB_URL, {useNewUrlParser: true});
//
// //连接成功
// mongoose.connection.on('connected', function () {
//     console.log("Mongoose connection open to " + DB_URL);
// });
// //连接异常
// mongoose.connection.on('error', function (error) {
//     console.log("Mongoose connection error:" + error);
// });
// //异常断开
// mongoose.connection.on('disconnected', function () {
//     console.log("Mongoose connection disconnected");
// });
//
// module.exports = mongoose;
