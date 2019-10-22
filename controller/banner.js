/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/21 16:52
 **/
const Banner = require('../models/banner');

module.exports = {
    async bannerList(ctx, next) {
        try {
            let res = await Banner.find({});

            ctx.body = {
                code: 200,
                msg: "获取banner列表成功",
                list: res,
            }
        } catch {
            ctx.body = {
                code: 500,
                msg: "获取banner列表失败"
            }
        }
    }
};
