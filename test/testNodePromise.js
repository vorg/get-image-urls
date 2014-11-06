var getImageUrls = require('../index.js');

getImageUrls('http://marcinignac.com')
.then(function(images) {
  console.log('Images found', images.length);
  console.log(images);
})
.catch(function(e) {
  console.log(e);
})