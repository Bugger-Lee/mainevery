/**
 * 接口
 *
 * 类
 */
var getNews = {
    name: 'lijian',
    age: 26,
    isSay: function () {
        return 'I Love Moon';
    }
};
console.log(getNews.name, getNews.age, getNews.isSay());
var haha = {
    sex: 'boy'
};
console.log(haha.sex);
var haha = {
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
