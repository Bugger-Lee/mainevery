/**
 * 基础语法
 * 基础类型
 * 变量声明
 */
var msg = 'Hello Ts';
// 多行用;隔开
console.log(msg);
console.log('msg');
// 类
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log('dadada');
    };
    return Site;
}());
var obj = new Site();
obj.name();
// 枚举
var getuNum = function () {
    return 6;
};
var List;
(function (List) {
    List[List["A"] = 12] = "A";
    List[List["B"] = 13] = "B";
    List[List["C"] = 14] = "C";
    List[List["k"] = 15] = "k";
    List[List["a"] = 99] = "a";
    List[List["aa"] = 100] = "aa";
    List[List["u"] = getuNum()] = "u";
    List[List["uu"] = 5] = "uu";
    List[List["uuu"] = 6] = "uuu";
})(List || (List = {}));
console.log(List.C, List.k, List.aa, List.u, List.uu, List.uuu);
/**
 * 变量声明
 *
 */
var u_name;
console.log(u_name);
var user_name = 'xiaoming';
var score1 = 90;
var score2 = 98;
var sum = score1 + score2;
console.log("名字: " + user_name);
console.log("第一个科目成绩: " + score1);
console.log("第二个科目成绩: " + score2);
console.log("总成绩: " + sum);
/**
 * 类型断言
 *
 */
var str = null;
var str2 = str;
console.log(str, str2);
/**
 * 类型推断
 *
 */
var n_num = 2;
console.log('数字：' + n_num);
// n_num = '6' //不能将类型“\"6\"”分配给类型“number”
n_num = 6;
console.log(n_num);
/**
 * 变量作用域
 *
 */
var global_num = 12;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 15;
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 17;
        console.log('局部变量' + local_num);
    };
    Numbers.sval = 16;
    return Numbers;
}());
console.log('全局变量' + global_num, Numbers.sval);
var objs = new Numbers();
console.log('实例变量: ' + objs.num_val);
objs.storeNum();
