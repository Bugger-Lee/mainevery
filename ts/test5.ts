/**
 * Number
 * String
 */
console.log('ts 最大值：' + Number.MAX_VALUE)
console.log('ts 最小值：' + Number.MIN_VALUE)
console.log('ts 负无穷大：' + Number.NEGATIVE_INFINITY)
console.log('ts 正无穷大：' + Number.POSITIVE_INFINITY)
console.log('ts NaN：' + Number.NaN)
var num1 = 1563.21
var num3 = new Number(100)
console.log('1563.21 转换为指数toExponential：' + num1.toExponential())
console.log('1563.21 转换为字符串，并指定位数toFixed：' + num1.toFixed(1))
console.log('1563.21 转换为字符串，并指定位数toFixed：' + typeof num1.toFixed(1))
console.log('1563.21 转换为字符串，使用本地数字格式顺序toLocaleString：' + num1.toLocaleString())
console.log('1563.21 转换为字符串，使用本地数字格式顺序toLocaleString：' + typeof num1.toLocaleString())
console.log('1563.21 把数字格式化为指定的长度toPrecision：' + num1.toPrecision(4))
console.log('1563.21 把数字转换为字符串toString：' + num1.toString(8))
console.log('1563.21 把数字转换为字符串toString：' + typeof num1.toString())
console.log('1563.21 返回原始数字值valueOf：' + num3.valueOf())

var str1 = new String('string')
console.log('str 对创建该对象的函数的引用 constructor' + str1.constructor)
console.log('str 返回字符串的长度 length ' + str1.length)
// str1.prototype.id = 1

console.log('str 返回在指定位置的字符 charAt ' + str1.charAt(0))
console.log('str 返回在指定的位置的字符的 Unicode 编码 charCodeAt ' + str1.charCodeAt(0))
var stri2 = 'zouni'
console.log('str 连接两个或更多字符串，并返回新的字符串 concat ' + str1.concat(stri2))
console.log('str 返回某个指定的字符串值在字符串中首次出现的位置 indexOf ' + str1.indexOf('i'))
console.log('str 从后向前 返回某个指定的字符串值在字符串中首次出现的位置 lastIndexOf ' + str1.lastIndexOf('i')) // 0.0
console.log('str 用本地特定的顺序来比较两个字符串 localeCompare ' + str1.localeCompare('i')) // 0.0
console.log('str 查找找到一个或多个正则表达式的匹配 match ' + str1.match(/in/g)) 
console.log('str 替换与正则表达式匹配的子串 replace ' + str1.replace('in', ''))
console.log('str 检索与正则表达式相匹配的值 search ' + str1.search('in'))
console.log('str 检索与正则表达式相匹配的值 slice ' + str1.slice(2))
console.log('str 检索与正则表达式相匹配的值 split ' + str1.split('i').length)
console.log('str 检索与正则表达式相匹配的值 split ' + typeof str1.split('i'))
console.log('str 从起始索引号提取字符串中指定数目的字符 substr ' + str1.substr(3))
console.log('str 从起始索引号提取字符串中指定数目的字符 substring ' + str1.substring(3,5))
console.log('str 从起始索引号提取字符串中指定数目的字符 substring ' + str1.substring(3))
var str3 = 'StRing'
console.log('str 转换小写 toLocaleLowerCase ' + str3.toLocaleLowerCase())
console.log('str 转换小写 toLowerCase ' + str3.toLowerCase())
console.log('str 转换大写 toLocaleUpperCase ' + str3.toLocaleUpperCase())
console.log('str 转换大写 toUpperCase ' + str3.toUpperCase())
console.log('str 返回字符串 toString ' + num1.toString())
console.log('str 返回字符串 toString ' + typeof num1.toString())
console.log('str 返回指定字符串对象的原始值 valueOf ' + str1.valueOf())

