/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serviceSchema = new Schema({
    "title": String,
});

module.exports = mongoose.model("Service", serviceSchema, "service");
