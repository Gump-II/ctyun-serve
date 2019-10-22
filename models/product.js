/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 15:31
 **/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    "name": String,
    "products": [{
        "title": String,
        "desc": String,
        "link": String,
        "ktlink": String,
        "promotion": String,
        "new":String,
        }
    ],
});

module.exports = mongoose.model("Product", productSchema, "product");
