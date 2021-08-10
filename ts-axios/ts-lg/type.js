// 原始类型
// 字符串 string
var str = 'str1';
var str1 = String(1);
var str2 = "123" + str;
// 数字 number
var num = 163;
var num1 = Number('163');
// 布尔 boolean
var bool = false;
// Symbol
// let sym: symbol = Symbol('5')
// let sym1: symbol = Symbol()
// 复杂的基础类型
// 数组 array
var arr = [1, 2, 8];
var arr1 = ['1', '2'];
arr1.push('5');
// 元组 tuple
var x = ['2', 5, { a: 5 }];
// any
var any = 1;
var any1 = '1';
// unknown
var res = 1;
if (typeof res === 'number') {
    res = res++;
}
// undefined null void
var und = undefined;
var nul = null;
var vio = undefined;
// never
var err = function (msg) {
    throw Error(msg);
};
// obj({})
// obj(() => {})
// obj(1)
// 类型断言
var arrNum = [1, 2, 3];
// const arrNum3: number = arrNum.find(i => i > 2) as number
// const arrNum4: number = <number>arrNum.find(i => i > 2)
// 常量断言
var strs = 'str';
// 类型推断
var nums = 1;
// nums = '2'
var x1 = '2';
// let x2: number = x1
var x2 = x1;
var fn1 = function (a, b) {
    if (b === void 0) { b = 2; }
    return a + b;
};
var f1 = fn1(1, 2);
var add = function (a, b) {
    return a + b;
};
var add1 = add(1, 2);
// const add2 = add(1, '2')
// 字面量类型
var speStr = 'this is string';
// let speStr1: 'this is string' = '1'
var speNumber = 1;
// let speNumber1: 1 = 2
var speBool = true;
// let speBool1: true = false
// let const类型注解
var spestr2 = 'this is str';
var spestr3 = 'this is str';
console.log(typeof spestr2, typeof spestr3);
