/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = new Schema({
    "title": String,
    "name": String,
    "date": String,
    "href": String,
});

module.exports = mongoose.model("Message", messageSchema, "message");
