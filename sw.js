const CACHE = 'dragonbook-v1';
const SHELL = [
  './dragebog.html',
  './manifest.json',
  './icon.svg',
];

// Install: cache the app shell immediately
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Activate: delete old caches from previous versions
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Fetch: cache-first for app shell; network-first with cache fallback for fonts
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Google Fonts: try network (to stay fresh), cache on success, fall back to cache
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        fetch(e.request)
          .then(res => { cache.put(e.request, res.clone()); return res; })
          .catch(() => cache.match(e.request))
      )
    );
    return;
  }

  // Everything else: cache first, then network
  e.respondWith(
    caches.match(e.request)
      .then(cached => cached || fetch(e.request))
      .catch(() => caches.match('./dragebog.html'))
  );
});
