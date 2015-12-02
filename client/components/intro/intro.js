const Vue = require('vue');

module.exports = {
  init: () => {

    // Init slider and store its instance in mySwiper variable
    var mySwiper = app.swiper('.swiper-container', {
      pagination: '.swiper-pagination'
    });

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
