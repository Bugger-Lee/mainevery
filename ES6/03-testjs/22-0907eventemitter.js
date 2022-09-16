/*
 * @Author: lijian
 * @since: 2022-09-07 13:59:54
 * @lastTime: 2022-09-07 15:01:08
 * @LastAuthor: lijian
 * @message:
 */
class EventEmitter {
  constructor() {
    this.cache = {}
  }
  on(name, fn) {
    if (this.cache[name]) {
      this.cache[name].push(fn)
    } else {
      this.cache[name] = [fn]
    }
  }
  off(name, fn) {
    let tasks = this.cache[name]
    if (tasks) {
      let index = tasks.findIndex((f) => f === fn || f.callback === fn)
      if (index >= 0) {
        tasks.splice(index, 1)
      }
    }
  }
  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      let tasks = this.cache[name].slice()
      for (let fn of tasks) {
        fn(...args)
      }
      if (once) {
        delete this.cache[name]
      }
    }
  }
}

// 测试
let eventBus = new EventEmitter()
const fn1 = (name, age) => {
  console.log(`${name}+${age}`)
}
const fn2 = (name, age) => {
  console.log(`hello ${name}+${age}`)
}
eventBus.on('aaa', fn1)
eventBus.on('aaa', fn2)
eventBus.emit('aaa', false, 'liming', '32')
