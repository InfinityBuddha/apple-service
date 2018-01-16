"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/apple-service/index.html","fb5cafdaa46955be553dac84f77855b2"],["/apple-service/static/css/main.83a7c2e2.css","426eba74c24cd08d15536e9ec6817e40"],["/apple-service/static/js/main.c79a8109.js","d129b825bba40fb424974cdb647ba076"],["/apple-service/static/media/displayiphone.e22f493c.png","e22f493ce88a29fc911b30c7a31be49a"],["/apple-service/static/media/imac.59647efb.jpg","59647efb6dcdb2f12c296479c35ec903"],["/apple-service/static/media/ipad.a87a5c52.jpg","a87a5c52b6b402a77e443d5969b7518d"],["/apple-service/static/media/iphone.dcf22cc1.jpg","dcf22cc1de22ca53490da030740a9723"],["/apple-service/static/media/iphoneicon.4d4caee6.svg","4d4caee6e915c994252835678c3869fe"],["/apple-service/static/media/macbook.ddf9c712.jpg","ddf9c712612cc3ef2fa15f1c941731c8"],["/apple-service/static/media/other.b1428c1c.jpg","b1428c1ce38f1c5ff11bd911049753c3"],["/apple-service/static/media/samsung.6c6f1b36.jpg","6c6f1b36141f4177bfe2e55756b6ef66"],["/apple-service/static/media/shield.c6aade0d.svg","c6aade0d8e7a76558db1020d0a478e52"],["/apple-service/static/media/turbina.20654875.svg","20654875d8b3b250124b3efc1f9e91cb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/apple-service/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});