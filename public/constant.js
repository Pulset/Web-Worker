// 可以在Worker中使用
const a = 111;

// 不可以在Worker中使用
const b = function () {
  console.log('test');
};

// 可以在Worker中使用
function c() {
  console.log('test');
}
