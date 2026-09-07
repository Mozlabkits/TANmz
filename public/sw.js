const CACHE_NAME = 'tanmz-cache-v2';
const BASE_PATH = '/TANmz/';

const ASSETS_TO_CACHE = [
  `${BASE_PATH}`,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}icon-192.png`,
  `${BASE_PATH}icon-512.png`,
  `${BASE_PATH}icon-maskable.png`
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.method !== 'GET' ||
    event.request.url.includes('/api/')
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {

        if (cachedResponse) {

          fetch(event.request)
            .then((networkResponse) => {

              if (
                networkResponse &&
                networkResponse.status === 200
              ) {
                caches.open(CACHE_NAME)
                  .then((cache) => {
                    cache.put(
                      event.request,
                      networkResponse.clone()
                    );
                  });
              }

            })
            .catch(() => {});

          return cachedResponse;
        }

        return fetch(event.request)
          .then((networkResponse) => {

            if (
              !networkResponse ||
              networkResponse.status !== 200 ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return networkResponse;
          })
          .catch(() => {

            if (event.request.mode === 'navigate') {
              return caches.match(
                `${BASE_PATH}index.html`
              );
            }

          });
      })
  );
});
