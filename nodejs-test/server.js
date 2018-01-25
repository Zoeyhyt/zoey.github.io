var http = require('http')
var fs = require('fs')
var url = require('url')


var server = http.createServer(function(request, response){
  var temp = url.parse(request.url,true)
  var path = temp.pathname
  var query = temp.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/


  if(path === '/'){
    var string = fs.readFileSync('./index.html','utf8')
    var amount = fs.readFileSync('./db','utf8')
    string = string.replace('&&&amount&&&',amount)
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(string)
    response.end()
  }else if(path === '/style.css'){
    var string = fs.readFileSync('./style.css','utf8')
    response.setHeader('Content-Type','text/css')
    response.end(string)
  }else if(path === '/pay'){
    var amount = fs.readFileSync('./db','utf8')
    response.setHeader('Content-Type','application/javascript')
    response.statusCode = 200
    response.write(
       '${query.callback}.call(undefined,'success')') 
    )
    response.end()
    }else{
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write('呜呜呜')
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})



