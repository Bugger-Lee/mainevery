const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function Promise() {
  this.state = PENDING
  this.result = null
  this.callbacks = []
}

const transition = (promise, state, result) => {
  if (promise.state !== PENDING) return
  promise.state = state
  promise.result = result
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  return new Promise((resolve, reject) => {
    let callback = {onFulfilled, onRejected, resolve, reject}
    if (this.state === PENDING) {
      this.callbacks.push(callback)
    } else {
      setTimeout(() => {
        handleCallback(callback, this.state, this.result)
      }, 0);
    }
  })
}

const handleCallback = (callback, state, result) => {
  let {onFulfilled, onRejected, resolve, reject} = callback
  try {
    if (state === FULFILLED) {
      isFunction(onFulfilled) ? resolve(onFulfilled(result)) : resolve(result)
    } else if (state === REJECTED) {
      isFunction(onRejected) ? resolve(onRejected(result)) : reject(result)
    }
  } catch (error) {
    reject(error)
  }
}