// public/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('offline-cache').then((cache) => {
        return cache.addAll([
          '/',
          '/_next/static/',
          '/manifest.json',
          // Add more files to cache as needed
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  