/**
 * new 的原理介绍
 * new 关键词执行之后总是会返回一个对象，要么是实例对象，要么是 return 语句指定的对象。
 * 什么时候使用new
 * 
 */

/**
 * new的过程干了什么
 * 创建一个新对象
 * 将构造函数的作用域赋给新对象（this 指向新对象）
 * 执行构造函数中的代码（为这个新对象添加属性）
 * 返回新对象
 */

function Person(){
  this.name = 'Jack'
}
var p = new Person();
console.log(p.name)

// 不使用new的时候
function Person(){
  this.name = 'Jack';
}
var p = Person();
console.log(p)
console.log(name)
console.log(p.name)
// 有return的时候
function Person(){
  this.name = 'Jack'; 
  return {age: 18}
}
var p = new Person(); 
console.log(p)
console.log(p.name)
console.log(p.age)
// return 不是对象
function Person(){
  this.name = 'Jack'
  return 'age'
}
var p = new Person(); 
console.log(p)
console.log(p.name)
console.log(p.age)

/**
 * apply & call & bind 原理介绍
 * call、apply 和 bind 是挂在 Function 对象上的三个方法，调用这三个方法的必须是一个函数
 * func.call(thisArg, param1, param2, ...)
 * func.apply(thisArg, [param1,param2,...])
 * func.bind(thisArg, param1, param2, ...)
 * 
 * 相同点：都可以改变this所指的对象
 * 不同点： call、apply传参方式不同
 * call、apply都是立即执行
 * bind需要调用后执行
 */
let a = {
  name: 'jack',
  getName: function(msg) {
    return msg + this.name;
  } 
}
let b = {
  name: 'lily'
}
console.log(a.getName('hello~'))
console.log(a.getName.call(b, 'hi~'))
console.log(a.getName.apply(b, ['hi~']))
console.log(a.getName.bind(b, 'hello~')())

/**
 * 应用场景
 * 1.判断数据类型
 * 2.类数组借用方法
 * 3.获取数组的最大 / 最小值
 */
function getType(obj){
  let type  = typeof obj
  if (type !== "object") {
    return type
  }
  return Object.prototype.toString.call(obj).replace(/^$/, '$1')
}

var arrayLike = { 
  0: 'java',
  1: 'script',
  length: 2
} 
Array.prototype.push.call(arrayLike, 'jack', 'lily')
console.log(typeof arrayLike)
console.log(arrayLike)

let arr = [13, 6, 10, 11, 16]
const max = Math.max.apply(Math, arr)
const min = Math.min.apply(Math, arr)
console.log(max)
console.log(min)
/**
 * 自己实现new
 * 
 */
function _new(ctor, ...args) {
  if(typeof ctor !== 'function') {
    throw 'ctor must be a function';
  }
  let obj = new Object();
  obj.__proto__ = Object.create(ctor.prototype);
  let res = ctor.apply(obj,  [...args]);
  let isObject = typeof res === 'object' && typeof res !== null;
  let isFunction = typeof res === 'function';
  return isObject || isFunction ? res : obj;
};

function Per(name) {
  this.name = name
}
Per.prototype.getName = function () {
  return this.name
}
console.log(_new(Per, 'li'))

/**
 * call apply的实现
 * eval
 */
Function.prototype.call = function (context, ...args) {
  var context = context || window;
  context.fn = this;
  var result = eval('context.fn(...args)');
  delete context.fn
  return result;
}
Function.prototype.apply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval('context.fn(...args)');
  delete context.fn
  return result;
}

/**
 * bind实现
 *  
 * */ 

Function.prototype.bind = function (context, ...args) {
  if (typeof this !== "function") {
    throw new Error("this must be a function");
  }
  var self = this;
  var fbound = function () {
      self.apply(this instanceof self ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  }
  if(this.prototype) {
    fbound.prototype = Object.create(this.prototype);
  }
  return fbound;
}
