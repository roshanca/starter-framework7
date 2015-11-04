'use strict';

function format(time) {
  return time.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function log(msg) {
  console.log(`%c[${format(new Date())} : ${msg}]`, 'color: green');
}

module.exports = {
  format: format,
  log: log
};
