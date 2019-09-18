' use strict';

let url: string = 'https//www.reddit.com/r/nevertellmethebots';

let locationOfString = url.search("bots");

//console.log(locationOfString);

let fixedUrl= url.replace("bots","odds");

console.log(fixedUrl);
