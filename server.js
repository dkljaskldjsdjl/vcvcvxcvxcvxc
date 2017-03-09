var express = require ('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser')
var newRouter = require('../routers/newRouter');
var newRouter = require('../routers/newRouter');

var app = express();

app.use(morgan());
app.use(cookieParser())
app.use('/', newRouter);
app.use('/', newRouter);

app.listen(4555, function () {
  console.log('vxcvxcvxcvxcv listening on port 4555');
};
