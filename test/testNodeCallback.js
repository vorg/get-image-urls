var getImageUrls = require('../index.js');

getImageUrls('http://marcinignac.com', function(err, images) {
  if (!err) {
    console.log('Images found', images.length);
    console.log(images);
  }
  else {
    console.log('ERROR', err);
  }
})