function greeter(person) {
    return 'Hello, ' + person;
}
var user = 'Lee';
console.log(greeter(user));
function greeters(person) {
    return 'Hello, ' + person.firstName + person.lastName;
}
var users = {
    firstName: 'Lee',
    lastName: 'Jian'
};
console.log(greeters(users));
var Car = /** @class */ (function () {
    function Car(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + this.lastName;
    }
    return Car;
}());
var myCar = new Car('Hou', 'Yue');
console.log(greeters(myCar));
