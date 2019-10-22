const Bigdata = require('../models/bigdata');

module.exports = {
    async bigdataList(ctx, next) {
        try {
            let res = await Bigdata.find({});
            ctx.body = {
                code: 200,
                msg: "获取大数据列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取大数据列表失败"
            }
        }
    }
};
