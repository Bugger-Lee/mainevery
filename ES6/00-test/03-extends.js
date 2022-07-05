/**
 * 继承：可以使得子类具有父类的方法和属性
 * 
 */
/**
 * 原型链继承
 * 共享内存空间 一同变化
 */
function Prese() {
  this.name = 'Li'
  this.age = [1, 20, 25]
}

function My() {
  this.type = 1
}
function My2() {
  this.type = 1
}
My.prototype = new Prese()
My2.prototype = new Prese()
console.log(new My())
let s1 = new My()
let s2 = new My()
let s3 = new My2()
s1.age.push(30)
console.log(s1,s2,s3)

/**
 * 构造函数继承 call
 * 组合原型链继承
 */

function Preson() {
  this.name = 'Lee'
  this.age = [1, 2, 3]
}
Preson.prototype.getName = function () {
  return this.name
}
function Child() {
  Preson.call(this)
  this.type = '1'
}
Child.prototype = new Preson()
// Child.prototype.constructor = Child
let p1 = new Child()
let p2 = new Child()
p1.age.push(5)
console.log(p1, p2)
console.log(p1.getName())

/**
 * 原型式继承
 * Object.create
 * 相当于浅拷贝
 */
let Presons = {
  name: 'Loo',
  age: [1, 2],
  getName() {
    return this.name
  }
}
let Preson1 = Object.create(Presons)
let Preson2 = Object.create(Presons)
Preson1.age.push(8)
console.log(Preson1, Preson2)

/**
 * 寄生式继承
 * 
 */

let obj = {
  name: 'Obj',
  age: [1, 2, 3],
  getName() {
    return this.name
  }
}

function clone(obj) {
  let clone = Object.create(obj)
  clone.getAge = function () {
    return this.age
  }
  return clone
}

let cObj = clone(obj)
console.log(cObj)

/**
 * 寄生组合式继承
 * 
 */

function nClone(parent, child) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child
}
function P1() {
  this.name = 'parser',
  this.age = [1,2]
}
P1.prototype.getName = function() {
  return this.name
}
function C1() {
  P1.call(this)
  this.type = 1
}
nClone(P1, C1)
C1.prototype.getType = function () {
  return this.type
}
let c1 = new C1()
console.log(c1)

/**
 * es6 class 继承
 * extends
 */
class Persons {
  constructor (name) {
    this.name = name
  }
  getName () {
    console.log('Persons', this.name)
  }
}

class Son extends Persons {
  constructor (name, age) {
    super(name)
    this.age = age
  }
}

const Son1 = new Son('wang', 28)
console.log(Son1)

/**
 * extends 实现逻辑
 */
function _possibleConstructorReturn (self, call) { 
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self; 
}

function _inherits (subClass, superClass) { 
  subClass.prototype = Object.create(superClass && superClass.prototype, { 
    constructor: { 
      value: subClass, 
      enumerable: false, 
      writable: true, 
      configurable: true 
    } 
  })
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; 
}
var Parent = function Parent () {
  // 验证是否是 Parent 构造出来的 this
  _classCallCheck(this, Parent)
}

var Child = (function (_Parent) {
  _inherits(Child, _Parent);
  function Child () {
    _classCallCheck(this, Child);
    return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
  }
  return Child;
}(Parent));
