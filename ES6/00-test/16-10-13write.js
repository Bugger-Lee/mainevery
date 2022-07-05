/*
 * @Author: lijian
 * @since: 2021-10-13 09:34:44
 * @lastTime: 2021-10-13 11:07:10
 * @LastAuthor: lijian
 * @message: 防抖 节流 call apply bind
 */

const debounce = (wait, fn) => {
  let timer
  return function () {
    let contenx = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(contenx, args)
    }, wait)
  }
}

const throttle = (wait, fn) => {
  let timer
  return function () {
    let contenx = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(contenx, args)
      }, wait)
    }
  }
}

Function.prototype.myCall = function (contenx, ...args) {
  let context = contenx || window
  context.fn = this
  let result = eval('context.fn(...args)')
  delete context.fn
  return result
}

Function.prototype.myApply = function (contenx, args) {
  let context = contenx || window
  context.fn = this
  let result = eval('context.fn(...args)')
  delete context.fn
  return result
}

Function.prototype.myBind = function (contenx, args) {
  if (typeof this !== 'function') {
    return new Error('this must be a function')
  }
  let self = this
  let bound = function () {
    self.apply(contenx, args.concat(Array.prototype.slice.call(arguments)))
  }
  if (this.prototype) {
    bound.prototype = Object.create(this.prototype)
  }
  return bound
}
