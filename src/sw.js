importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.1.1/workbox-sw.js')

if (workbox) {
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script',
    new workbox.NetworkFirst()
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'style',
    new workbox.CacheFirst()
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image',
    new workbox.CacheFirst()
  );

  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'document',
    new workbox.NetworkFirst()
  );

  workbox.routing.registerRoute(
    new RegExp('^https://newsapi.org/v2/'),
    new workbox.NetworkFirst({
      cacheName: 'news-cache',
      plugins: [
        new workbox.ExpirationPlugin({
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, 
        }),
      ],
    })
  )

  workbox.routing.setCatchHandler(({ event }) => {
    if (event.request.destination === 'document') {
      return caches.match('../public/offline.html')
    }
  })
}
