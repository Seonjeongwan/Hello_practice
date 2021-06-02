
// express 모듈은 jade, ejs 등과 같은 동적 웹페이지 파일을 지원하고 있어 보다 손쉽게 애플리케이션 개발 가능

// express 모듈은 웹 애플리케이션을 개발할 때 가장 많이 사용 되고 있는 외부모듈

// express 모듈은 http 모듈에 비해 많은 기능을 갖추고 있어서 보다 쉰쉽게 웹 애프리케이션을 개발할 수 있게 됨

// express : express 모듈에서 제공하는 기능을 사용할 수 있는 객체를 반환하는 함수

// -get : get 방식으로 요청이 발생 했을 떄 호출될 함수를 등록함

// -post : post 방식으로 요청이 발생 했을 떄 호출될 함수를 등록함

// -listen : 서버를 가동시킴

var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("ROOT");
});

var server = app.listen(2000, function(){
    console.log("서버가동");
});
