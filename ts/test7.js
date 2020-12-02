/**
 * 元组
 *
 * 联合类型
 *
 */
// 元组
var new_arr = [];
new_arr[0] = 2;
new_arr[1] = 3;
console.log(new_arr);
// 元组运算
new_arr.push(8, 9);
console.log(new_arr);
new_arr.pop();
console.log(new_arr);
// 更新元组
new_arr[0] = 8;
console.log(new_arr);
// 解构元组
var ad = new_arr[0], gdfg = new_arr[1];
console.log(ad, gdfg, new_arr.join('-'));
// 联合类型
var sec;
sec = 'sjk';
console.log('字符串：' + sec);
sec = 5;
console.log('数字：' + sec);
// 联合类型数组
var sec_arr;
sec_arr = ['dsas', 'sffsf'];
console.log('字符串数组：' + sec_arr);
sec_arr = [6, 5];
console.log('数字数组：' + sec_arr);
