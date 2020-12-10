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