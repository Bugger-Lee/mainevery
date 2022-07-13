/*
 * @Author: lijian
 * @since: 2022-07-05 16:05:04
 * @lastTime: 2022-07-05 16:42:23
 * @LastAuthor: lijian
 * @message: 字符串
 */
/**
 * @description: 替换空格
 *
 * 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy
 * @return {*}
 */
const str = 'WE fg  dx sd   f'
const replaceSpace = (str) => {
  return str.split(' ').join('%20')
}
const splitSpace = (str) => {
  return str.replace(/\s+/g, '%31')
}
console.log(replaceSpace(str))
console.log(splitSpace(str))
