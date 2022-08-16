/*
 * @Author: lijian
 * @since: 2022-08-12 13:46:05
 * @lastTime: 2022-08-12 14:27:59
 * @LastAuthor: lijian
 * @message:
 */
class Promise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    this.onResolvedBacks = []
    this.onRejectedBacks = []
    let resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        this.onResolvedBacks.forEach((fn) => fn())
      }
    }
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.onRejectedBacks.forEach((fn) => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (value) => value
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (err) => {
            throw err
          }
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      }
      if (this.state === 'pending') {
        this.onResolvedBacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
        this.onRejectedBacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
      }
    })
    return promise2
  }
  catch(err) {
    this.then(null, err)
  }
}

const resolvePromise = (promise2, x, resolve, reject) => {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  let called
  if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(
          x,
          (y) => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          (err) => {
            if (called) return
            called = true
            reject(err)
          }
        )
      } else {
        resolve(x)
      }
    } catch (err) {
      if (called) return
      called = true
      reject(err)
    }
  } else {
    resolve(x)
  }
}

Promise.race = (promises) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}

Promise.reject = (val) => {
  return new Promise((resolve, reject) => {
    reject(val)
  })
}

Promise.resolve = (val) => {
  return new Promise((resolve, reject) => {
    resolve(val)
  })
}

Promise.all = (promises) => {
  let i = 0
  let arr = []
  const processLise = (index, data) => {
    i++
    arr[index] = data
    if (i === promises.length) {
      resolve(arr)
    }
  }
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then((data) => {
        processLise(i, data)
      }, reject)
    }
  })
}

Promise.defer = Promise.deferred = function () {
  let dfd = {}
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}
module.exports = Promise

// promises-aplus-tests
