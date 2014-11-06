#get-image-urls

Scrape image urls from a HTML website.

It's using [PhantomJS](http://phantomjs.org) in the background to get all images including CSS backgrounds.

## Installation

```
npm install get-image-urls
```

## Usage

Import

```javascript
var getImageUrls = require('get-image-urls');
```

API

```javascript
getImageUrls(url, [callback]) //returns Promise
```

Result

```javascript
[
	{ contentType: 'image/png', url: 'http://example.com/bg.png' },
	{ contentType: 'image/jpeg', url: 'http://example.com/picture.jpg' }
]
```

## Example

With NodeJS callback

```javascript
var getImageUrls = require('get-image-urls');

getImageUrls('http://google.com', function(err, images) {
  if (!err) {
    console.log('Images found', images.length);
    console.log(images);
  }
  else {
    console.log('ERROR', err);
  }
})
```

With returned Promise

```javascript
var getImageUrls = require('get-image-urls');

getImageUrls('http://google.com')
.then(function(images) {
  console.log('Images found', images.length);
  console.log(images);
})
.catch(function(e) {
  console.log('ERROR', e);
})
```