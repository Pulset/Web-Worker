// importScripts('constant.js'); // 引用其他文件
let val = 666;

self.onconnect = function (e) {
  const port = e.ports[0];
  console.log('shared-worker connect');

  port.postMessage(val);

  port.onmessage = (messageEvent) => {
    const { type, payload } = messageEvent.data;

    switch (type) {
      case 'increase':
        port.postMessage(++val);
        break;
      case 'decrease':
        port.postMessage(--val);
        break;
    }
  };
};

console.log('shared-worker', self);
