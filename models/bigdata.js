
/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 14:45
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bigdataSchema = new Schema({
    "title": String,
    "desc": String,
    "href": String,
});

module.exports = mongoose.model("Bigdata", bigdataSchema, "bigdata");
