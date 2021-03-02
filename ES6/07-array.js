/**
 * 
 * 数组的构造器有哪几种
 * 数组的构造器有哪几种
 * 哪些是不改变自身的方法
 * 遍历的方法有哪些
 * 
 */
// 数组的概念
var a = Array(6)
var b = []
b.length = 6
console.log(a, b) // [ <6 empty items> ] [ <6 empty items> ]

/**
 * Array.of
 * Array.of 用于将参数依次转化为数组中的一项，然后返回这个新数组
 */

 console.log(Array.of(8.0))
 console.log(Array(8.0))
 console.log(Array.of(8.0, 5))
 console.log(Array(8.0, 5))
 console.log(Array.of('8'))
 console.log(Array('8'))

 /**
  * Array.from
  * 从一个类似数组的可迭代对象中创建一个新的数组实例
  * 3 个参数：
  * 类似数组的对象，必选
  * 加工函数，新生成的数组会经过该函数的加工再返回
  * this 作用域，表示加工函数执行时 this 的值
  */
var obj = {0: 'a', 1: 'b', 2:'c', length: 3};
var ob = Array.from(obj, function(value, index){
  console.log(value, index, this, arguments.length);
  return value.repeat(3);   //必须指定返回值，否则返回 undefined
}, obj);
console.log(ob)

// String
var str = Array.from('abc')
console.log(str)

// Set
var set = Array.from(new Set(['abc', 'def']))
console.log(set)

// Map
var map = Array.from(new Map([[1, 'ab'], [2, 'de']]))
console.log(map)

/**
 * 
 * Array 的判断
 * 基于instanceof
 * 基于constructor
 * 基于Object.prototype.isPrototypeOf
 * 基于getPrototypeOf
 * 基于Object.prototype.toString
 * 
 */

var a = [];
// 1.基于instanceof
var inst = a instanceof Array
console.log(inst)

// 2.基于constructor
var con = a.constructor === Array
console.log(con)

// 3.基于Object.prototype.isPrototypeOf
var isPro = Array.prototype.isPrototypeOf(a)
console.log(isPro)

// 4.基于getPrototypeOf
var getPro = Object.getPrototypeOf(a) === Array.prototype
console.log(getPro)

// 5.基于Object.prototype.toString
var toStr = Object.prototype.toString.apply(a) === '[object Array]'
console.log(toStr)

/**
 * 改变自身的方法
 * es5 pop、push、reverse、shift、sort、splice、unshift
 * es6 copyWithin、 fill
 */

// pop
var array = ["cat", "dog", "cow", "chicken", "mouse"]
var item = array.pop()
console.log(array, item)

// push
var array = ["cat", "dog", "cow"]
var item = array.push('mouse')
console.log(array, item)

// reverse
var array = [1,2,3,4,5,'a']
var item = array.reverse()
console.log(array, item)

// shift
var array = [1,2,3,4,5,'a']
var item = array.shift()
console.log(array, item)

// unshift
var array = [1,2,3,4,5,'a']
var item = array.unshift(6)
console.log(array, item)

// sort
var array = [1,62,'a', 3,45,5,'a']
var item = array.sort()
console.log(array, item)

// splice
var array = [1,62,'a', 3,45,5,'a']
var item = array.splice(3)
console.log(array, item)

// copyWithin
var array = [1,62,'a', 3,45,5,'a']
var item = array.copyWithin(0,5)
console.log(array, item)

// fill
var array = [1,62,'a', 3,45,5,'a']
var item = array.fill('6',0,5)
console.log(array, item)

/**
 * 
 * 合并两个有序数组
 * 输入 nums1 = [1,2,3,0,0,0]； m = 3
 * nums2 = [2,5,6]；       n = 3
 * 输出 [1,2,2,3,5,6]
 * 
 */
function merge(nums1, m, nums2, n) {
  nums1.splice(m)
  nums2.splice(n)
  nums1.push(...nums2)
  return nums1.sort((a, b) => a-b)
}
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))

/**
 * 不改变自身的方法
 * es5 concat、join、slice、toString、toLocaleString、indexOf、lastIndexOf、toSource
 * es6 includes
 */

// concat
var array = [1,2,3]
var item = array.concat(1,[5,6])
console.log(array, item)

// join
var array = [1,2,3]
var item = array.join('-')
console.log(array, item)

// slice
var array = [1,2,3]
var item = array.slice(1,2)
console.log(array, item)

// toString
var array = [1,2,3]
var item = array.toString()
console.log(array, item)

// toLocaleString
var array = [1,2,3, 'DhinK']
var item = array.toLocaleString()
console.log(array, item)

// indexOf
var array = [1,2,3, 'DhinK']
var item = array.indexOf(3)
console.log(array, item)

// includes
var array = [1,2,3, 'DhinK']
var item = array.includes(3)
console.log(array, item)

/**
 * 
 * 数组遍历的方法
 * es5 forEach、every、some、filter、map、reduce、reduceRight
 * es6 entries、find、findIndex、keys、values
 * 
 */

// forEach
var array = [1,2,3]
var item = array.forEach((value, index, array) => {
  console.log(value, index, array)  
  return array[index] = value + 1
})
console.log(array, item)

// every 
var array = [{name: '123'},{name: '123'},{name: '568'}]
var item = array.every((value, index, array) => {
  console.log('every', value, index, array)  
  return array[index].name == '123'
})
console.log(array, item)

// some 
var array = [{name: '256'},{name: '123'},{name: '123'}]
var item = array.some((value, index, array) => {
  console.log('some', value, index, array)  
  return array[index].name == '123'
})
console.log(array, item)

// map 
var array = [{name: '256'},{name: '123'},{name: '123'}]
var item = array.map((item, index) => {
  console.log('map', item)  
  item.age = index
})
console.log(array, item)

// filter 
var array = [{name: '256'},{name: '123'},{name: '123'}]
var item = array.filter((item, index) => {
  console.log('filter', item)  
  return item.name != '123'
})
console.log(array, item)

// reduce 
var array = [6,8,9]
var item = array.reduce((p, v) => {
  console.log('reduce', p, v)  
  return p * v
})
console.log(array, item, array.reduce((p,v) => p * v))

// entries
var array = [2,6,8]
var item = array.entries()
console.log(array, item, item.next().value)

// find findIndex
var array = [2,6,8]
var item = array.find((value, item) => {
  console.log(value, item)
  return value > 1
})
console.log(array, item)

var item = array.findIndex((value, item) => {
  console.log(value, item)
  return value > 5
})
console.log(array, item)

// keys
var array = [2,6,8]
var item = array.keys()
console.log(array, [...item], [...new Array(3).keys()])

// values
var array = ["abc", "xyz"];
// var iterator = array.values();
// console.log(array, [...item], [...new Array(3).values()])

/**
 * 数组 arr = [1,2,3,4] 求数组的和
 */

// forEach
var arr = [1,2,3,4]
var sum = 0
arr.forEach((e) => {sum += e})
console.log(sum)

// map
var arr = [1,2,3,4]
var sum = 0
arr.map((e) => sum += e)
console.log(sum)

// reduce
var arr = [1,2,3,4]
var sum = arr.reduce((p, v) => {return p + v})
console.log(sum)

/**
 * var arr = [ {name: 'brick1'}, {name: 'brick2'}, {name: 'brick3'} ]
 * 返回 'brick1, brick2 & brick3'
 */

var arr = [{name: 'one'}, {name: 'two'}, {name: 'three'}]
var sum = arr.reduce((v, c, i, arr) => {
  if (i === 0) {
    return c.name
  } else if (i === arr.length -1) {
    return v + '&' + c.name
  } else {
    return v + ',' + c.name
  }
}, '')
console.log(arr, sum)