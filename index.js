var path = require('path');
var spawn = require('child_process').spawn;
var phantomjs = require('phantomjs-prebuilt');
var Promise = require('bluebird');

function getImageUrls(url, callback) {
  var phantomArgs = [
    path.join(__dirname, 'lib', 'phantom_script.js'),
    url
  ];

  return new Promise(function(resolve, reject) {
    var phantom = spawn(phantomjs.path, phantomArgs);
    var images = null;
    var error = null;

    phantom.stdout.on('data', function(data) {
      data = "" + data;
      if (data.indexOf('Error') == 0) {
        error = data;
      }
      else {
        try {
          images = JSON.parse(data);
        }
        catch(e) {
          console.log('Error', data)
          error = e;
          images = null;
        }
      }
    });

    phantom.stderr.on('data', function(data) {
      error = data;
    });

    phantom.on('close', function(code) {
      if (!images && !error) {
        error = new Error('no images found');
      }

      if (error) {
        reject(error);
        if (callback) callback(error, null);
      }
      else {
        resolve(images)
        if (callback) callback(null, images);
      }
    });
  })
}

module.exports = getImageUrls;
