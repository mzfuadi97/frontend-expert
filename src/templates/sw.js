/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-undef */
newFunction();
function newFunction() {
  const version = '1.0.0';
  const CACHE_NAME = `mypwa-${version}`;
  const assetsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/main.js',
    // .......
  ];

  self.addEventListener('install', (event) => {
    console.log('Installing service worker....');

    // menyimpan appshell ke caches API
    event.waitUntil(caches.open(CACHE_NAME).then(() => caches.addAll(assetsToCache)));
  });

  self.addEventListener('activate', (event) => {
    console.log('Activating service worker...');

    // menghapus caches lama
    event.waitUntil(caches.keys().then(() => Promise.all(cachesNames.filter((name) => name !== CACHE_NAME).map((filteredName) => caches.delete(filteredName)))));
  });

  self.addEventListener('fetch', (event) => {
    // service worker bisa menampilkan, bahkan memanipulasi request yang dilakukan client
    console.log(event.request);

    // sebelum akhirnya mengirim request ke server.
    event.respondWith(fetch(event.request));
  });

  self.addEventListener('message', (event) => {
    // menampilkan data/pesan yang dikirim client
    console.log(`Client mengirim pesan: ${event.data}`);
  });

  self.addEventListener('sync', (event) => {
    if (event.tag === 'foo') {
      event.waitUntil(doSomething());
    }
  });
}
