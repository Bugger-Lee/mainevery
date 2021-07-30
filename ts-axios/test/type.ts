// 布尔 boolean
let isDone: boolean = true

// 数字 number
let num: number = 5

// 字符串 string
let str: string = 'str'
let str2: string = `name ${num}`

// 数组 array
let arr1: number[] = [1, 8, 6]
let arr2: string[] = ['1']
let arr3: string[] | number [] = [1, 2]
let arr4: string[] | number [] = ['1', '2']
// Q: 如何定义 arr = [1, '2']

// 元组 tuple
let x: [number, string]
x = [1, '2']
// x = ['2', 3]
x[1].substr(1)
x[0].toString()

// 枚举enum
enum Color {Red, Green, White}
let c: Color = Color.Red
let r: string = Color[2]
console.log(c, r)

// any
let notSure: any = 4
notSure = false
notSure = 'sure'
let arr5: any[] = [1, '2', false]

// void
function warnUser(): void {
  console.log('It is a warnning')
}
let warn: void
warn = undefined
warn = null

// undefined null
let u: undefined = undefined
let n: null = null
let stru: string = undefined
let strn: string = null
let numu: number = undefined
let numn: number = null

// never
function error(msg: string): never {
  throw new Error(msg)
}

// object
declare function creat(o: object | null): void
// creat({a: 1})
// creat(null)
// creat('1')
// creat(false)
// creat(1)
// creat(undefined)

// 类型断言
let strs: any = 'str'
let str1length: number = (<string>strs).length
let str1length2: number = (strs as string).length
console.log(str1length, str1length2)
