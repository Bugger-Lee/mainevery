/**
 * Array
 * Map
 */
var arr = ['aa', 'bb', 'cc'];
var arrNum = [3, 4, 5, 3];
console.log(arr[0], arrNum[1]);
// Array实例
var arr_num = new Array(4);
for (var i = 0; i < arr_num.length; i++) {
    arr_num[i] = i + 5;
    console.log(arr_num[i]);
}
var arr_str = new Array('af', 'aq', 'rd', 'af');
for (var i = 0; i < arr_str.length; i++) {
    console.log(arr_str[i]);
}
// 数组结构
var arrD = arr[0], arrY = arr[1];
console.log(arrD, arrY);
// 数组迭代
for (var kh in arrNum) {
    console.log(arrNum[kh]);
}
// 多维数组
var arr2 = [[1, 2, 3], [5, 6, 8], [8, 6, 4]];
console.log(arr2[0][2]);
console.log(arr2[2][0]);
// 数组方法
console.log('concat 连接两个或更多的数组，并返回结果：' + arr.concat(arr_str));
console.log('every 检测数值元素的每个元素是否都符合条件：' + arrNum.every(function (i) { return i > 4; }));
console.log('filter 检测数值元素，并返回符合条件所有元素的数组：' + arrNum.filter(function (i) { return i > 3; }));
console.log('forEach 数组每个元素都执行一次回调函数：' + arrNum.forEach(function (n) { console.log(n); }));
console.log('indexOf 搜索数组中的元素，并返回它所在的位置：' + arrNum.indexOf(4));
console.log('lastIndexOf 从后向前 搜索数组中的元素，并返回它所在的位置：' + arrNum.lastIndexOf(3));
console.log('join 把数组的所有元素放入一个字符串（数组转字符串）：' + arrNum.join('-'));
console.log('map 通过指定函数处理每个元素：' + arrNum.map(function (i) { i++; console.log(i); }));
console.log('some 检测数组元素中是否有元素符合指定条件：' + arrNum.some(function (i) { return i == 5; }));
console.log('slice 选取数组的一部分。并返回一个新数组：' + arr_str.slice(2, 4));
console.log('toString 把数组转换为字符串。并返回结果：' + arr_str.toString(), arr_str);
console.log('pop 删除数组的最后一个元素，并返回删除的元素(改变原数组)：' + arrNum.pop(), arrNum);
console.log('shift 删除数组的第一个元素，并返回删除的元素(改变原数组)：' + arrNum.shift(), arrNum);
console.log('unshift 增加数组的 元素（从第一个开始），并返回新的长度(改变原数组)：' + arrNum.unshift(0, 8), arrNum);
console.log('push 新增元素，并返回新的长度(改变原数组)：' + arrNum.push(8), arrNum);
console.log('reverse 反转元素顺序，并返回新的数组(改变原数组)：' + arrNum.reverse(), arrNum);
console.log('sort 对数组的元素进行排序，并返回新的数组(改变原数组)：' + arrNum.sort(), arrNum);
console.log('splice 对数组的元素进行增加（0）、删除（1），并返回新的数组(改变原数组)：' + arrNum.splice(2, 0, 6), arrNum);
console.log('splice 对数组的元素进行增加（0）、删除（1），并返回新的数组(改变原数组)：' + arrNum.splice(2, 1, 7), arrNum);
console.log('reduce 高阶');
// map
var myMap = new Map([
    ["aaa", 'vb']
]);
