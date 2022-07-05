/**
 * 数组扁平化
 * 
 */

// 普通递归
function getArr(arr) {
  let res = []
  for (let i=0; i< arr.length; i++) {
    if (Array.isArray(arr[i])) {
      res = res.concat(getArr(arr[i]))
    } else {
      res.push(arr[i])
    }
  }
  return res
}

console.log(getArr([1,[12,[4,5],5],9]))

// 利用 reduce 函数迭代
function getArr(arr) {
  return arr.reduce((p, v) => {
    return p.concat(Array.isArray(v) ? getArr(v) : v)
  }, [])
}
console.log(getArr([1,[12,[4,5],5],9]))

// 扩展运算符实现
function getArr(arr) {
  while (arr.some(i => Array.isArray(i))) {
    console.log(arr)
    arr = [].concat(...arr)
  }
  return arr
}
console.log(getArr([1,[12,[4,5],5],9]))

// split 和 toString 共同处理
var arr = [1, [2, [3, 4]]]
function flatten(arr) {
    return arr.toString().split(',')
}
console.log(flatten(arr), arr.toString())

// es6 flat
var arr = [1,5,[4,[4,[45,[45]]]]]
console.log(arr.flat(Infinity)) // node 不支持

// JSON.stringify JSON.parse
var arr = [1, [2, [3, 4]]]
function flatten(arr) {
  let str = JSON.stringify(arr)
  str = str.replace(/(\[|\])/g, '')
  str = `[${str}]`
  return JSON.parse(str)
}
console.log(flatten(arr))