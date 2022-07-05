/*
 * @Author: lijian
 * @since: 2022-06-30 18:26:16
 * @lastTime: 2022-07-01 17:20:32
 * @LastAuthor: lijian
 * @message:
 */

/**
 * @description: push
 * @return {*} 在尾部追加，压栈，原数组会变
 */
const arrPush = [1, 2, 3]
console.log(arrPush.push(4), arrPush)

/**
 * @description: pop
 * @return {*} 在尾部弹出，出栈，原数组会变
 */
const arrPop = [1, 2, 3]
console.log(arrPop.pop(), arrPop)

/**
 * @description: 栈
 * @return {*}
 */
const stack = [1, 2]
stack.push(3) // 入栈
console.log(stack)
const stackPop = stack.pop()
console.log(stackPop, stack)

/**
 * @description: unshift
 * @return {*} 在头部压入，入队，原数组会变
 */
const arrUnshift = [1, 2, 3]
console.log(arrUnshift.unshift(0), arrUnshift)

/**
 * @description: shift
 * @return {*} 在头部弹出，出队，原数组会变
 */
const arrShift = [1, 2, 3]
console.log(arrShift.shift(), arrShift)

/**
 * @description: concat
 * @return {*} 在尾部追加，返回新数组，原数组不变
 */
const arrConcat = [1, 2, 3]
console.log(arrConcat.concat(4), arrConcat)

/**
 * @description: indexOf
 * @return {*} 查找数组内的值，返回下标，原数组不变
 */
const arrIndexOf = [1, 2, 3]
console.log(arrIndexOf.indexOf(2), arrIndexOf)

/**
 * @description: includes
 * @return {*} 查找数组内的值，返回true、false，原数组不变
 */
const arrIncludes = [1, 2, 3]
console.log(arrIncludes.includes(1), arrIncludes.includes(5), arrIncludes)

/**
 * @description: join
 * @return {*} 数组转字符串，返回字符串，原数组不变
 */
const arrJoin = [1, 2, 3]
console.log(arrJoin.join('-'), arrJoin)

/**
 * @description: reverse
 * @return {*} 数组翻转，返回翻转后的数组，原数组改变
 */
const arrReverse = [1, 2, 3]
console.log(arrReverse.reverse(), arrReverse)

/**
 * @description: slice(start, end)
 * @return {*} 从start截取到end 不包括end, 返回截取数组，原数组不变
 */
const arrSlice = [1, 2, 3, 4, 5, 6]
console.log(arrSlice.slice(1, 5), arrSlice)

/**
 * @description: splice(start, num, item1, item2, ...)
 * @return {*} start 开始的位置 num 删除的个数 items 添加的元素，返回删除的数组，原数组改变
 */
const arrSplice = [1, 2, 3, 4, 5, 6]
console.log(arrSplice.splice(2, 0, 8, 9), arrSplice)
console.log(arrSplice.splice(2, 1), arrSplice)

/**
 * @description: sort
 * @return {*} 排序, 返回排序后的数组，原数组改变
 */
const arrSort = [1, 11, 25, 3, 45, 9]
console.log(
  arrSort.sort((a, b) => a - b),
  arrSort
)

/**
 * @description: toString
 * @return {*} 数组转字符串，返回字符串，原数组不变
 */
const arrToString = [1, 2, 3, 4, 5]
console.log(arrToString.toString(), arrToString)
