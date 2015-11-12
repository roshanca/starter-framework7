'use strict';

// ajax timeout set, in milliseconds
const TIMEOUT = 6000;

// how long before preloader appear, in milliseconds
const PRELOAD_TIMEOUT = 1000;

// error messages collection
const MSG = {
  TIMEOUT: 'OOPS! Request timeout.',
  NETWORK_ERROR: 'Network Error!',
  SERVER_ERROR: 'Server Error!'
};

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
        successHandler(data, success);
      },
      error: (xhr, status) => {
        errorHandler(xhr, status);
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
        successHandler(data, success);
      },
      error: (xhr, status) => {
        errorHandler(xhr, status);
      },
      complete: () => {
        clearTimeout(preloadTimer);
      }
    });
  }
}

function successHandler(data, callback) {
  data = JSON.parse(data);

  if (data.errCode === 0) {
    callback(data);
  } else {
    app.alert(data.errMsg);
  }
}

function errorHandler(xhr, status) {
  app.hidePreloader();

  if (status === 0) {
    app.alert(MSG.NETWORK_ERROR);
    clearTimeout(preloadTimer);
  }
  else if (status === 'timeout') {
    app.alert(MSG.TIMEOUT);
  }
  else {
    app.alert(MSG.SERVER_ERROR);
  }
}

// instance of Http Class
const http = new Http;

module.exports = http;
