/**
 * Module dependencies.
 */
const path = require('path');
const express = require('express');
const ua = require('express-ua');
const stylus = require('stylus');
const autoprefixer = require('autoprefixer-stylus');

const server = express();
const port = process.env.PORT || 5000;
server.set('port', port);
server.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`);
});

// view engine setup
server.set('views', path.join(__dirname, 'client'));
server.set('view engine', 'jade');

// express middleware
server.use(stylus.middleware({
  src: __dirname + '/client',
  dest: __dirname + '/public/css',
  compile: (str, path) => {
    return stylus(str)
      .use(autoprefixer())    // autoprefixer
      .set('filename', path)  // @import
      .set('compress', true)  // compress
  }
}));
server.use(express.static(path.join(__dirname, 'public')));
server.use(ua);

server.get('/', (req, res) => {
  res.render('index', {
    title: 'My APP',
    desc: 'My APP build with framework7.',
    ios: req.ua.os === 'iOS'
  });
});

// 404 处理
server.all('*', (req, res) => {
  res.render('404', {
    status: 404
  })
});

// 所有错误的集中处理，在任何 route 中调用 next(err) 即可进入此逻辑
server.use((req, res) => {
  console.trace(err);
  res.render('error', {
    error: err
  });
});
