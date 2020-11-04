const Vue = require('vue')
const http = require('http')
const server = require('express')()
const fs = require('fs')
const path = require('path')
const createApp = require('./app')
// const renderer = require('vue-server-renderer').createRenderer()

const hostname = '127.0.0.1'
const port = 3000

const context = {
  title: 'vue ssr',
  url: '8000',
  metas: `
      <meta name="keyword" content="vue,ssr">
      <meta name="description" content="vue srr demo">
  `,
};

server.get('*', (req, res) => {
  const app = createApp(context)
  const renderer = require('vue-server-renderer').createRenderer({
    template: fs.readFileSync(path.join(__dirname, './index.template.html'), 'utf-8')
  })
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`${html}`)
  })
})



http.createServer(server).listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`)
})