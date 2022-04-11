importScripts('constant.js'); // 引用其他文件

function counter() {
  var time = new Date();
  let count = 0;
  for (let i = 0; i < 10e10; i++) {
    count = count + i;
  }
  return new Date() - time;
}

self.onmessage = (messageEvent) => {
  console.log(messageEvent);
  const { type, payload } = messageEvent.data;
  switch (type) {
    case 'start':
      // 通过一系列处理之后，把最终的结果发送给主线程
      const result = counter();
      this.postMessage(result);
      break;
  }
};

// 输出constant.js中的变量a和全局变量self
console.log(a, self,c);
