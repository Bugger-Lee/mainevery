/**
 * 类数组
 * 
 */

// arguments
function foo(name, age, sex) {
  console.log(arguments)
  console.log(typeof arguments)
  console.log(Object.prototype.toString.call(arguments))
}
foo('Li', 28, 'male')

// HTMLCollection

var elem1, elem2;
// document.forms 是一个 HTMLCollection
elem1 = document.forms[0]
elem2 = document.forms.item(0)
console.log(elem1)
console.log(elem2)
console.log(typeof elem1)
console.log(Object.prototype.toString.call(elem1))

// NodeList
var list = document.querySelectorAll('input[type=checkbox]');
for (var checkbox of list) {
  checkbox.checked = true;
}
console.log(list);
console.log(typeof list);
console.log(Object.prototype.toString.call(list));

/**
 * 
 * 类数组应用场景
 * 
 */

// 遍历参数操作
function add() {
  var sum = 0
  console.log(arguments)
  for (var i = 0; i< arguments.length; i++) {
    sum += arguments[i]
  }
  return sum
}
console.log(add(1,5,2,645))

// 定义链接字符串函数
function myConcat(separa) {
  var args = Array.prototype.slice.call(arguments, 1);
  console.log(args)
  return args.join(separa);
}
myConcat('-', 1, 2)

// 传递参数使用
function foo() {
  bar.apply(this, arguments)
}

function bar(a,b,c) {
  console.log(a, b, c)
}
foo(6,5,6)

/**
 * 类数组转换为数组
 */

// 借用数组方法
var arrList = {
  0: 1,
  1: 2,
  length: 2
}
Array.prototype.push.call(arrList, 3)
console.log(arrList, typeof arrList)

// es6的方法转数组

function sum(a, b) {
  let args = Array.from(arguments)
  console.log(args.reduce((p, v) => p + v))
}
sum(1,5)

function sum(a, b) {
  let args =[...arguments]
  console.log(args.reduce((p, v) => p + v))
}
sum(1,5)

function sum(...agr) {
  console.log(arg.reduce((p, v) => p + v))
}
sum(1,5)