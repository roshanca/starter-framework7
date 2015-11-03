'use strict';

/**
 * Module dependencies.
 */
const path = require('path');
const express = require('express');
const ua = require('express-ua');
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');
const browserify = require('browserify-middleware');

/**
 * Express app instance.
 */
const app = express();

// get correct work environment: test, production or development
if ('test' === process.env.NODE_ENV) {
  app.set('env', 'test');
}
else if ('production' === process.env.NODE_ENV) {
  app.set('env', 'production');
}

let development = app.get('env') === 'development';

// view engine setup
app.set('views', path.join(__dirname, 'client'));
app.set('view engine', 'jade');

// express middleware
app.use(stylus.middleware({
  src: __dirname + '/client',
  dest: __dirname + '/public/css',
  compile: (str, path) => {
    return stylus(str)
      .use(autoprefixer())    // autoprefixer
      .set('filename', path)  // @import
      .set('compress', development ? false : true)  // compress
  }
}));
app.use('/js', browserify(path.join(__dirname, 'client'), {
  transform: [["babelify", { "presets": ["es2015"] }]]
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(ua);

app.get('/', (req, res) => {
  res.render('index', {
    title: 'My APP',
    desc: 'My APP build with framework7.',
    ios: req.ua.os === 'iOS'
  });
});

// 404 处理
app.all('*', (req, res) => {
  res.render('404', {
    status: 404
  })
});

// 所有错误的集中处理，在任何 route 中调用 next(err) 即可进入此逻辑
app.use((req, res) => {
  console.trace(err);
  res.render('error', {
    error: err
  });
});

module.exports = app;
