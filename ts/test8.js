/**
 * 接口
 *
 * 类
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var getNews = {
    name: 'lijian',
    age: 26,
    isSay: function () {
        return 'I Love Moon';
    }
};
console.log(getNews.name, getNews.age, getNews.isSay());
var haha = {
    id: 15,
    sex: 'boy',
    num: 28,
    safe: '我是任意属性',
    fssf: '我也是任意属性'
};
console.log(haha.sex);
var haha = {
    id: 16,
    sex: 666
};
console.log(haha.sex);
var GoNew = ['13', '56'];
console.log(GoNew[0], GoNew[1]);
var list2 = {};
list2['ad'] = 2;
console.log(list2['ad']);
var lis = {};
lis.age = 27;
lis.name = 'lijian';
console.log(lis.age, lis.name);
// 类
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.log = function () {
        console.log('车叫：' + this.name);
    };
    return Car;
}());
var car = new Car('奔驰');
car.log();
console.log(car.name);
// 类的继承
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function (dis) {
        if (dis === void 0) { dis = 0; }
        console.log('这是move函数' + dis);
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('这是bark函数');
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.move();
dog.bark();
dog.move(62);
// 多重继承
var Animals = /** @class */ (function () {
    function Animals(theName, ages) {
        this.name = theName;
        this.age = ages;
    }
    Animals.prototype.move = function (dis) {
        if (dis === void 0) { dis = 0; }
        console.log(this.name + "\u722C\u4E86" + dis + "m");
    };
    Animals.prototype.zou = function (diss) {
        console.log(diss);
    };
    return Animals;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name, 20) || this;
    }
    Snake.prototype.move = function (dis) {
        if (dis === void 0) { dis = 5; }
        console.log('Snake~~~');
        _super.prototype.move.call(this, dis);
    };
    return Snake;
}(Animals));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name, 15) || this;
    }
    Horse.prototype.move = function (dis) {
        if (dis === void 0) { dis = 45; }
        console.log('Horse');
        _super.prototype.move.call(this, dis);
    };
    return Horse;
}(Animals));
var ssm = new Snake('gogo');
var hhr = new Horse('haha');
ssm.move();
ssm.move(50);
hhr.move();
hhr.move(32);
// 修饰符
var Pub = /** @class */ (function () {
    function Pub(names, ages, bigs) {
        this.name = names;
        this.age = ages;
        this.big = bigs;
    }
    return Pub;
}());
var Pol = /** @class */ (function (_super) {
    __extends(Pol, _super);
    function Pol(names, ages, bigs, news) {
        var _this = _super.call(this, names, ages, bigs) || this;
        _this["new"] = news;
        return _this;
    }
    return Pol;
}(Pub));
new Pub('li', 5, 'd');
var sdd = new Pol('li', 5, 'd', '111');
sdd.name;
// 存取器 get set
