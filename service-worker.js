const CACHE_NAME = 'rajesh-portfolio-v1';
const APP_SHELL = [
  '/',
  '/index.html',
  '/pages/home.html',
  '/pages/about.html',
  '/pages/projects.html',
  '/pages/skills.html',
  '/pages/experience.html',
  '/pages/certifications.html',
  '/pages/resume.html',
  '/pages/contact.html',
  '/assets/css/pages/home.css',
  '/assets/css/pages/about.css',
  '/assets/css/pages/projects.css',
  '/assets/css/pages/skills.css',
  '/assets/css/pages/experience.css',
  '/assets/css/pages/certifications.css',
  '/assets/css/pages/resume.css',
  '/assets/css/pages/contact.css',
  '/assets/js/pages/home.js',
  '/assets/js/pages/about.js',
  '/assets/js/pages/projects.js',
  '/assets/js/pages/skills.js',
  '/assets/js/pages/experience.js',
  '/assets/js/pages/certifications.js',
  '/assets/js/pages/resume.js',
  '/assets/js/pages/contact.js',
  '/assets/js/pwa.js',
  '/assets/images/profile/rajesh-home-moon-portrait.png',
  '/manifest.webmanifest',
  '/assets/images/icons/favicon.svg',
  '/assets/images/icons/icon-192.png',
  '/assets/images/icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) =>
        Promise.all(
          cacheNames
            .filter((cacheName) => cacheName.startsWith('rajesh-portfolio-') && cacheName !== CACHE_NAME)
            .map((cacheName) => caches.delete(cacheName))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const requestUrl = new URL(request.url);

  if (request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(async (response) => {
          if (response.ok) {
            await caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
          }
          return response;
        })
        .catch(async () => {
          const cachedPage = await caches.match(request);
          return cachedPage || caches.match('/pages/home.html');
        })
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }

      return fetch(request).then(async (response) => {
        if (response.ok) {
          await caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()));
        }
        return response;
      });
    })
  );
});
