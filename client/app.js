'use strict';

const device = Framework7.prototype.device;

window.app = new Framework7();
window.mainView = app.addView('.view-main', {
  dynamicNavbar: true,
  preloadPreviousPage: false
});
