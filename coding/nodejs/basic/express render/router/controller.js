
module.exports = function(app){
    app.get("/", function(req,res){
        // res.send("ROOT");
        // 만약 html 을 넘겨줘야한다면
        // var html = "<!DOCTYPE html>"
        //         +"<html>"
        //         +"<head>"
        //         +"<meta charset = 'utf-8'/>"
        //         +"</head>"
        //         +"<body>"
        //         +"<h1>ROOT</h1>"
        //         +"</body>"
        //         +"</html>";
        // res.send(html);
        //이렇게 문자열로 만들어서 html 코드를 치는 것은 비효율 적 사용 X
        res.render("index.html");
    });

    app.get("/test", function(req,res){
        // res.send("TEST");
        res.render("test.html");
    });
};