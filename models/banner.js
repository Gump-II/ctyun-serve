/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/21 16:24
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bannerSchema = new Schema({
    "domain": String,
    "domainName": String,
    " href": String,
    "imgPath": String,
    "id": String,
    "name": String,
    "note": String,
    "resourceId": String,
    "state": String,
    "subtitle": String,
    "title": String,
    "type": String,
});

module.exports = mongoose.model("Banner", bannerSchema, "banner");
