//http 모듈
// 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈
// 일반적인 웹서버와 동일하게 동작
// http 모듈을 웹 서버의 기능을 할 수 있는 모듈
// createServer : 웹 서버 개체를 만듦
// listen : 웹 서버를 동작 시킴
// 클라이언트가 전달하는 파라미터는 url 모듈을 이용하면 코드로 받아낼 수 있음

var http = require("http");
var url = require("url"); //파라미터 로 처리할 경우
const { runInNewContext } = require("vm");

var server = http.createServer(function(req,res){

    // res.write("Hello World");

    var q = url.parse(req.url, true);

    res.writeHead(200,{"content-type":"text/html"});
    // console.log(req.url); //뒤에 슬래쉬 가 들어가며 분기 처리 가능

    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset='utf-8'/>");
    res.write("</head>");
    res.write("<body>");
    // res.write("<h1>Node.js 웹 애플리케이션 예제 입니다</h1>");
   
    // switch(req.url){
    //     case "/" :
    //         res.write("<h1>root 입니다</h1>");
    //         res.write("<a href ='test1'>test1</a><br/>");
    //         res.write("<a href ='test2'>test2</a><br/>");

    //         break;
    //     case "/test1" : 
    //         res.write("<h1>test1 입니다</h1>");
    //         break;
    //     case "/test2" : 
    //         res.write("<h1>test2 입니다</h1>");
    //         break;
    //     }
        switch(q.pathname){
            case "/" :
                res.write("<h1>root 입니다</h1>");
                res.write("<a href ='test1?data1=111'>test1</a><br/>"); //파라미터 넣어서 진행
                res.write("<a href ='test2?data1=222'>test2</a><br/>");
                break;
            case "/test1" : 
                res.write("<h1>test1 입니다</h1>");
                res.write("<h1>data1 : " + q.query.data1 + "<br/>");
                break;
            case "/test2" : 
                res.write("<h1>test2 입니다</h1>");
                res.write("<h1>data1 : " + q.query.data1 + "<br/>");
                break;
            }
    res.write("</body>");
    res.write("</html>");
    res.end();
});

server.listen(1244);
console.log("서버가동");