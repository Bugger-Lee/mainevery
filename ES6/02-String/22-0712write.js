/*
 * @Author: lijian
 * @since: 2022-07-12 11:07:19
 * @lastTime: 2022-07-12 11:47:42
 * @LastAuthor: lijian
 * @message:
 */
class EventEmitter {
  constructor() {
    if (!EventEmitter.instance) {
      EventEmitter.instance = this
      this.handleMap = {}
    }
    return EventEmitter.instance
  }
  on(eventName, callback) {
    this.handleMap[eventName] = this.handleMap[eventName] ? this.handleMap[eventName] : []
    this.handleMap[eventName].push(callback)
  }
  emit(eventName, ...args) {
    if (this.handleMap[eventName]) {
      const handles = [...this.handleMap[eventName]]
      handles.forEach((callback) => callback(...args))
    }
  }
  remove(eventName, callback) {
    const callBacks = this.handleMap[eventName]
    const index = callBacks.indexOf(callback)
    if (index !== -1) {
      callBacks.splice(index, 1)
    }
  }
  once(eventName, callback) {
    const wapper = (...args) => {
      callback(...args)
      this.remove(eventName, wapper)
    }
    this.on(eventName, wapper)
  }
}
const eventBus = new EventEmitter()
eventBus.once('demo', (params) => {
  console.log(1, params)
})
eventBus.on('demo', (params) => {
  console.log(2, params)
})
eventBus.on('demo', (params) => {
  console.log(3, params)
})
eventBus.emit('demo', 'someData')
eventBus.emit('demo', 'someData')
