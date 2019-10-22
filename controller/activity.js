/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/21 16:52
 **/
const Activity = require('../models/activity');

module.exports = {
    async activityList(ctx, next) {
        try {
            let res = await Activity.find({});

            ctx.body = {
                code: 200,
                msg: "获取活动列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取活动列表失败"
            }
        }
    }
};
