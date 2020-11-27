/**
 * 函数
 */
function test() {
  console.log('函数调用了')
}
test()

// 返回值
function getNum(): number {
  return 7
}
function caller() {
  var num = getNum()
  console.log(num)
}
caller()

// 带参数函数
function addNum(x: number, y: number) {
  return x + y
}
console.log(addNum(6, 7))

// 可选参数 默认参数
function change(x1: number, y1:number = 5) {
  return x1+y1
}
console.log(change(8))

function change1(x1: number, y1?:number) {
  if(y1) {
    return x1+y1
  } else {
    return x1
  }
}
console.log(change1(8), change1(8, 8))

// 剩余参数

function addString(x:string, ...y: string[]) {
  console.log(y)
  return x + y.join('')
}
console.log(addString('sa', 'sa', 'cy', '123'))

function addNumber(...y: number[]) {
  console.log(y)
  var num:number = 0
  for (var i =0; i< y.length; i++) {
    num += y[i]
    console.log(num)
  }
}
addNumber(1,2,3,4,5,6,7,8)

// 匿名函数 自调用
