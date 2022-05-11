/*
 * @Author: lijian
 * @since: 2022-04-29 14:06:03
 * @lastTime: 2022-04-29 17:55:41
 * @LastAuthor: lijian
 * @message:排序
 */
const arr = [8, 12, 56, 9, 4, 1, 6, 58, 75]

/**
 * @description: 快速排序
 * @param {*} list
 * @return {*}
 */
const quickSort = (list) => {
  if (list.length < 2) {
    return list
  }
  const target = list[0]
  const left = []
  const right = []
  for (let i = 1; i < list.length; i++) {
    if (list[i] < target) {
      left.push(list[i])
    } else {
      right.push(list[i])
    }
  }
  return quickSort(left).concat([target], quickSort(right))
}
// console.log(quickSort(arr))

/**
 * @description: 归并排序 分治法
 * @param {*} list
 * @return {*}
 */
const mergeSort = (list) => {
  if (list.length < 2) {
    return list
  }
  const mid = Math.floor(list.length / 2)
  const start = list.slice(0, mid)
  const end = list.slice(mid)
  return merge(mergeSort(start), mergeSort(end))
}

const merge = (start, end) => {
  const temp = []
  while (start.length && end.length) {
    if (start[0] < end[0]) {
      temp.push(start.shift())
    } else {
      temp.push(end.shift())
    }
  }
  while (start.length) {
    temp.push(start.shift())
  }
  while (end.length) {
    temp.push(end.shift())
  }
  return temp
}

// console.log(mergeSort(arr))

/**
 * @description: 选择排序
 * @param {*} list
 * @return {*}
 */
const selectSort = (list) => {
  for (let i = 0; i < list.length - 1; i++) {
    let index = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[index]) {
        index = j
      }
    }
    ;[list[index], list[i]] = [list[i], list[index]]
  }
}
