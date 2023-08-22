/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Browser tidak mendukung Service Worker');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.js');
    console.log('Service worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error);
  }
};

navigator.serviceWorker.ready.then((registration) => {
  registration.active.postMessage('Hi service worker');
});

navigator.serviceWorker.register('/sw.js');
navigator.serviceWorker.ready.then((swRegistration) => swRegistration.sync.register('foo'));
