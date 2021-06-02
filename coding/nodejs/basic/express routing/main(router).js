// 사용자의 요청에 따라 응답 결과를 달리 전달하는것을 라우팅이라고 함
// 웹 개발시 app.get("/") app.get("/test") 등의 작업을 많이 하는데 하나의 파일 에 다 작성하면 유지보수시 어려울 수 있음
// js 파일을 만들어 작성하면 파일을 분리 할 수 있기 때문에 관리하기에 용이해짐

var express = require("express");
var app = express();
var controller1 = require("./router/controller1")(app); 
//여기서의 app은 express 객체, 이객체가 routes의 controller1 으로 넘어감
var controller2 = require("./router/controller2")(app); 

// app.get("/", function(req,res){
//     res.send("ROOT");
// });

// app.get("/test1", function(req,res){
//     res.send("TEST1");
// });

// app.get("/test2", function(req,res){
//     res.send("TEST2");
// });

//이렇게 하나에 작성하는 것은 유지보수가 복잡

var server = app.listen(2000, function(){
    console.log("서버가동");
});