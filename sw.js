// Uygulama kurulum motoru
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Kral uygulama kuruldu!');
});

self.addEventListener('fetch', (e) => {
  // İnternet varken normal çalışmasını sağlar.
});