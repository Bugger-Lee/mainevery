/**
 *
 * 进阶
 *
 * 泛型
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
// 元组  超过 之后的为之前的联合类型
var tom;
tom = ['Tom', 123];
tom.push(5);
tom.push('5');
console.log(tom);
// 泛型
function indt(x) {
    return x;
}
console.log(indt(11254));
function indts(x) {
    return x;
}
console.log(indts('11254'));
console.log(indts(125));
console.log(indts(null));
// 泛型变量
function longArr(arr) {
    console.log(arr.length);
    return arr;
}
console.log(longArr([1, 'sdg']));
