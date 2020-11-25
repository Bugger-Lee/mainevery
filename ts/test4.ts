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