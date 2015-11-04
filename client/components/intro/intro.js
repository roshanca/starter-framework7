'use strict';

const Vue = require('vue');

module.exports = {
  init: () => {
    new Vue({
      el: '#link',
      methods: {
        redirect: (e) => {
          mainView.router.load({
            content: $$('template#login').html()
          })
        }
      }
    })
  }
};
