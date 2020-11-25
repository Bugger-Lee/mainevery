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
