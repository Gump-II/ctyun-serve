const Partner = require('../models/partner');

module.exports = {
    async partnerList(ctx, next) {
        try {
            let res = await Partner.find({});
            ctx.body = {
                code: 200,
                msg: "获取合作伙伴列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取合作伙伴列表失败"
            }
        }
    }
};
