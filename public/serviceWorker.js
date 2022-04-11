// importScripts('constant.js'); // 引用其他文件
const CACHE_NAME = 'cache-v1';
const urlsToCache = [
  '/constant.js',
  '/serviceWorker.html',
  '/serviceWorker.js',
  '/image/131.png',
];
self.oninstall = (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME) // 这是promise
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache); // 这是promise
      })
  );
};
self.onfetch = (event) => {
  event.respondWith(
    caches
      .match(event.request) // 此方法从服务工作线程所创建的任何缓存中查找缓存的结果
      .then(function (response) {
        // response为匹配到的缓存资源，如果没有匹配到则返回undefined，需要fetch资源
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
};

// 更新serviceWorker
// self.activate = (event) => {
//   var cacheAllowlist = ['cache-v1'];
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (!cacheAllowlist.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// };
