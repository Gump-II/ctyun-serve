const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser');
const logger = require('koa-logger');

const index = require('./routes/index');
//const users = require('./routes/users');
const api = require('./routes/config');

//连接数据库
const mongoose = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/ctyun';

mongoose.connect(DB_URL,{useNewUrlParser:true});

//连接成功
mongoose.connection.on('connected', function () {
    console.log("Mongoose connection open to " + DB_URL);
});
//连接异常
mongoose.connection.on('error', function (error) {
    console.log("Mongoose connection error:" + error);
});
//异常断开
mongoose.connection.on('disconnected', function () {
    console.log("Mongoose connection disconnected");
});


// error handler
onerror(app);

// middlewares
app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
}));
app.use(json());
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
    extension: 'pug'
}));

// logger
app.use(async(ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(index.routes(), index.allowedMethods());
//app.use(users.routes(), users.allowedMethods());
app.use(api.routes(), api.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

module.exports = app;
