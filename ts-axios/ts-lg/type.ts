// 原始类型

// 字符串 string
let str: string = 'str1'
let str1: string = String(1)
let str2: string = `123${str}`

// 数字 number
let num: number = 163
let num1: number = Number('163')

// 布尔 boolean
let bool: boolean = false

// Symbol
// let sym: symbol = Symbol('5')
// let sym1: symbol = Symbol()

// 复杂的基础类型

// 数组 array
let arr: number[] = [1, 2, 8]
let arr1: string[] = ['1', '2']
arr1.push('5')

// 元组 tuple
let x: [string, number, object] = ['2', 5, {a: 5}]

// any
let any: any = 1
let any1: any = '1'

// unknown
let res: unknown = 1
if (typeof res === 'number') {
  res = res++
}

// undefined null void
let und: undefined = undefined
let nul: null = null
let vio: void = undefined

// never
const err = (msg: string): never => {
  throw Error(msg)
}

// 非原始类型

// object
declare function obj(o: object| null): any;
// obj({})
// obj(() => {})
// obj(1)

// 类型断言
let arrNum: number[] = [1, 2, 3]
// const arrNum3: number = arrNum.find(i => i > 2) as number
// const arrNum4: number = <number>arrNum.find(i => i > 2)

// 常量断言
let strs = 'str' as const

// 类型推断
let nums = 1
// nums = '2'
let x1 = '2'
// let x2: number = x1
let x2: string = x1

const fn1 = (a: number, b = 2) => {
  return a + b
}
const f1 = fn1(1, 2)
// const f2 = fn1(1, '2')

// 上下文推断
type adder = (a: number, b: number) => number
const add: adder = (a, b) => {
  return a + b
}
const add1 = add(1, 2)
// const add2 = add(1, '2')

// 字面量类型
let speStr: 'this is string' = 'this is string'
// let speStr1: 'this is string' = '1'
let speNumber: 1 = 1
// let speNumber1: 1 = 2
let speBool: true = true
// let speBool1: true = false

// let const类型注解
let spestr2 = 'this is str'
const spestr3 = 'this is str'
console.log(typeof spestr2, typeof spestr3)
