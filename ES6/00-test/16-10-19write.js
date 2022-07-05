/*
 * @Author: lijian
 * @since: 2021-10-19 15:26:18
 * @lastTime: 2021-10-19 17:12:56
 * @LastAuthor: lijian
 * @message: debounce throttle deepCopy instanceof call apply bind currying
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

const throttle = () => {
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
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}

Function.prototype.myCall = function (context, ...args) {
  let self = context || window
  self.fn = this
  let result = eval('self.fn(...args)')
  delete self.fn
  return result
}

Function.prototype.myApply = function (context, args) {
  let self = context || window
  self.fn = this
  let result = eval('self.fn(...args)')
  delete self.fn
  return result
}

Function.prototype.myBind = function (context, args) {
  let self = this
  let result = function () {
    self.apply(context, args.concat(Array.prototype.slice.call(arguments)))
  }
  return result
}
