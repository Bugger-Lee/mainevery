// 布尔 boolean
var isDone = true;
// 数字 number
var num = 5;
// 字符串 string
var str = 'str';
var str2 = "name " + num;
// 数组 array
var arr1 = [1, 8, 6];
var arr2 = ['1'];
var arr3 = [1, 2];
var arr4 = ['1', '2'];
// Q: 如何定义 arr = [1, '2']
// 元组 tuple
var x;
x = [1, '2'];
// x = ['2', 3]
x[1].substr(1);
x[0].toString();
// 枚举enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["White"] = 2] = "White";
})(Color || (Color = {}));
var c = Color.Red;
var r = Color[2];
console.log(c, r);
// any
var notSure = 4;
notSure = false;
notSure = 'sure';
var arr5 = [1, '2', false];
// void
function warnUser() {
    console.log('It is a warnning');
}
var warn;
warn = undefined;
warn = null;
// undefined null
var u = undefined;
var n = null;
var stru = undefined;
var strn = null;
var numu = undefined;
var numn = null;
// never
function error(msg) {
    throw new Error(msg);
}
// creat({a: 1})
// creat(null)
// creat('1')
// creat(false)
// creat(1)
// creat(undefined)
// 类型断言
var strs = 'str';
var str1length = strs.length;
var str1length2 = strs.length;
console.log(str1length, str1length2);
