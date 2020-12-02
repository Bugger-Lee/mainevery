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
console.log(getNews.name, getNews.age, getNews.isSay)

// 联合类型 接口
interface Love {
  sex: string|number
}

var haha:Love = {
  sex: 'boy'
}
console.log(haha.sex)
var haha:Love = {
  sex: 666
}
console.log(haha.sex)

// 接口和数组
interface Go {
  [index: number]:string
}
var GoNew:Go = ['13', '56']
console.log(GoNew[0], GoNew[1])

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