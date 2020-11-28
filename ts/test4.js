/**
 * 函数
 */
function test() {
    console.log('函数调用了');
}
test();
// 返回值
function getNum() {
    return 7;
}
function caller() {
    var num = getNum();
    console.log(num);
}
caller();
// 带参数函数
function addNum(x, y) {
    return x + y;
}
console.log(addNum(6, 7));
// 可选参数 默认参数
function change(x1, y1) {
    if (y1 === void 0) { y1 = 5; }
    return x1 + y1;
}
console.log(change(8));
function change1(x1, y1) {
    if (y1) {
        return x1 + y1;
    }
    else {
        return x1;
    }
}
console.log(change1(8), change1(8, 8));
// 剩余参数
function addString(x) {
    var y = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        y[_i - 1] = arguments[_i];
    }
    console.log(y);
    return x + y.join('');
}
console.log(addString('sa', 'sa', 'cy', '123'));
function addNumber() {
    var y = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        y[_i] = arguments[_i];
    }
    console.log(y);
    var num = 0;
    for (var i = 0; i < y.length; i++) {
        num += y[i];
        console.log(num);
    }
}
addNumber(1, 2, 3, 4, 5, 6, 7, 8);
// 匿名函数 带参匿名函数 自调用
var msgs = function () {
    return '匿名函数';
};
console.log(msgs());
var msgs2 = function (s, t) {
    return s + t;
};
console.log(msgs2(6, 8));
(function () {
    var x = '自调用';
    console.log(x);
})();
// 构造函数
var myFun = new Function('a', 'b', 'return a + b');
var a1 = myFun(5, 8);
console.log(a1);
// 递归函数
function factorial(num) {
    if (num <= 0) {
        return 1;
    }
    else {
        return (num * factorial(num - 1));
    }
}
console.log(factorial(5));
// lambda函数 箭头函数
var adds = function (x) { return x + 100; };
console.log(adds(505));
function disp(x) {
    return x + 100;
}
console.log(disp(100));
console.log(disp('100'));
