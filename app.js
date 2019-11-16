// 服务器报错模块
var createError = require('http-errors');
// 引入express模块
var express = require('express');
var path = require('path');
// 引入cookie解析模块
var cookieParser = require('cookie-parser');
// 引入日志模块
var logger = require('morgan');

// 路由文件
var usersRouter = require('./route/users');
// express实例
var app = express();

// 指定模板文件的路径
app.set('views', path.join(__dirname, 'views'));
// 当前模板使用的是ejs模板
app.set('view engine', 'ejs');
// 使用中间件
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// 用户访问路径的路由路径
app.use('/users.js', usersRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


//当服务器报500的时候走的中间件
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
