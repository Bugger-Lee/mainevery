/**
 * 基础语法
 * 基础类型
 * 变量声明
 */
var msg: string = 'Hello Ts'
// 多行用;隔开
console.log(msg); console.log('msg');

// 类
class Site {
  name(): void {
    console.log('dadada')
  }
}
var obj = new Site()
obj.name()

// 枚举
const getuNum = () => {
  return 6
}
enum List {
  A = 12,
  B, // 下个数为上个数+1
  C,
  k,
  a = 99,
  aa,
  u = getuNum(), // 如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
  uu = 5,
  uuu
}
console.log(List.C, List.k, List.aa, List.u, List.uu, List.uuu)

/**
 * 变量声明
 * 
 */

let u_name
console.log(u_name)

let user_name: string = 'xiaoming'
let score1: number = 90
let score2: number = 98
let sum: number = score1 + score2
console.log("名字: " + user_name)
console.log("第一个科目成绩: " + score1)
console.log("第二个科目成绩: " + score2)
console.log("总成绩: " + sum)

/**
 * 类型断言
 * 
 */
let str = null
let str2: number = <number><any>str
console.log(str, str2)

/**
 * 类型推断
 * 
 */
let n_num = 2
console.log('数字：' + n_num)
// n_num = '6' //不能将类型“\"6\"”分配给类型“number”
n_num = 6
console.log(n_num)

/**
 * 变量作用域
 * 
 */

let global_num = 12

class Numbers {
  num_val = 15
  static sval = 16

  storeNum(): void {
    var local_num = 17
    console.log('局部变量' + local_num)
  }
}
console.log('全局变量' + global_num, Numbers.sval)
var objs = new Numbers()
console.log('实例变量: ' + objs.num_val)
objs.storeNum()