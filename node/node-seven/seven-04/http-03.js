var http = require('http')
var options = {
  hostname: 'www.example.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

var req = http.request(options, function (res) {})
req.write('Hello World')
req.end()