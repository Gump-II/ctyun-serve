const Message = require('../models/message');

module.exports = {
    async messageList(ctx, next) {
        try {
            let res = await Message.find({});
            ctx.body = {
                code: 200,
                msg: "获取信息列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取信息列表失败"
            }
        }
    }
};
