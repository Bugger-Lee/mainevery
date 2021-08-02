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
obj({});
obj(function () { });
// obj(1)
