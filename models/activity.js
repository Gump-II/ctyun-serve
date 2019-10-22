/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/21 16:24
 **/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitySchema = new Schema({
    "icon": String,
    "state": String,
    "domainName": String,
    "properties": String,
    "type": String,
    "id": String,
    "resourceId":String,
    "iconPath": String,
    "title": String,
    "name": String,
    "domain": String,
    "displayOrder": String,
    "href": String,
    "note": String
});

module.exports = mongoose.model("Activity", activitySchema, "activity");
