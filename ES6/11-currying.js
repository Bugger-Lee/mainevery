function sum(arg) {
  let args = Array.prototype.slice.call(arg)
  console.log(args)
}

console.log(sum([1,5,6,9,7]))
// 将使用多个参数的函数 转换成一系列使用一个参数的函数
// 减少代码冗余 增加可读性

var Per = new Object()
// 对象字面量 Object构造函数 工厂模式创建对象 构造函数创建对象 原型创建对象模式 组合使用构造函数模式和原型模式

// call apply 都可以改变this的指向 第一个参数都是要改变的this 区别是传参不同 call 从第二个参数到后面第n个参数 都是传参 apply 第二个参数是数组