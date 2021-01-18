var http = require('http')

http.createServer(function (req, res) {
  var body = []
  console.log(req.method)
  console.log(req.headers)
  req.on('data', function (chuck) {
    body.push(chuck)
    res.write(chuck)
  })
  req.on('end', function () {
    // body = Buffer.concat(body)
    // console.log(body.toString())
    res.end()
  })
  // res.writeHead(200, {'Content-Type': 'text-plain'})
  // res.end('Hello Node')
}).listen(1000)