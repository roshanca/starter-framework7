'use strict';

const Vue = require('vue');
const http = require('../../http');
const loginTemplate = require('./login.tpl');
const emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = {
  init: () => {
    const LoginComponent = Vue.extend({
      template: loginTemplate,

      // initial data
      data: () => {
        return {
          user: {
            email: '',
            password: ''
          }
        }
      },

      // computed property for form validation state
      computed: {
        validation: function () {
          return {
            email: emailRE.test(this.user.email),
            password: !!this.user.password.trim() && this.user.password.length > 6
          }
        },
        isValid: function () {
          const validation = this.validation;
          return Object.keys(validation).every(function (key) {
            return validation[key]
          })
        }
      },

      methods: {
        login: function () {
          if (!this.isValid) {
            app.alert('Your email or password is incorrect.');
          } else {
            const postData = {
              account: this.user.email,
              password: this.user.password
            };

            http.post('/api/login', postData, (data) => {
              mainView.router.load({
                content: $$('template#profile').html(),
                query: {email: this.user.email}
              });
            });
          }
        }
      }
    });

    Vue.component('login-component', LoginComponent);

    new Vue({
      el: '#loginContent'
    });
  }
};
