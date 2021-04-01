var images = document.getElementsByTagName('img');
var counter = 0;


for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = 'http://placekitten.com/' + images[i].width + '/' + images[i].height;
	counter += 1;
}

chrome.runtime.sendMessage({counter: counter});
