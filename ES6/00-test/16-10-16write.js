/*
 * @Author: lijian
 * @since: 2021-10-14 10:37:32
 * @lastTime: 2021-10-14 11:16:33
 * @LastAuthor: lijian
 * @message: 防抖 节流 call apply bind deepCopy
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
