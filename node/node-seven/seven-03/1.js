var path = require('path')

console.log(path.normalize('fo/js//a'))
console.log(path.normalize('fo/\\js//a').replace(/\\/g, '/'))
console.log(path.join('fo', 'df').replace(/\\/g, '/'))
console.log(path.extname('fo.fg.dfd'))