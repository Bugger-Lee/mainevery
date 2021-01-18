/**
 * 
 * 对象
 * 命名空间
 * 模块
 * 声明文件
 * 
*/

// 对象

var new_car = {
  name: '奔驰',
  money: 1000000,
  sayHi: () => {}
}
new_car.sayHi = () => {
  console.log('我的' + new_car.name + '花了' + new_car.money)
}
new_car.sayHi()
console.log(new_car)

// 鸭子类型(Duck Typing)
interface Duck {
  x:number
  y:string
}

function addDuck(xx:Duck, yy:Duck):Duck {
  var a = xx.x + xx.x
  var b = yy + 'haha'
  return {x: a, y: b}
}
addDuck({x: 5, y: '5'}, {x: 3, y: '8'})

// 命名空间

function created<T>(c: { new () : T }): T {
  return new c()
}
class aaa {
  name: string | undefined
}
console.log(typeof created(aaa).name, created(aaa).name)