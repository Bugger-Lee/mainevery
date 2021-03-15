// 最简使用promise
const pro1 = (a) => {
  return new Promise((resolve, reject) => {
    if (a > 5) {
      resolve(a)
    } else {
      reject(a - 1)
    }
  })
}

pro1(6).then(
  res => {console.log(res)},
  ret => {console.log(ret)}
)
pro1(4).then(
  res => {console.log(res)},
  ret => {console.log(ret)}
)

// 增加异步 settimeout
const pro2 = (a) => {
  return new Promise((resolve, reject) => {
    if (a > 5) {
      setTimeout(() => {
        resolve(a)
      }, 1000);
    } else {
      reject(a - 1)
    }
  })
}

pro2(8).then(
  res => {console.log(res)},
  ret => {console.log(ret)}
)

// 链式调用.then().then()

const pro3 = (a) => {
  return new Promise((resolve, reject) => {
    if (a > 5) {
      resolve(a)
    } else {
      reject(a - 1)
    }
  })
}

pro3(6).then(
  res => { console.log(res);return pro3(4)},
  ret => { return pro3(3)}
).then(
  ress => { console.log(ress);return pro3(8)},
  rets => {console.log(rets);return pro3(9)}
).then(
  ress => {console.log(ress)}
).catch(
  err => {console.log(err)}
)