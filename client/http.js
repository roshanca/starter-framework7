'use strict';

// ajax timeout set, in milliseconds
const TIMEOUT = 6000;

// how long before preloader appear, in milliseconds
const PRELOAD_TIMEOUT = 1000;

// error messages collection
const MSG = {
  TIMEOUT: 'OOPS! Request timeout.',
  SERVER_ERROR: 'Server Error'
};

// instance of Http Class
let http;

// preload task
let preloadTimer;
let preloadTask = () => {
  app.showPreloader('loading...');
};

class Http {
  get(url, success) {
    $$.ajax({
      url: url,
      method: 'GET',
      beforeSend: () => {
        preloadTimer = setTimeout(preloadTask, PRELOAD_TIMEOUT);
      },
      success: (data) => {
        data = JSON.parse(data);

        if (data.errCode === 0) {
          success(data);
        } else {
          app.alert(data.errMsg);
        }
      },
      error: () => {
        app.hidePreloader();
        app.alert(MSG.TIMEOUT);
      },
      complete: () => {
        clearTimeout(preloadTimer);
      }
    });
  }

  post(url, postData, success) {
    $$.ajax({
      url: url,
      method: 'POST',
      data: postData,
      timeout: TIMEOUT,
      beforeSend: () => {
        preloadTimer = setTimeout(preloadTask, PRELOAD_TIMEOUT);
      },
      success: (data) => {
        data = JSON.parse(data);

        if (data.errCode === 0) {
          success(data);
        } else {
          app.alert(data.errMsg);
        }
      },
      error: () => {
        app.hidePreloader();
        app.alert(MSG.TIMEOUT);
      },
      complete: () => {
        clearTimeout(preloadTimer);
      }
    });
  }
}

http = new Http;

module.exports = http;
