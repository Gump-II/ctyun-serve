const News = require('../models/news');

module.exports = {
    async newsList(ctx, next) {
        try {
            let res = await News.find({});
            ctx.body = {
                code: 200,
                msg: "获取新闻列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取新闻列表失败"
            }
        }
    }
};
