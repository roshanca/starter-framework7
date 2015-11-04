'use strict';

const Router = require('./routes');
const device = Framework7.prototype.device;

window.$$ = Dom7;

// Change Through navbar layout to Fixed
if (!device.ios) {
  $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
  $$('.view .navbar').prependTo('.view .page');
}

window.app = new Framework7({
  material: device.ios ? false : true,
  modalTitle: 'System'
});

window.mainView = app.addView('.view-main', {
  dynamicNavbar: true,
  preloadPreviousPage: false
});

Router.init();

mainView.router.load({
  content: $$('template#intro').html()
});
