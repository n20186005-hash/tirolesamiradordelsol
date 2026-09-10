/* Tirolesa Mirador Del Sol - lightweight service worker.
   Strategy: keep HTML fresh (network-first is left to the browser default),
   and cache only same-origin image assets with stale-while-revalidate. */

const IMAGE_CACHE = "tmdl-images-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key !== IMAGE_CACHE).map((key) => caches.delete(key)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  let url;
  try {
    url = new URL(request.url);
  } catch (error) {
    return;
  }

  if (url.origin !== self.location.origin) return;

  const isImage =
    request.destination === "image" ||
    url.pathname.startsWith("/gallery/") ||
    url.pathname.startsWith("/images/") ||
    url.pathname.startsWith("/icons/");

  if (!isImage) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(IMAGE_CACHE);
      const cached = await cache.match(request);
      const network = fetch(request)
        .then((response) => {
          if (response && response.ok) {
            cache.put(request, response.clone());
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })(),
  );
});
