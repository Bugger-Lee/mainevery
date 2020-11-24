/**
 * 运算符
 */

// 算术运算符 + - * / % ++ --
var num1: number = 10
var num2: number = 2
var res: number = 0

res = num1 + num2
console.log('加 ' + res)

res = num1 - num2
console.log('减 ' + res)

res = num1 * num2
console.log('乘 ' + res)

res = num1 / num2
console.log('除 ' + res)

res = num1 % num2
console.log('余数 ' + res)

num1++
console.log('自增 ' + num1)

num2--
console.log('自减 ' + num2)



// 关系运算符 > < >= <= != ==
console.log('num1=' + num1)
console.log('num2=' + num2)

var ret = num1 > num2
console.log('num1 > num2：' + ret)

var ret = num1 < num2
console.log('num1 < num2：' + ret)

var ret = num1 <= num2
console.log('num1 <= num2：' + ret)

var ret = num1 >= num2
console.log('num1 >= num2：' + ret)

var ret = num1 != num2
console.log('num1 != num2：' + ret)

var ret = num1 == num2
console.log('num1 == num2：' + ret)

// 逻辑运算符 && || !
console.log('num1=' + num1)
console.log('num2=' + num2)

var ret = (num1 > 10) && (num2 < 2)
console.log('(num1>10) && (num2<2)：' + ret)

var ret = (num1 > 10) || (num2 > 2)
console.log('(num1>10) || (num2>2)：' + ret)

var ret = !((num1 > 10) && (num2 < 2))
console.log('!((num1>10) && (num2<2))：' + ret)

// 短路运算符 && || 
var a: number = 10
console.log('(a>15 && a<20)：' + (a > 15 && a < 20))
console.log('(a>15 || a<20)：' + (a > 15 || a < 20))

// 位运算符 & | ^ ~ >> << 
var aa: number = 2
var bb: number = 3
console.log('aa: ' + aa)
console.log('bb: ' + bb)
var result

result = aa & bb
console.log('(aa & bb) =>' + result)

result = aa | bb
console.log('(aa | bb) =>' + result)

result = ~aa
console.log('(~aa) =>' + result)

result = aa ^ bb
console.log('(aa ^ bb) =>' + result)

result = aa << bb
console.log('(aa << bb) =>' + result)

result = aa >> bb
console.log('(aa >> bb) =>' + result)

// 赋值运算符
var x: number = 10
var y: number = 5

console.log('x：' + x)
console.log('y：' + y)
console.log('x+=y：' + (x += y))
console.log('x-=y：' + (x -= y))
console.log('x*=y：' + (x *= y))
console.log('x/=y：' + (x /= y))

// 三元运算符
console.log(x > 0 ? 'x大于0' : 'x小于0')
console.log(y > 10 ? 'y大于10' : 'y小于10')

// 类型运算符
var types = 11
var types2 = '11'
var types3 = null
var types4 = true
var types5 = [1, 2]
var types6 = ['11', 11]
var types7 = function hello(): void {

}

console.log('types的类型：' + typeof types)
console.log('types2的类型：' + typeof types2)
console.log('types3的类型：' + typeof types3)
console.log('types4的类型：' + typeof types4)
console.log('types5的类型：' + typeof types5)
console.log('types6的类型：' + typeof types6)
console.log('types7的类型：' + typeof types7)

// 其他运算符 + -
console.log('types2 + types2：' + (types2 + types2))
console.log('types - types：' + (types - types))

