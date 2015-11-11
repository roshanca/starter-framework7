'use strict';

const Vue = require('vue');
const profileTemplate = require('./profile.tpl');

module.exports = {
  init: (query) => {
    const ProfileComponent = Vue.extend({
      template: profileTemplate,

      // initial data
      data: () => {
        return {
          user: {
            email: query.email
          }
        }
      },

      methods: {
        logout: function () {
          app.confirm('Are you sure?', () => {
            mainView.router.back({
              content: $$('template#login').html(),
              force: true
            });
          });
        }
      }
    });

    Vue.component('profile-component', ProfileComponent);

    new Vue({
      el: '#profileContent'
    });
  }
};
