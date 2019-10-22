const Service = require('../models/service');

module.exports = {
    async serviceList(ctx, next) {
        try {
            let res = await Service.find({});
            ctx.body = {
                code: 200,
                msg: "获取服务列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取服务列表失败"
            }
        }
    }
};
