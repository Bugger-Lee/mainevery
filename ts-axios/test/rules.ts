// 接口
interface Person {
  name?: string // 可选属性
  age?: number
}
interface newOne {
  name: string
  age: number
}

function Agg(person: Person) {
  console.log(person.name + person.age)
}
function Agg2(person: Person): newOne {
  let newOne = {name: 'My', age: 58}
  if (person.name) {
    newOne.name = person.name
  }
  if (person.age) {
    newOne.age = person.age
  }
  return newOne
}

let Lee = {name: 'Lee'}
console.log(Agg(Lee), Agg2(Lee))

interface Nums {
  readonly x: number // 只读属性
  readonly y: string
}

let prid: Nums = {x: 5, y: 'arr'}
// prid.x = 5
let numsa: number[] = [1, 2, 3]
let numsRead: ReadonlyArray<number> = numsa
numsa[1] = 4
// numsRead[2] = 7
// numsa = numsRead
numsa = numsRead as number[]