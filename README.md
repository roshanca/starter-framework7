starter-framework7
===

A starter project structure for framework7 app, using Node and Express for server rendering, the MVVM lib -- Vue.js is optional, but for recommended, because it could help us to improve building modern web interfaces simply and efficiently.

It is not only a template boilerplate, but a toolkit for development, which is made by a series of custom tasks written in js, and some useful middlewares for express, for the purpose of getting rid of the traditional gulp.

For example:

+ using jade client template engine.
+ using stylus and autoprefixer middleware to compile css.
+ using browserify and babelify middleware to transform ES6/ES7 to ES5 code.

Feature
----

+ Contain both iOS and Material Themes in single app.
+ All pages stored locally, so don't need additional xhr to load page.
+ Encapsulate `get` and `post` methods for fetching server data with comprehensive response handler (timeout, error etc).
+ Reusable componenets powered by Vue, simple and neat code which focus on the business logic.
+ Isomorphic js according to Babel (it seems not very useful so far).

Running
----

### Install dependencies
    npm install -g nodemon
    npm install

### Build

If your app is ready, and you want to check the results, you can execute:

    npm start
    
then, visit `http://localhost:5000` in any browser (especially mobile browser or the device mode in developer tools of Chrome).

License
----

Copyright (c) 2015 Roshan Wu. See [LICENSE](https://github.com/roshanca/starter-framework7/blob/master/LICENSE) for details.
