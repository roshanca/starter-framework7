/**
 * Module dependencies.
 */
const path = require('path');
const ncp  = require('ncp').ncp;
const del  = require('del');

const sourcePath      = 'node_modules/framework7/dist/';
const destinationPath = 'public/framework7/'

function cp(folder) {
  ncp(sourcePath + folder, destinationPath + folder, (err) => {
    if (err) {
      return console.error(err);
    }
    console.log(folder + ' copied!');
  });
}

del([
  destinationPath + 'css/**',
  destinationPath + 'js/**',
  destinationPath + '/img/**'
]).then(paths => {
  console.log('Deleted files and folders:\n', paths.join('\n'));
  cp('css');
  cp('js');
  cp('img');
});
