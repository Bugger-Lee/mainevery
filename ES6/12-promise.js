class Promises {
  constructor (executor) {
    // 初始化state为等待态
    this.state = 'pending'
    // 成功的值
    this.value = undefined
    // 失败的原因
    this.reason = undefined
    // 成功存放的数组
    this.onResolvedCallbacks = []
    // 失败存放的数组
    this.onRejectedCallbacks = []
    // 成功
    let resolve = (value) => {
      // state改变，resolve调用就会失败
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value
        // 一旦resolve执行，调用成功数组的函数
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        // 一旦reject执行，调用失败数组的函数
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    // 立即执行
    try {
      executor(resolve, reject)
    } catch (err) {
      reject(err)
    }
  }
  then (onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}
    let promise2 = new Promises((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0);
      }
      if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0);
      }
      if (this.state === 'pending') {
        this.onResolvedCallbacks.push(()=> {
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0);
        })
      }
    })
    return promise2
  }
  catch (fn) {
    return this.then(null, fn)
  }
}

Promises.resolve = (val) => {
  return new Promises((resolve, reject) => {
    resolve(val)
  })
}

Promises.reject = (val) => {
  return new Promises((resolve, reject) => {
    reject(val)
  })
}

Promises.race = (promises) => {
  return new Promises((resolve, reject) => {
    for(let i =0; i < promises.length; i++) {
      promises[i].then(resolve,reject)
    }
  })
}

Promises.all = (promises) => {
  let arr = []
  let i = 0
  function processList(index, data) {
    arr[index] = data
    i++
    if (i == promises.length) {
      resolve(arr)
    }
  }
  return new Promises((resolve, reject) => {
    for(let i =0; i < promises.length; i++) {
      promises[i].then(data => {
        processList(i, data)
      },reject)
    }
  })
}


function resolvePromise(promise2, x, resolve, reject) {
  if (x === promise2) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  let called
  if (x != null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      let then = x.then
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return
          called = true
          resolvePromise(promise2, y, resolve, reject)
        }, err => {
          if (called) return
          called = true
          reject(err)
        })
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

const p = (a) => {
  return new Promises((resolve, reject) => {
    if (a > 5) {
      console.log('9', a)
      resolve(a)
    } else {
      reject(6)
    }
  })
}
p(3).then(
  res => {
    console.log(res)
  },
  rej => {
    console.log(rej)
  }
)
p(5).then(
  res => {
    console.log('5', res)
  },
  rej => {
    console.log('6', rej)
  }
)

p(8).then(res => {
  console.log('1',res)
  return p(9)
}).then(res => {
  console.log(res)
})

const pres = Promises.resolve('Hello')
const prej = Promises.resolve('Ni Hao')
pres.then(res => {console.log(res)})
prej.then(res => {console.log(res)})