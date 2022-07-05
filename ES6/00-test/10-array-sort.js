// 冒泡排序
var a = [1,5,6,21,3,5,84,9,512,4,61,15]
function sorts(arr) {
  const len = arr.length
  if (len < 2) return arr
  for (let i=0; i<len; i++) {
    for(let j=0; j<i; j++) {
      if(arr[j] > arr[i]) {
        const temp = arr[j]
        arr[j] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}
console.log(sorts(a))

// 快速排序
