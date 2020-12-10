/**
 *
 * 进阶
 *
 */
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
console.log(getName('5'));
var f = function () {
    return '666';
};
console.log(getName(f));
function types_new(n) {
    console.log(n);
}
types_new('scroll'); // 只能用字面量的类型
// 元组
var tom;
tom = ['Tom', 123];
tom.push(5);
tom.push('5');
console.log(tom);
