/*
 * @Author: lijian
 * @since: 2021-07-21 18:32:06
 * @lastTime: 2021-10-25 11:09:54
 * @LastAuthor: lijian
 * @message:
 */
function sum(arg) {
  let args = Array.prototype.slice.call(arg)
  console.log(args)
}

console.log(sum([1, 5, 6, 9, 7]))
// 将使用多个参数的函数 转换成一系列使用一个参数的函数
// 减少代码冗余 增加可读性

var Per = new Object()
// 对象字面量 Object构造函数 工厂模式创建对象 构造函数创建对象 原型创建对象模式 组合使用构造函数模式和原型模式

// call apply 都可以改变this的指向 第一个参数都是要改变的this 区别是传参不同 call 从第二个参数到后面第n个参数 都是传参 apply 第二个参数是数组

var c = 10
function b(a) {
  console.log('1', a)
  var a = c
  console.log(a)
  function a() {
    console.log('2', a)
  }
}
b(3)

function curry(fn, args) {
  var length = fn.length
  args = args || []
  return function () {
    var newArgs = args.concat(Array.prototype.slice.call(arguments))
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs)
    } else {
      return fn.apply(this, newArgs)
    }
  }
}

function sum() {
  var newArg = [].concat(Array.prototype.slice.call(arguments))
  console.log(newArg)
  let add = newArg.reduce((a, b) => {
    return a + b
  })
  return add
}
const fn = curry(sum)
console.log(fn(1)(2)(3))

const curry =
  (fn, arr = []) =>
  (...args) =>
    ((arg) => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
      ...arr,
      ...args
    ])
