/*
 * @Author: lijian
 * @since: 2021-10-18 10:25:20
 * @lastTime: 2021-10-18 11:33:23
 * @LastAuthor: lijian
 * @message: 防抖 节流 call apply bind deepCopy instanceof
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

Function.prototype.myCall = function (context, ...args) {
  let self = context || window
  self.fn = this
  let result = eval('self.fn(..args)')
  delete self.fn
  return result
}

Function.prototype.myApply = function (context, args) {
  let self = context || window
  self.fn = this
  let result = eval('self.fn(..args)')
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

const myInstanceof = (left, right) => {
  if (typeof left !== 'object' || left === null) return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
