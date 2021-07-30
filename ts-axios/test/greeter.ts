function greeter (person: string) {
  return 'Hello, ' + person
}

let user = 'Lee'
console.log(greeter(user))
// 接口
interface Person {
  firstName: string
  lastName: string
}

function greeters (person: Person) {
  return 'Hello, ' +  person.firstName + person.lastName
}

let users = {
  firstName: 'Lee',
  lastName: 'Jian'
}
console.log(greeters(users))

class Car {
  fullName: string
  firstName: string
  lastName: string
  constructor (firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.firstName + this.lastName
  }
}

let myCar = new Car('Hou', 'Yue')
console.log(greeters(myCar))
