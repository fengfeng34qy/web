var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoStore = require('connect-mongo')(session);
var config = require('./config.json');


var port = config.port;

var dbUrl = 'mongodb://localhost:19999/test1';
// 连接数据库
mongoose.connect(dbUrl);
var index = require('./routes/index');
// var users = require('./routes/users');

var app = express();

// 允许跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    if(req.method==="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});

// 日期格式化
app.locals.moment = require("moment");

// 设置模板
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(path.join(__dirname, 'public'));
app.use(logger('dev'));

// 解决express服务器报 413 payload too large(负荷过大)问题
app.use(bodyParser.json( {limit: '50mb'}) );
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true } ));

// 设置express静态资源目录
app.use(express.static(path.join(__dirname, 'public')));

// 保持用户登录状态  需要用到 cookie-parser express-session connect-mongo中间件
app.use(cookieParser());
app.use(session({
    secret: 'imooc',
    resave: false,
    cookie:{
        maxAge: 1000*60*30 // 默认设置 session  30分钟后过期
    },
    saveUninitialized: true,
    store: new mongoStore({
    url: dbUrl,
    collection: 'session'
  })
}));

// 刷新session过期时间 (需放在session({})方法后面)
app.use(function(req, res, next){
    if(req.session){
        req.session._garbage = Date();
        req.session.touch();
    }
    next();
});

// var sha1 = require('sha1');

app.use(function(req, res, next){
  var _user = req.session.user;
  app.locals.user = _user;
  next()
});



app.use('/', index);


// log4js
// const log4js = require('log4js');
// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });

// const logger = log4js.getLogger('cheese');
// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');



/*// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });*/

// error handler
/*app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});*/
// 颜色
var colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});
console.log('hello'.warn);

//微信签名认证
// var wxconfig = require('./config.json');
var utils = require('./common/utils');
// app.use(utils.sign(config));

app.listen(port);
console.log('服务器启动成功 端口: ' + port);




