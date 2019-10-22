/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    "title": String,
    "date":String,
    "desc": String,
    "src": String,
});

module.exports = mongoose.model("News", newsSchema, "news");
