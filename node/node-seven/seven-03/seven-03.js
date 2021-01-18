var fs = require('fs')

// function copy(src, dst) {
//   fs.writeFileSync(dst, fs.readFileSync(src))
// }
function copy(src, dst) {
  fs.createWriteStream(dst).on('pipe', (res) => {
    console.log('正在写入',res)
  })
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}
function main(argv) {
  copy(argv[0], argv[1])
}



main(process.argv.slice(2))
console.log(process.argv.slice(2))