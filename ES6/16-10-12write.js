/*
 * @Author: lijian
 * @since: 2021-10-12 18:13:19
 * @lastTime: 2021-10-12 18:18:51
 * @LastAuthor: lijian
 * @message: 防抖 节流
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
