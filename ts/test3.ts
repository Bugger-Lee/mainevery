/**
 * 条件语句
 * 循环
 * 
 */

var num: number = 5

// if...else
if (num > 0) {
  console.log('if成功')
}
if (num < 0) {
  console.log('if成功')
} else {
  console.log('else成功')
}

// if...else if ... else
if (num == 1) {
  console.log('if成功')
} else if (num == 2) {
  console.log('else if成功')
} else if (num == 5) {
  console.log('else if成功')
} else {
  console.log('else成功')
}

// switch...case

var num1: number = 10
switch (num1) {
  case 6:
    console.log('num1：' + num1)
    break;
  case 5:
    console.log('num1：' + num1)
    break;
  default:
    console.log('num1：' + num1)
    break;
}

// for循环
for (var i = 1; i < 5; i++) {
  console.log(i)
}

// for in
var ji: any = { 'a': 12, 'b': 25 }
for (var j in ji) {
  console.log(ji[j])
}

ji = [1, 2, 3]
//for of
for (var n of ji) {
  console.log(ji[n])
}

// forEach
ji.forEach((k: any) => {
  console.log(k)
})

// every
ji.every((k: any) => {
  console.log(k)
})

// some
ji.some((k: any) => {
  console.log(k)
})

// while
let ab: number = 0
let ac = 10
while (ac > 5) {
  ab += ac--
  console.log(ab)
}

// do...while
let k: number = 3
do {
  console.log(k)
  k--
} while (k > 0)

// break 
k = 5
while (k > 0) {
  console.log(k)
  if (k == 2) {
    break
  }
  k--
}

// continue 
k = 5
while (k > 0) {
  if (k == 2) {
    continue
  }
  k--
  console.log(k)
}

// 无限循环
for (; ;) {
  console.log("这段代码会不停的执行")
}