/*
 * @Author: lijian
 * @since: 2022-07-01 17:21:30
 * @lastTime: 2022-07-04 17:48:57
 * @LastAuthor: lijian
 * @message:
 */
/**
 * @description: charAt
 * @return {*} 查找索引字符，返回索引字符，原字符串不变
 */
const strCharAt = '123456'
console.log(strCharAt.charAt(4), strCharAt)

/**
 * @description: concat
 * @return {*} 合并字符串，原字符串不变
 */
const strConcat = '123456'
console.log(strConcat.concat('987'), strConcat)

/**
 * @description: indexOf lastIndexOf
 * @return {*} 返回首次(末次)出现的索引，原字符串不变
 */
const strIndexOf = '1234556'
console.log(strIndexOf.indexOf('5'), strIndexOf)
console.log(strIndexOf.lastIndexOf('5'), strIndexOf)

/**
 * @description: slice
 * @return {*} 从start截取到end 不包括end, 返回截取字符串，原字符串不变
 */
const strSlice = 'asdffd'
console.log(strSlice.slice(1, 3), strSlice)
console.log(strSlice.slice(3), strSlice)

/**
 * @description: split
 * @return {*} 字符串转数组，原字符串不变
 */
const strSplit = 'sdfsdf'
console.log(strSplit.split('d'), strSplit)

/**
 * @description: substr substring
 * @return {*}从start截取到end 不包括end, 返回截取字符串，原字符串不变
 */
const strSubstr = 'dfsfdfd'
console.log(strSubstr.substring(1, 2), strSubstr)
console.log(strSubstr.substring(2), strSubstr)

/**
 * @description: match
 * @return {*} 返回检索的值，返回数组，原字符串不变
 */
const strMatch = '2018,2019,2020,2021,2022'
console.log(strMatch.match('20'), strMatch)

/**
 * @description: replace
 * @return {*}替换字符串
 */

/**
 * @description: search
 * @return {*} 检索字符，返回第一个匹配字符的索引（-1），原字符串不变
 */
const strSearch = '2018,2019,2020,2021,2022'
console.log(strSearch.search('21'), strSearch)

/**
 * @description: toLowerCase toUpperCase
 * @return {*} 字符串转大小写，原字符串不变
 */
const strToLowerCase = 'dffdJKHj415'
console.log(
  strToLowerCase.toLowerCase(),
  strToLowerCase.toUpperCase(),
  strToLowerCase
)

/**
 * @description: includes startsWith endsWith
 * @return {*} 判断是否包含、开头、结尾，返回bool，原字符串不变
 */
const strShow = 'sfddf4245ppp'
console.log(
  strShow.includes('42'),
  strShow.startsWith('sf'),
  strShow.endsWith('41'),
  strShow
)

/**
 * @description: repeat
 * @return {*} 重复字符串，传入次数，返回新字符串，原字符串不变
 */
const strRepeat = '159'
console.log(strRepeat.repeat(6), strRepeat)
