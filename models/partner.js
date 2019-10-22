/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
    "title": String,
    "partner":[
        {
            "name":String,
            "src":String,
            "desc":String
        }
    ],

});

module.exports = mongoose.model("Partner", partnerSchema, "partner");
