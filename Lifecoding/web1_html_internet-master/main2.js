var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(async (request,response) => {
    var _url = await request.url;
    var queryData = await url.parse(_url, true).query;
    console.log(queryData.id);
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    var template = '';
    response.end(queryData.id);
 
});
app.listen(3000);