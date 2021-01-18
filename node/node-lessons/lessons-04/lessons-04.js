var express = require('express')
var superagent = require('superagent')
var cheerio = require('cheerio')
var eventproxy = require('eventproxy')
var url = require('url')

var app = express()
var ep = new eventproxy()
var cnodeUrl = 'https://cnodejs.org/'

app.get('/', function (req, res) {
  superagent.get(cnodeUrl)
    .end(function (err, sres) {
      if (err) {
        return console.err(err)
      }
      var getUrls = []
      var items = []
      var $ = cheerio.load(sres.text)

      $('#topic_list .topic_title').each(function (idx, ele) {
        var $ele = $(ele)
        var href = url.resolve(cnodeUrl, $ele.attr('href'))
        getUrls.push(href)
      })
      console.log(getUrls)

      ep.after('getHtml', getUrls.length, function (arr) {
        items = arr.map(function (i) {
          var item_url = i[0]
          var item_html = i[1]
          var $$ = cheerio.load(item_html)
          return ({
            title: $$('.topic_full_title').text().trim(),
            href: item_url,
            comment1: $$('.reply_content').eq(0).text().trim()
          })
        })
        res.send(items)
      })

      getUrls.forEach(function (url_item) {
        superagent.get(url_item)
          .end(function(url_err, url_res) {
            if(url_err) {
              return console.err(url_err)
            }
            ep.emit('getHtml', [url_item, url_res.text])
          })
      });
    })
})

app.listen(3000, function () {
  console.log('listen port 3000')
})