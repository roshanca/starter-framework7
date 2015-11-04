'use strict';

const components = new Map();

components.set('intro', require('./components/intro/intro'));
components.set('login', require('./components/login/login'));

module.exports = components;
