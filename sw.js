const CACHE_NAME = 'capacity-hub-v1';
const OFFLINE_URL = 'index.html';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(OFFLINE_URL);
    })
  );
});
