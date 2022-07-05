/*
 * @Author: lijian
 * @since: 2022-07-05 14:25:52
 * @lastTime: 2022-07-05 15:52:49
 * @LastAuthor: lijian
 * @message: 循环、遍历
 */

/**
 * @description: for
 * @return {*} 可遍历数组、字符串
 */
const arrFor = [1, 2, 3]
const strFor = 'abc'
for (let i = 0; i < arrFor.length; i++) {
  console.log(arrFor[i])
  console.log(strFor[i])
}

/**
 * @description: while do while
 * @return {*}
 */
let a = 5
while (a > 0) {
  a--
  console.log(a)
}

/**
 * @description: forEach
 * @return {*} 不改变原数组 返回undefined
 */
const arrForEach = [5, 8, 9]
let arrForEachNew = arrForEach.forEach((i) => {
  console.log(i)
  if (i > 7) {
    i = 7
  }
})
console.log(arrForEachNew, arrForEach)

/**
 * @description: for of
 * @return {*}
 */
const arrForof = [1, 2, 3]
for (i of arrForof) {
  if (i > 1) {
    break
  }
  console.log(i)
}

/**
 * @description: every some
 * @return {*} 所有元素都满足，至少有一个满足  返回bool
 */
const arrEvery = [12, 25, 36, 24]
console.log(arrEvery.every((i) => i > 10))
console.log(arrEvery.every((i) => i > 30))
console.log(arrEvery.some((i) => i < 10))
console.log(arrEvery.some((i) => i > 30))

/**
 * @description: filter
 * @return {*} 筛选元素，返回新数组
 */
const arrFilter = [2, 5, 36, 45]
console.log(arrFilter.filter((i) => i > 30))

/**
 * @description: map
 * @return {*}
 */
const arrMap = [15, 515, 51, 212, 545]
const arrMapNew = arrMap.map((i) => {
  if (i > 500) {
    return i + 10000
  } else {
    return i
  }
})
console.log(arrMapNew, arrMap)

/**
 * @description: reduce
 * @return {*}
 */
