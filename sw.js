// ToolPilot Service Worker
const CACHE_NAME = 'tp-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './404.html',
  './style.css',
  './common.js',
  './blog/index.html',
  './categories/developer-tools.html',
  './categories/text-tools.html',
  './categories/design-tools.html',
];

// Install event: cache essential assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch((err) => {
        console.log('Cache addAll error:', err);
        // Some files might not exist yet, that's ok
        return Promise.resolve();
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event: cache first, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (new URL(event.request.url).origin !== location.origin) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }

      return fetch(event.request).then((response) => {
        // Only cache successful responses
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();

        // Cache HTML, CSS, JS, and tool pages
        const url = new URL(event.request.url).pathname;
        if (
          url.endsWith('.html') ||
          url.endsWith('.css') ||
          url.endsWith('.js') ||
          url === '/'
        ) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }

        return response;
      });
    }).catch(() => {
      // Offline fallback
      if (event.request.destination === 'document') {
        return caches.match('./404.html');
      }
    })
  );
});
