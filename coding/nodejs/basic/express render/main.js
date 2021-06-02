
var express = require("express");
var ejs = require("ejs");

var app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", ejs.renderFile);

app.use(express.static("public")); // public에 있는 파일들 사용

var controller = require("./router/controller")(app);

var server = app.listen(2000, function (){
    console.log("서버가 가동되었습니다.");
});