const Vue = require('vue')
const server = require('express')()

server.get('*', (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>访问的url是：{{url}}</div>`
  })
  const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
  })
  renderer.renderToString(app, (err, html) => {
    if (err) {
      res.status(500).end('Error')
      return
    }
    res.end(`
    <!DOCTYPE html>
      <html lang="en">
        <head><title>Hello</title></head>
        <body>${html}</body>
      </html>
    `)
  })
})
const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

server.listen(PORT, HOST, () => {
  console.log(`server is listening on ${HOST}:${PORT}`)
})