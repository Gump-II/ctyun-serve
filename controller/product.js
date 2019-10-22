const Product = require('../models/product');

module.exports = {
    async productList(ctx, next) {
        try {
            let res = await Product.find({});
            ctx.body = {
                code: 200,
                msg: "获取产品列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取产品列表失败"
            }
        }
    }
};
