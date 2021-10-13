/*
 * @Author: lijian
 * @since: 2021-10-11 17:40:24
 * @lastTime: 2021-10-11 17:52:08
 * @LastAuthor: lijian
 * @message: 防抖、节流
 */
const debounce = (wait, fn) => {
  let timer
  return function () {
    let context = this
    let args = arguments
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}

const throttle = (wait, fn) => {
  let timer
  return function () {
    let context = this
    let args = arguments
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(context, args)
      }, wait)
    }
  }
}
