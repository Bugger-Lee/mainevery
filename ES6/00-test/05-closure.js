/**
 * 作用域基本介绍
 * ES5  全局作用域、函数作用域
 * ES6 块级作用域 let
 * 
 */

//  name 是一个局部的变量，它的作用域就是在 getName 这个函数里边，也称作函数作用域
var globalName = 'global';
function getName() { 
  console.log(globalName)
  var name = 'inner'
  console.log(name)
} 
getName();
console.log(name)
console.log(globalName) 

// 如果在 JavaScript 中所有没有经过定义，而直接被赋值的变量默认就是一个全局变量
function setName(){ 
  vName = 'setName'
}
setName();
console.log(vName)
console.log(window.vName)

// JS 编码过程中 if 语句及 for 语句后面 {...} 这里面所包括的，就是块级作用域
// console.log(a)
if(true){
  let a = '123'
  console.log(a)
}
// console.log(a)

/**
 * 闭包的概念
 * 闭包其实就是一个可以访问其他函数内部变量的函数
 * 一个定义在函数内部的函数 内嵌函数
 * 闭包产生的本质就是：当前环境中存在指向父级作用域的引用
 * 
 */
function fun1() {
	var a = 1;
	return function(){
		console.log(a);
	};
}
fun1();
var result = fun1();
result()

var a = 1;
function fun1() {
  var a = 2
  function fun2() {
    var a = 3;
    console.log(a);//3
  }
}

/**
 * 闭包的应用
 * 只要使用了回调函数 就是在使用闭包
 * 1.返回一个函数
 * 2.异步 使用回调
 * 3.作为函数参数传递
 * 4.立即执行函数 IIFE
 * 
 */
// 定时器
setTimeout(function handler(){
  console.log('1')
}, 1000)
// 事件监听
$('#app').click(function(){
  console.log('Event Listener')
});

// 参数传递
var a = 1;
function foo(){
  var a = 2;
  function baz(){
    console.log(a);
  }
  bar(baz);
}
function bar(fn){
  // 这就是闭包
  fn();
}
foo();  // 输出2，而不是1

// 自执行函数
var a = 2;
(function IIFE(){
  console.log(a);  // 输出2
})();

/**
 * 解决循环输出问题
 * 1. let
 * 2.立即执行函数 IIFE
 * 3.定时器 第三个参数
 */

for(var i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}

// let
for(let i = 1; i <= 5; i ++){
  setTimeout(function() {
    console.log(i)
  }, 0)
}

// IIFT
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(){
      console.log(j)
    }, 0)
  })(i)
}

// 第三个参数
for(var i = 1;i <= 5;i++){
  (function(j){
    setTimeout(function timer(j){
      console.log(j)
    }, 0, i)
  })
}