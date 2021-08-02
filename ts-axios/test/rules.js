function Agg(person) {
    console.log(person.name + person.age);
}
function Agg2(person) {
    var newOne = { name: 'My', age: 58 };
    if (person.name) {
        newOne.name = person.name;
    }
    if (person.age) {
        newOne.age = person.age;
    }
    return newOne;
}
var Lee = { name: 'Lee' };
console.log(Agg(Lee), Agg2(Lee));
