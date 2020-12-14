/**
 * 接口
 * 
 * 类
 */

//  接口
interface Pearon {
  name:string,
  age:number,
  isSay: ()=> string
}

var getNews:Pearon = {
  name: 'lijian',
  age: 26,
  isSay: ():string => {
    return 'I Love Moon'
  }
}
console.log(getNews.name, getNews.age, getNews.isSay())

// 联合类型 接口
interface Love {
  readonly id: number,
  sex: string|number,
  num?: number,
  [propName: string]: any
}

var haha:Love = {
  id: 15,
  sex: 'boy',
  num: 28,
  safe: '我是任意属性',
  fssf: '我也是任意属性'
}
console.log(haha.sex)
var haha:Love = {
  id: 16,
  sex: 666
}
console.log(haha.sex)

// 接口和数组
interface Go {
  [index: number]:string
}
var GoNew:Go = ['13', '56']
console.log(GoNew[0], GoNew[1])

interface ages {
  [index: string]: number
}

var list2:ages = {}
list2['ad'] = 2
console.log(list2['ad'])


// 接口继承
interface Age {
  age: number
}

interface Name {
  name: string
}

interface My extends Age,Name {}

var lis:My = <My>{}
lis.age = 27
lis.name = 'lijian'
console.log(lis.age, lis.name)

// 类
class Car {
  name:string;
  constructor(name:string) {
    this.name = name
  }
  log():void {
    console.log('车叫：' + this.name)
  }
}

var car = new Car('奔驰')
car.log()
console.log(car.name)

// 类的继承
class Animal {
  move(dis:number = 0) {
    console.log('这是move函数'+ dis)
  }
}

class Dog extends Animal {
  bark() {
    console.log('这是bark函数')
  }
}

var dog = new Dog()

dog.move()
dog.bark()
dog.move(62)

// 多重继承

class Animals {
  name: string
  age: number
  constructor(theName: string, ages: number) {
    this.name = theName
    this.age = ages
  }
  move(dis:number = 0) {
    console.log(`${this.name}爬了${dis}m`)
  }
  zou(diss:string) {
    console.log(diss)
  }
}

class Snake extends Animals {
  constructor(name: string) {
    super(name, 20)
  }
  move(dis = 5) {
    console.log('Snake~~~')
    super.move(dis)
  }
}

class Horse extends Animals {
  constructor(name:string) {
    super(name, 15)
  }
  move(dis = 45) {
    console.log('Horse')
    super.move(dis)
  }
}

var ssm = new Snake('gogo')
var hhr:Animals = new Horse('haha')

ssm.move()
ssm.move(50)
hhr.move()
hhr.move(32)

// 修饰符
class Pub {
  public name: string
  private age: number
  protected big: string
  constructor(names:string, ages:number, bigs: string) {
    this.name = names
    this.age = ages
    this.big = bigs
  }
}

class Pol extends Pub {
  private new:string
  constructor(names:string, ages:number, bigs: string, news: string) {
    super(names,ages,bigs)
    this.new = news
  }
}

new Pub('li', 5, 'd')
var sdd = new Pol('li', 5, 'd', '111')
sdd.name

// 存取器 get set

