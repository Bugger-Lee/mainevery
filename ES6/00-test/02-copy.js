/**
 * 实现深拷贝、浅拷贝
 * 浅拷贝：基础类型 直接复制 引用类型 复制内存地址（会一起改变）
 * 
 */

/**
 * Object.assign()
 * 浅拷贝 拷贝内存地址 跟随改变
 * 不会拷贝对象的不可枚举属性
 * 不会拷贝对象的继承属性
 * 可以拷贝Symbol类型属性
 * 合并属性
 */
let obj1 = {}
let socure = { b: { a: 1 } }
Object.assign(obj1, socure)
console.log(obj1)
socure.b.a = 5
console.log(obj1)
obj1.b.a = 20
console.log(socure)

let objs = {
  b: {
    a: 5
  },
  aym: Symbol(3)
}
Object.defineProperty(objs, 'shuxing', {
  value: '不可枚举属性',
  enumerable: false
})

let objs2 = {}
Object.assign(objs2, objs)
console.log(objs)
/**
 * {...} 扩展运算符
 * 浅拷贝 拷贝内存地址 跟随改变
 * 不会拷贝对象的不可枚举属性
 * 不会拷贝对象的继承属性
 * 可以拷贝Symbol类型属性
 * 合并属性
 */
let objk = {a: {b: 6}}
let objk1 = {...objk}
console.log(objk1)
/**
 * 数组的拷贝
 * ...
 */
let arr = [1, {a:2}, 3]
let arr1 = [...arr]
let arr2 = arr.concat()
console.log(arr1)
console.log(arr2)
arr[1].a = 0
console.log(arr1)
console.log(arr2)

/**
 * 手写浅拷贝
 */
function myCopy(tag) {
  if (typeof tag === 'object' && tag !== null) {
    const newTag = Array.isArray(tag) ? [] : {}
    for (let i in tag) {
      if (tag.hasOwnProperty(i)) {
        newTag[i] = tag[i]
      }
    }
    return newTag
  } else {
    return tag
  }
}

let my = myCopy({a: {b: 5}})
let my2 = myCopy(5)
let my3 = myCopy([5])
console.log(my,my2,my3)

/**
 * 深拷贝
 * 将一个对象 从内存从完全复制出来一份
 * 并在堆内存中开辟一个新的地址存放新对象
 * 两者互不影响 完全分离
 */

/**
 * JSON.stringfy
 * 含有 function undefined  Symbol值 的键会消失
 * NaN Infinity -Infinity 会转成 null
 * 无法拷贝对象的不可枚举属性
 * 无法拷贝对象的原型链
 * Date 转换为字符串
 * Reg 会变成空对象
 */
let obj11 = {a: {b: 1, c: null, d: undefined, n: NaN, f: function() {return 5 }, data: new Date(0), reg: /123/}}
let str = JSON.stringify(obj11)
let obj2 = JSON.parse(str)
obj11.a.b = 2
console.log(obj2, obj11)

function newObj() {
  this.func = function () { alert(1)}
  this.obj = {a: 1}
  this.str = '1'
  this.arr = [1, 2, 3]
  this.und = undefined
  this.reg = /123/
  this.date = new Date(0)
  this.NaN = NaN
  this.sym = Symbol(1)
  this.Inf = Infinity
}

let obj_new = new newObj()
Object.defineProperty(obj_new, 'enable', {
  value: '不可枚举',
  enumerable: false
})
console.log('obj_new', obj_new)
let obj_str = JSON.stringify(obj_new)
let obj_news = JSON.parse(obj_str)
console.log('obj_news', obj_news)

/**
 * 手写递归实现深拷贝
 * 无法拷贝对象的不可枚举属性
 */
function myDeepCope(obj) {
  let cloneObj = {}
  for (let k in obj) {
    if (typeof obj[k] === 'object') {
      cloneObj[k] = myDeepCope(obj[k])
    } else {
      cloneObj[k] = obj[k]
    }
  }
  return cloneObj
}

let cobj = {a: {b: {c: Symbol(1)}}}
let new_cobj = myDeepCope(cobj)
console.log(new_cobj)
cobj.a.b.c = 5
console.log(new_cobj)

/**
 * 升级版
 */
const isComplexType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

function newDeepCope(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj)
  if (obj.constructor === RegExp) return new RegExp(obj)
  if (hash.has(obj)) return hash.get(obj)
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  hash.set(obj, cloneObj)
  for (let key in Reflect.ownKeys(obj)) {
    cloneObj[key] =(isComplexType(obj[key]) && typeof obj[key] !== 'function') ? newDeepCope(obj[key], hash) : obj[key]
  }
  return cloneObj
}
let obj_new2 = new newObj()
Object.defineProperty(obj_new2, 'enable', {
  value: '不可枚举',
  enumerable: false
})
obj_new2.loop = obj_new2
let new_objDeep = newDeepCope(obj_new2)
console.log(new_objDeep)
