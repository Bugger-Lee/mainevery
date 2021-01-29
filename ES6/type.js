/**
 * 数据类型
 * 引用指向
 * 
 */

let a = {
  name: 'Lee',
  age: 12
}

let b = a
console.log(b.age, a.age)
b.age = 13
console.log(b.name, a.age, b.age)

/**
 * 引用
 */
let aa = {
  name: 'Li',
  age: 26
}
function change(a) {
  a.age = 24
  a = {
    name: 'Lee',
    age: 25
  }
  return a
}

let bb = change(aa)

console.log(aa, bb)

/**
 * 数据类型检测
 * typeof
 */
function typeY(a) {
  console.log(typeof a)
}

typeY(1)
typeY('1')
typeY(undefined)
typeY(null)
typeY(Symbol)
typeY(false)
typeY([])
typeY({})
typeY(console)
typeY(console.log)

/**
 * 数据类型检测
 * instanceof 
 */
let Car = function () {}
let Ben = new Car()
console.log(Ben instanceof Car)

let car = new String('Ben Chi')
console.log(car instanceof String)
console.log(car instanceof Car)

let str = 'string'
console.log(str instanceof String)

function myInstanceof(n, o) {
  if (typeof n !== "object" || n === null) return false
  let proto = Object.getPrototypeOf(n)
  if (proto === null) return false
  if (proto === o.prototype) return true
  if (proto === null) return false
  return false
}

console.log(myInstanceof(new String('123'), String))
console.log(myInstanceof(Ben, Car))
/**
 * instanceof 可以准确判断复杂的数据数据类型  但是无法判断基础的数据类型
 * typeof 可以判断基础数据类型（null 除外）、和复杂的function 类型
 */

/**
 * 数据类型检测
 * Object.prototype.toString
 */
function myObjPro(type) {
  if (typeof type !== "object") {
    console.log(typeof type)
  } else {
    console.log(Object.prototype.toString.call(type).replace(/^\[object (\S+)\]$/, '$1'))
  }
}
// console.log(document)
myObjPro({})
myObjPro([])
myObjPro(null)
myObjPro(undefined)
myObjPro('123')
// myObjPro(window)
myObjPro()
myObjPro(function () {})
myObjPro(/123/g)

/**
 * 强制类型转换
 * [] == ![]
 * 
 */
console.log('强制类型转换')
console.log('123' == 123)
console.log('' == null)
console.log('' == 0)
console.log('' == [])
console.log([] == ![])
console.log(undefined == null)
console.log(undefined == '')
console.log({} == '')
console.log({} == !{})
console.log({} + 10)
console.log(Number(null))
console.log(Number(''))
console.log(parseInt(''))

/**
 * 强制类型转换
 */
let objs = {
  [Symbol.toPrimitive] () {
    return 200
  },
  valueOf () {
    return 300
  },
  toString () {
    return 'Hello'
  }
}
console.log(objs + 200)

/**
 * Number()强制转换规则
 * Boolean true 1 false 0
 * number 返回自身
 * string 纯数字 10进制 浮点数 浮点数 空字符串 0 以上都不是 NaN
 * Symbol 返回错误
 * 对象 并且部署了 Symbol.toPrimitive 调用此方法  未部署 调用valueOf() 方法
 *   
 * */


/**
 * Boolean()强制转换规则
 * false undefined null false 0 +0 -0 '' NaN
 * 其他true
 */

/**
 * == 隐式转换规则
 * 1. 类型相同 无需转换
 * 2. 其中一个是null undefined 另一个必须为 null undefined 才返回true 否则 false
 * 3. 其中一个是Symbol 返回false
 * 4. string 和number 转换为number 比较
 * 5. 其中一个是boolean 转换为 number
 * 6. 一个为object 一个为 string number Symbol 把object转换为原始类型再判断
 * 
 */
var a1 = {
  value: 0,
  valueOf () {
    this.value++
    return this.value
  }
}
console.log(a1 == 1 && a1 == 2 && a1 == 3)

/**
 * + 的隐式转换规则
 * 1. 一个是字符串 另一个是 undefined null boolean  字符串拼接
 * 2.一个是数字 另一个是 undefined null boolean 数字相加
 * 3. 一个字符串 一个数字 字符串拼接
 */
console.log(1 + {})

/**
 * object 转换规则
 * 1.优先调用[Symbol.toPrimitive]() 方法
 * 2.调用valueOf 如果是基础类型 返回
 * 3.调用toString 如果是基础类型 返回
 * 4.都没有返回 报错
 * 
 */

var obje = {
  a: 1,
  valueOf () {
    return 2
  },
  toString () {
    return '5'
  },
  [Symbol.toPrimitive] () {
    return 8
  }
}

console.log(1 + obje.a)
console.log('1' + obje)
console.log(10 + {})
console.log([1, 2, undefined, 4] + 10)