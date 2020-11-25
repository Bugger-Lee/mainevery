/**
 * 条件语句
 * 循环
 *
 */
var num = 5;
// if...else
if (num > 0) {
    console.log('if成功');
}
if (num < 0) {
    console.log('if成功');
}
else {
    console.log('else成功');
}
// if...else if ... else
if (num == 1) {
    console.log('if成功');
}
else if (num == 2) {
    console.log('else if成功');
}
else if (num == 5) {
    console.log('else if成功');
}
else {
    console.log('else成功');
}
// switch...case
var num1 = 10;
switch (num1) {
    case 6:
        console.log('num1：' + num1);
        break;
    case 5:
        console.log('num1：' + num1);
        break;
    default:
        console.log('num1：' + num1);
        break;
}
// for循环
for (var i = 1; i < 5; i++) {
    console.log(i);
}
// for in
var ji = { 'a': 12, 'b': 25 };
for (var j in ji) {
    console.log(ji[j]);
}
ji = [1, 2, 3];
//for of
for (var _i = 0, ji_1 = ji; _i < ji_1.length; _i++) {
    var n = ji_1[_i];
    console.log(ji[n]);
}
// forEach
ji.forEach(function (k) {
    console.log(k);
});
// every
ji.every(function (k) {
    console.log(k);
});
// some
ji.some(function (k) {
    console.log(k);
});
// while
var ab = 0;
var ac = 10;
while (ac > 5) {
    ab += ac--;
    console.log(ab);
}
// do...while
var k = 3;
do {
    console.log(k);
    k--;
} while (k > 0);
// break 
k = 5;
while (k > 0) {
    console.log(k);
    if (k == 2) {
        break;
    }
    k--;
}
// continue 
k = 5;
while (k > 0) {
    if (k == 2) {
        continue;
    }
    k--;
    console.log(k);
}
// 无限循环
for (;;) {
    console.log("这段代码会不停的执行");
}
