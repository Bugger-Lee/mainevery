const Vue = require('vue')
const server = require('express')()
const http = require('http')
const fs = require('fs')
const path = require('path')
// const renderer = require('vue-server-renderer').createRenderer()

const hostname = '127.0.0.1'
const port = 3000

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: hostname+':'+port
    },
    template: `<div>访问的url是：{{url}}</div>`
  })
  const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync(path.join(__dirname, './index.template.html'), 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Error')
      return
    }
    res.end(`${html}`)
  })
})



http.createServer(server).listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})
// server.listen(PORT, HOST, () => {
//   console.log(`server is listening on ${HOST}:${PORT}`)
// })