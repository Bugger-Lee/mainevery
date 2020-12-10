/**
 * 
 * 进阶
 * 
 */

// 类型别名
type Name_ = string
type Names = () => string
type NameNew = Name_ | Names

function getName(n:NameNew) {
  if (typeof n === 'string') {
    return n
  } else {
    return n()
  }
}
console.log(getName('5'))
var f = () => {
  return '666'
}
console.log(getName(f))

// 字符串字面量类型
type fun = 'click' | 'scroll' | 'mousemove'

function types_new(n:fun) {
  console.log(n)
}
types_new('scroll') // 只能用字面量的类型

// 元组  超过 之后的为之前的联合类型
let tom: [string, number]
tom = ['Tom', 123]
tom.push(5)
tom.push('5')
console.log(tom)
