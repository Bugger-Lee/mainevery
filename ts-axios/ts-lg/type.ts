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
obj({})
obj(() => {})
// obj(1)