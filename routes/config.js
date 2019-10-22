/**
 ** @Description：
 ** @Author：yt.gan<ganyutao@chinatelecom.cn>
 ** @Date: 2019/10/22 8:54
 **/
const router = require('koa-router')();
const controller = require('../controller');

router.prefix('/api');

//banner接口
router.get('/banner', controller.banner.bannerList);
//活动列表
router.get('/activity', controller.activity.activityList);
//大数据列表
router.get('/bigdata', controller.bigdata.bigdataList);
//消息接口
router.get('/message', controller.message.messageList);
//新闻列表
router.get('/news', controller.news.newsList);
//合作伙伴列表
router.get('/partner', controller.partner.partnerList);
//产品列表
router.get('/product',controller.product.productList);
//服务列表
router.get('/service',controller.service.serviceList);
//解决方案
router.get('/solution',controller.solution.solutionList);

module.exports = router;
