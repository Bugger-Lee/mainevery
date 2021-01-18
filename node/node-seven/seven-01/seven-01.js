function hello () {
  console.log('Hello Node')
}
hello()
/** 
 * require
*/
var {hellos, count} = require('./modules/test1.js')
hellos()
console.log(count())

var data = require('./modules/test1.json')
console.log(data[0].age)