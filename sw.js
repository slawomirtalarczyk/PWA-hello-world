var CACHE_NAME = 'hello-world-page';
var urlsToCache  = [
  '/index.html',
  '/style.css',
  'lena.png'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
        })
    );
  });
  
  