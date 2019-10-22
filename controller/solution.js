const Solution = require('../models/solution');

module.exports = {
    async solutionList(ctx, next) {
        try {
            let res = await Solution.find({});
            ctx.body = {
                code: 200,
                msg: "获取解决方案列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取解决方案列表失败"
            }
        }
    }
};
