const Router = require('./routes');

const device = Framework7.prototype.device;

window.$$ = Dom7;

// Change Through navbar layout to Fixed
if (!device.ios) {
  $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
  $$('.view .navbar').prependTo('.view .page');
}

// initialize framework7 app
window.app = new Framework7({
  material: !device.ios,
  modalTitle: 'System'
});

// initialized main view of app
window.mainView = app.addView('.view-main', {
  dynamicNavbar: true,
  preloadPreviousPage: false
});

// initialized router
Router.init();

// the first page to load
mainView.router.reloadContent($$('template#intro').html());
