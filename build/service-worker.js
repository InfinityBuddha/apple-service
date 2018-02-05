"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/apple-service/index.html","7d8de4536f2cb6c9d70298fe7ef32723"],["/apple-service/static/css/main.b501d789.css","81c2ca9aa6dc34ad84647bf7270be7ba"],["/apple-service/static/js/main.bcd6c950.js","594956afd0671f87e5d1a1fc9f9c5f30"],["/apple-service/static/media/displayiphone.e22f493c.png","e22f493ce88a29fc911b30c7a31be49a"],["/apple-service/static/media/imac.59647efb.jpg","59647efb6dcdb2f12c296479c35ec903"],["/apple-service/static/media/ipad.feee7d03.jpg","feee7d035d3c8be8573c9beacf8b5f83"],["/apple-service/static/media/iphone.dcf22cc1.jpg","dcf22cc1de22ca53490da030740a9723"],["/apple-service/static/media/iphoneicon.56333181.svg","563331818e9e78a585fcd5ba3b5c9243"],["/apple-service/static/media/macbook.ddf9c712.jpg","ddf9c712612cc3ef2fa15f1c941731c8"],["/apple-service/static/media/other.b1428c1c.jpg","b1428c1ce38f1c5ff11bd911049753c3"],["/apple-service/static/media/samsung.6c6f1b36.jpg","6c6f1b36141f4177bfe2e55756b6ef66"],["/apple-service/static/media/shield.f247bd78.svg","f247bd7847c7501d25df4f630a370287"],["/apple-service/static/media/turbina.75a3fd09.svg","75a3fd091697c3495f7aff09efeba9cc"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/apple-service/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});