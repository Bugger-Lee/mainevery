/*
 * @Author: lijian
 * @since: 2021-10-25 10:24:21
 * @lastTime: 2021-10-25 11:10:06
 * @LastAuthor: lijian
 * @message: debounce throttle call apply bind deepCopy instanceof
 */
const debounce = (wait, fn) => {
  let timer
  return function () {
    let self = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(self, args)
    }, wait)
  }
}

const throttle = (wait, fn) => {
  let timer
  return function () {
    let self = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(self, args)
      }, wait)
    }
  }
}

const deepCopy = (obj) => {
  let objCopy = {}
  for (let i in obj) {
    if (typeof obj[i] === 'object') {
      objCopy[i] = deepCopy(obj[i])
    } else {
      objCopy[i] = obj[i]
    }
  }
  return objCopy
}

const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === right.prototype) return true
    if (proto === null) return false
    proto = Object.getPrototypeOf(proto)
  }
}
