/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var solutionSchema = new Schema({
    "name": String,
    "desc": String,
    "scene": String,
    "companyLogos": [{
        "src": String,
        "title": String,
        "tag": String,
        "id": String,
    },
        {"src": String, "title": String},

    ],
    "link": String,
});

module.exports = mongoose.model("Solution", solutionSchema, "solution");
