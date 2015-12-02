const components = new Map();

components.set('intro', require('./components/intro/intro'));
components.set('login', require('./components/login/login'));
components.set('profile', require('./components/profile/profile'));

module.exports = components;
