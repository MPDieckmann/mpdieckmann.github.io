var SERVICE_WORKER_VERSION = 201704051749;
var CACHE_NAME = "MPDieckmann-Cache-v1";

self.addEventListener("install", function (event) {
  console.log("service-worker-version:", SERVICE_WORKER_VERSION);
});

self.addEventListener("activate", function (event) {
  console.log("service-worker-version:", SERVICE_WORKER_VERSION);
});

self.addEventListener("fetch", function (event) {
  event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    if (navigator.onLine) {
      fetch(event.request).then(function (response) {
        if (response.ok) {
          return cache.add(event.request.clone(), response.clone()).then(function () {
            return response;
          }, function () {
            return response;
          });
        }
        else {
          return event.delete(event.request.clone()).then(function () {
            return response;
          }, function () {
            return response;
          });
        }
      });
    }
    else {
      return cache.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        else {
          return new Response("<h1>Not Cached</h1><p>You are offline and haven't visited this site before to cache it. Please go online and <a href=\"javascript:window.location.reload();\">reload</a> this page.</p>");
        }
      }, function (error) {
         return new Response("<h1>An error occured</h1><details><summary><p>" + e.message + "</p></summary><pre>" + e.stack + "</pre></details>");
      });
    }
  }));
});
