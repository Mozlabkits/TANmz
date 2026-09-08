const CACHE_NAME = 'tanmz-cache-v3';
const BASE_PATH = '/TANmz/';

const ASSETS_TO_CACHE = [
  `${BASE_PATH}`,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.webmanifest`,
  `${BASE_PATH}icon-192.png`,
  `${BASE_PATH}icon-512.png`,
  `${BASE_PATH}icon-maskable.png`
];

/* =========================================================
   INSTALAÇÃO
   ========================================================= */

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});


/* =========================================================
   ATIVAÇÃO
   Remove caches antigos
   ========================================================= */

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((name) => {
            if (name !== CACHE_NAME) {
              return caches.delete(name);
            }

            return Promise.resolve();
          })
        );
      })
      .then(() => self.clients.claim())
  );
});


/* =========================================================
   FETCH
   ========================================================= */

self.addEventListener('fetch', (event) => {

  // Não interferir em POST, PUT, DELETE etc.
  if (event.request.method !== 'GET') {
    return;
  }

  // Nunca colocar as APIs no cache
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {

        /*
         * Se existe uma versão em cache,
         * entrega imediatamente.
         */
        if (cachedResponse) {

          /*
           * Atualização em segundo plano.
           */
          fetch(event.request)
            .then((networkResponse) => {

              if (
                networkResponse &&
                networkResponse.ok
              ) {
                return caches.open(CACHE_NAME)
                  .then((cache) => {
                    return cache.put(
                      event.request,
                      networkResponse.clone()
                    );
                  });
              }

              return undefined;
            })
            .catch(() => {
              // Sem internet: manter o cache existente.
            });

          return cachedResponse;
        }


        /*
         * Não existe cache:
         * tentar buscar na rede.
         */
        return fetch(event.request)
          .then((networkResponse) => {

            if (!networkResponse) {
              throw new Error('Resposta de rede inválida.');
            }

            /*
             * Respostas que não são adequadas para cache
             * continuam sendo devolvidas normalmente.
             */
            if (
              !networkResponse.ok ||
              networkResponse.type !== 'basic'
            ) {
              return networkResponse;
            }

            /*
             * Guardar uma cópia no cache.
             */
            const responseToCache = networkResponse.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                return cache.put(
                  event.request,
                  responseToCache
                );
              })
              .catch(() => {
                // Se o cache falhar, não impedir a resposta.
              });

            return networkResponse;
          })

          /*
           * Se a rede falhar:
           * para navegação, carregar o index.html do cache.
           */
          .catch(() => {

            if (event.request.mode === 'navigate') {
              return caches.match(
                `${BASE_PATH}index.html`
              ).then((fallbackResponse) => {

                if (fallbackResponse) {
                  return fallbackResponse;
                }

                /*
                 * Importante:
                 * nunca deixar respondWith() receber undefined.
                 */
                return new Response(
                  'TANmz temporariamente indisponível.',
                  {
                    status: 503,
                    statusText: 'Service Unavailable',
                    headers: {
                      'Content-Type': 'text/plain; charset=utf-8'
                    }
                  }
                );
              });
            }

            /*
             * Para outros pedidos que falharem,
             * devolver uma Response válida.
             */
            return new Response('', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
  );
});
